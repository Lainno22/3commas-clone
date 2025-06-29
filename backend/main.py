from fastapi import FastAPI, HTTPException, Depends, Security, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional, Dict, Any
from datetime import datetime, timedelta
import motor.motor_asyncio
import os
from dotenv import load_dotenv
import json
import asyncio
from bson import ObjectId
import jwt
from passlib.hash import bcrypt
import requests
import random
from decimal import Decimal

# Load environment variables
load_dotenv()

app = FastAPI(title="3Commas Clone API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "test_database")
JWT_SECRET = os.getenv("JWT_SECRET", "your-secret-key-here")
JWT_ALGORITHM = "HS256"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

# Security
security = HTTPBearer()

# Pydantic Models
class UserCreate(BaseModel):
    email: EmailStr
    password: str
    name: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class User(BaseModel):
    id: str = Field(alias="_id")
    email: str
    name: str
    created_at: datetime
    
    class Config:
        populate_by_name = True

class Portfolio(BaseModel):
    id: str = Field(alias="_id")
    user_id: str
    exchange: str
    total_value: float
    holdings: List[Dict[str, Any]]
    updated_at: datetime
    
    class Config:
        populate_by_name = True

class TradingBot(BaseModel):
    id: str = Field(alias="_id")
    user_id: str
    name: str
    bot_type: str  # 'dca', 'grid', 'signal'
    pair: str
    status: str  # 'active', 'paused', 'stopped'
    profit: float
    config: Dict[str, Any]
    created_at: datetime
    updated_at: datetime
    
    class Config:
        populate_by_name = True

class BotCreate(BaseModel):
    name: str
    bot_type: str
    pair: str
    config: Dict[str, Any]

class MarketData(BaseModel):
    symbol: str
    price: float
    change_24h: float
    volume_24h: float
    updated_at: datetime

# Utility functions
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(days=7)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, JWT_SECRET, algorithm=JWT_ALGORITHM)
    return encoded_jwt

async def get_current_user(credentials: HTTPAuthorizationCredentials = Security(security)):
    try:
        payload = jwt.decode(credentials.credentials, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        user_id = payload.get("sub")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        
        user = await db.users.find_one({"_id": ObjectId(user_id)})
        if user is None:
            raise HTTPException(status_code=401, detail="User not found")
        
        return user
    except jwt.JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

def serialize_doc(doc):
    """Convert MongoDB ObjectId to string"""
    if doc:
        doc["_id"] = str(doc["_id"])
    return doc

# Crypto market data simulation (in production, use real APIs like CoinGecko)
async def get_crypto_prices():
    """Simulate real crypto prices - in production use real APIs"""
    return {
        "BTC": {"price": 45000 + random.uniform(-1000, 1000), "change_24h": random.uniform(-5, 5)},
        "ETH": {"price": 2800 + random.uniform(-200, 200), "change_24h": random.uniform(-5, 5)},
        "ADA": {"price": 0.5 + random.uniform(-0.05, 0.05), "change_24h": random.uniform(-5, 5)},
        "DOT": {"price": 7.5 + random.uniform(-0.5, 0.5), "change_24h": random.uniform(-5, 5)},
        "BNB": {"price": 320 + random.uniform(-20, 20), "change_24h": random.uniform(-5, 5)},
        "SOL": {"price": 100 + random.uniform(-10, 10), "change_24h": random.uniform(-5, 5)},
    }

# Routes
@app.get("/")
async def root():
    return {"message": "3Commas Clone API is running!"}

@app.get("/api/")
async def api_root():
    return {"message": "3Commas Clone API is running!"}

# Authentication Routes
@app.post("/api/auth/register")
async def register(user: UserCreate):
    # Check if user exists
    existing_user = await db.users.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Hash password
    hashed_password = bcrypt.hash(user.password)
    
    # Create user
    user_doc = {
        "email": user.email,
        "name": user.name,
        "password": hashed_password,
        "created_at": datetime.utcnow()
    }
    
    result = await db.users.insert_one(user_doc)
    
    # Create access token
    access_token = create_access_token(data={"sub": str(result.inserted_id)})
    
    # Create default portfolio
    await create_default_portfolio(str(result.inserted_id))
    
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/api/auth/login")
async def login(user: UserLogin):
    # Find user
    db_user = await db.users.find_one({"email": user.email})
    if not db_user or not bcrypt.verify(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Create access token
    access_token = create_access_token(data={"sub": str(db_user["_id"])})
    
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/api/auth/me")
async def get_current_user_profile(current_user: dict = Depends(get_current_user)):
    return serialize_doc(current_user)

# Portfolio Routes
async def create_default_portfolio(user_id: str):
    """Create a default portfolio with sample data"""
    crypto_prices = await get_crypto_prices()
    
    holdings = []
    total_value = 0
    
    # Create sample holdings
    sample_holdings = {
        "BTC": {"amount": 0.05234, "symbol": "BTC"},
        "ETH": {"amount": 1.2345, "symbol": "ETH"},
        "ADA": {"amount": 1234.56, "symbol": "ADA"},
        "DOT": {"amount": 45.67, "symbol": "DOT"}
    }
    
    for symbol, holding in sample_holdings.items():
        price = crypto_prices[symbol]["price"]
        value = holding["amount"] * price
        change_24h = crypto_prices[symbol]["change_24h"]
        
        holdings.append({
            "symbol": symbol,
            "amount": holding["amount"],
            "price": price,
            "value": value,
            "change_24h": change_24h
        })
        total_value += value
    
    portfolio_doc = {
        "user_id": user_id,
        "exchange": "Binance",
        "total_value": total_value,
        "holdings": holdings,
        "updated_at": datetime.utcnow()
    }
    
    await db.portfolios.insert_one(portfolio_doc)

@app.get("/api/portfolio")
async def get_portfolio(current_user: dict = Depends(get_current_user)):
    portfolio = await db.portfolios.find_one({"user_id": str(current_user["_id"])})
    if not portfolio:
        # Create default portfolio if it doesn't exist
        await create_default_portfolio(str(current_user["_id"]))
        portfolio = await db.portfolios.find_one({"user_id": str(current_user["_id"])})
    
    return serialize_doc(portfolio)

@app.put("/api/portfolio/refresh")
async def refresh_portfolio(current_user: dict = Depends(get_current_user)):
    """Refresh portfolio with latest market prices"""
    portfolio = await db.portfolios.find_one({"user_id": str(current_user["_id"])})
    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio not found")
    
    crypto_prices = await get_crypto_prices()
    updated_holdings = []
    total_value = 0
    
    for holding in portfolio["holdings"]:
        symbol = holding["symbol"]
        if symbol in crypto_prices:
            price = crypto_prices[symbol]["price"]
            value = holding["amount"] * price
            change_24h = crypto_prices[symbol]["change_24h"]
            
            updated_holdings.append({
                "symbol": symbol,
                "amount": holding["amount"],
                "price": price,
                "value": value,
                "change_24h": change_24h
            })
            total_value += value
    
    await db.portfolios.update_one(
        {"user_id": str(current_user["_id"])},
        {
            "$set": {
                "holdings": updated_holdings,
                "total_value": total_value,
                "updated_at": datetime.utcnow()
            }
        }
    )
    
    return {"message": "Portfolio refreshed successfully"}

# Trading Bot Routes
@app.get("/api/bots")
async def get_bots(current_user: dict = Depends(get_current_user)):
    bots = []
    async for bot in db.trading_bots.find({"user_id": str(current_user["_id"])}):
        bots.append(serialize_doc(bot))
    return bots

@app.post("/api/bots")
async def create_bot(bot: BotCreate, current_user: dict = Depends(get_current_user)):
    bot_doc = {
        "user_id": str(current_user["_id"]),
        "name": bot.name,
        "bot_type": bot.bot_type,
        "pair": bot.pair,
        "status": "active",
        "profit": random.uniform(10, 500),  # Simulate profit
        "config": bot.config,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
    
    result = await db.trading_bots.insert_one(bot_doc)
    bot_doc["_id"] = str(result.inserted_id)
    
    return serialize_doc(bot_doc)

@app.put("/api/bots/{bot_id}/status")
async def update_bot_status(bot_id: str, status: str, current_user: dict = Depends(get_current_user)):
    result = await db.trading_bots.update_one(
        {"_id": ObjectId(bot_id), "user_id": str(current_user["_id"])},
        {
            "$set": {
                "status": status,
                "updated_at": datetime.utcnow()
            }
        }
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Bot not found")
    
    return {"message": f"Bot status updated to {status}"}

@app.delete("/api/bots/{bot_id}")
async def delete_bot(bot_id: str, current_user: dict = Depends(get_current_user)):
    result = await db.trading_bots.delete_one(
        {"_id": ObjectId(bot_id), "user_id": str(current_user["_id"])}
    )
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Bot not found")
    
    return {"message": "Bot deleted successfully"}

# Market Data Routes
@app.get("/api/market/{symbol}")
async def get_market_data(symbol: str):
    crypto_prices = await get_crypto_prices()
    if symbol.upper() not in crypto_prices:
        raise HTTPException(status_code=404, detail="Symbol not found")
    
    data = crypto_prices[symbol.upper()]
    return {
        "symbol": symbol.upper(),
        "price": data["price"],
        "change_24h": data["change_24h"],
        "volume_24h": random.uniform(1000000, 10000000),  # Simulate volume
        "updated_at": datetime.utcnow()
    }

@app.get("/api/market")
async def get_all_market_data():
    crypto_prices = await get_crypto_prices()
    market_data = []
    
    for symbol, data in crypto_prices.items():
        market_data.append({
            "symbol": symbol,
            "price": data["price"],
            "change_24h": data["change_24h"],
            "volume_24h": random.uniform(1000000, 10000000),
            "updated_at": datetime.utcnow()
        })
    
    return market_data

# Dashboard Stats Routes
@app.get("/api/dashboard/stats")
async def get_dashboard_stats(current_user: dict = Depends(get_current_user)):
    # Get portfolio
    portfolio = await db.portfolios.find_one({"user_id": str(current_user["_id"])})
    
    # Get active bots count
    active_bots = await db.trading_bots.count_documents({
        "user_id": str(current_user["_id"]),
        "status": "active"
    })
    
    # Get total bots
    total_bots = await db.trading_bots.count_documents({"user_id": str(current_user["_id"])})
    
    # Calculate total profit from bots
    bots = db.trading_bots.find({"user_id": str(current_user["_id"])})
    total_profit = 0
    async for bot in bots:
        total_profit += bot.get("profit", 0)
    
    return {
        "total_portfolio_value": portfolio["total_value"] if portfolio else 0,
        "active_bots": active_bots,
        "total_bots": total_bots,
        "total_profit": total_profit,
        "exchanges_connected": 2,  # Mock data
        "profit_change_24h": random.uniform(1, 10)  # Mock data
    }

# Initialize default data
@app.on_event("startup")
async def startup_event():
    # Create default demo bots for existing users
    users = db.users.find({})
    async for user in users:
        user_id = str(user["_id"])
        
        # Check if user already has bots
        existing_bots = await db.trading_bots.count_documents({"user_id": user_id})
        if existing_bots == 0:
            # Create sample bots
            sample_bots = [
                {
                    "user_id": user_id,
                    "name": "BTC DCA Bot",
                    "bot_type": "dca",
                    "pair": "BTC/USDT",
                    "status": "active",
                    "profit": random.uniform(100, 500),
                    "config": {"interval": "daily", "amount": 100},
                    "created_at": datetime.utcnow(),
                    "updated_at": datetime.utcnow()
                },
                {
                    "user_id": user_id,
                    "name": "ETH Grid Bot",
                    "bot_type": "grid",
                    "pair": "ETH/USDT",
                    "status": "active",
                    "profit": random.uniform(50, 300),
                    "config": {"grid_size": 10, "price_range": [2500, 3000]},
                    "created_at": datetime.utcnow(),
                    "updated_at": datetime.utcnow()
                },
                {
                    "user_id": user_id,
                    "name": "ADA Signal Bot",
                    "bot_type": "signal",
                    "pair": "ADA/USDT",
                    "status": "paused",
                    "profit": random.uniform(20, 100),
                    "config": {"signal_source": "tradingview", "strategy": "RSI"},
                    "created_at": datetime.utcnow(),
                    "updated_at": datetime.utcnow()
                }
            ]
            
            await db.trading_bots.insert_many(sample_bots)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)