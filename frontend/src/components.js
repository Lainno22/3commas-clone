import React, { useState } from 'react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">3Commas</span>
              </div>
            </div>
            <nav className="hidden md:ml-10 md:flex space-x-8">
              <a href="/trading-bots" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Trading Bots</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Solutions</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Features</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Plans</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Price Charts</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Developers</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Company</a>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Sign In</a>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Sign Up
            </button>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-1">🌐</span>
              <span>EN</span>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="/trading-bots" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600">Trading Bots</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600">Solutions</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600">Features</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600">Plans</a>
          </div>
        </div>
      )}
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Automate crypto trading:<br />
            <span className="text-emerald-600">build, backtest, optimize, execute</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join millions of traders using 3Commas to automate their cryptocurrency trading with advanced bots and smart strategies.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transform transition hover:scale-105">
            Start Free Trial
          </button>
          
          <div className="flex justify-center items-center mt-8 space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Trusted by 2M+ traders
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.5/5 rating
            </div>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto">
            <img 
              src="https://images.pexels.com/photos/7789849/pexels-photo-7789849.jpeg" 
              alt="3Commas Trading Dashboard" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Floating Icons */}
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-bitcoin-orange rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">₿</span>
          </div>
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">Ξ</span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">▲</span>
          </div>
          <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">⚡</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { value: '2M', label: 'Traders registered', color: 'text-blue-600' },
    { value: '2.4M', label: 'Crypto exchanges connected', color: 'text-green-600' },
    { value: '1.7M', label: 'Strategies launched before launch', color: 'text-purple-600' },
    { value: '15.5M', label: 'Strategies executed', color: 'text-orange-600' }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The choice of elite traders since 2017
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section Component
const BenefitsSection = () => {
  const benefits = [
    {
      icon: '📊',
      title: 'Backtest and optimize your strategy using full history',
      description: 'Test your trading strategies with historical data to ensure maximum profitability before going live.'
    },
    {
      icon: '🧠',
      title: 'Stay emotionally detached during market volatility',
      description: 'Remove emotions from trading decisions and stick to your predetermined strategy regardless of market conditions.'
    },
    {
      icon: '📈',
      title: 'Turn TradingView signals into automated instruments',
      description: 'Convert your favorite TradingView indicators and signals into fully automated trading bots.'
    },
    {
      icon: '🔗',
      title: 'Access all your exchanges within a single ecosystem',
      description: 'Manage multiple exchange accounts from one unified dashboard for maximum efficiency.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How 3Commas benefits you
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <img 
                src="https://images.unsplash.com/photo-1639768939489-025b90ba9f23" 
                alt="3Commas Benefits Visualization" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Start Trading on 3Commas Today
        </h2>
        <p className="text-xl text-emerald-100 mb-8">
          Seize opportunities that manual traders can't
        </p>
        <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transform transition hover:scale-105">
          Start Free Trial
        </button>
      </div>
    </section>
  );
};

// Get Started Section Component
const GetStartedSection = () => {
  const steps = [
    {
      step: 1,
      title: 'Link your exchange account',
      description: 'Connect your crypto exchange account using secure API keys. Your funds stay on the exchange.',
      image: 'https://images.unsplash.com/photo-1657972170499-3376d9eb8f65'
    },
    {
      step: 2,
      title: 'Build, backtest, and refine your strategy',
      description: 'Create and test your trading strategy using historical data. Optimize parameters before going live.',
      image: 'https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg'
    },
    {
      step: 3,
      title: 'Let your bots work hard for your success',
      description: 'Deploy your automated trading bots and monitor their performance. Adjust strategy as needed.',
      image: 'https://images.unsplash.com/photo-1645731504293-ad4d5da42a10'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get started in 3 easy steps
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Trading Toolkit Section Component
const TradingToolkitSection = () => {
  const tools = [
    {
      name: 'DCA Bot',
      description: 'This bot stands as the most flexible and configurable within the 3Commas ecosystem. Customize it to align with your unique strategies.',
      features: ['Flexible configuration', 'Risk management', 'Multiple take profit levels']
    },
    {
      name: 'Signal Bot',
      description: 'Execute trades based on external signals from TradingView, Telegram, or other sources automatically.',
      features: ['TradingView integration', 'Telegram signals', 'Custom webhooks']
    },
    {
      name: 'Grid Bot',
      description: 'Perfect for sideways markets, placing buy and sell orders at predetermined intervals.',
      features: ['Sideways market optimization', 'Automated grid placement', 'Profit from volatility']
    },
    {
      name: 'Smart Trade',
      description: 'Advanced order management with multiple take profit and stop loss levels for manual trading.',
      features: ['Multiple TP/SL levels', 'Trailing stop loss', 'Advanced order types']
    },
    {
      name: 'Terminal',
      description: 'Professional trading terminal with advanced charting and order management capabilities.',
      features: ['Advanced charting', 'Order book analysis', 'Portfolio management']
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            3Commas Trading Toolkit
          </h2>
          <p className="text-xl text-gray-600">
            Build your financial future with trading bots that can dominate any market
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">{tool.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {tool.name}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {tool.description}
              </p>
              <ul className="space-y-2">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <span className="ml-2 text-xl font-bold">3Commas</span>
            </div>
            <p className="text-gray-400">
              The leading cryptocurrency trading platform for automated trading and portfolio management.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Trading Bots</a></li>
              <li><a href="#" className="hover:text-white">Smart Trading</a></li>
              <li><a href="#" className="hover:text-white">Portfolio Management</a></li>
              <li><a href="#" className="hover:text-white">Copy Trading</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">API Documentation</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 3Commas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Trading Bots Page Component
const TradingBotsPage = () => {
  const [activeBot, setActiveBot] = useState('dca');
  
  const botTypes = {
    dca: {
      name: 'DCA Bot',
      description: 'Dollar-Cost Averaging bot for systematic investing',
      features: ['Automated buying', 'Risk management', 'Customizable intervals'],
      image: 'https://images.unsplash.com/photo-1645731504293-ad4d5da42a10'
    },
    grid: {
      name: 'Grid Bot',
      description: 'Profit from market volatility with grid trading',
      features: ['Sideways market optimization', 'Automated grid placement', 'Profit from volatility'],
      image: 'https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg'
    },
    signal: {
      name: 'Signal Bot',
      description: 'Execute trades based on external signals',
      features: ['TradingView integration', 'Telegram signals', 'Custom webhooks'],
      image: 'https://images.unsplash.com/photo-1639768939489-025b90ba9f23'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trading Bots</h1>
          <p className="text-xl text-gray-600">Choose the perfect bot for your trading strategy</p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {Object.entries(botTypes).map(([key, bot]) => (
              <button
                key={key}
                onClick={() => setActiveBot(key)}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeBot === key 
                    ? 'bg-emerald-500 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {bot.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {botTypes[activeBot].name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {botTypes[activeBot].description}
              </p>
              <ul className="space-y-3 mb-8">
                {botTypes[activeBot].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold">
                Create {botTypes[activeBot].name}
              </button>
            </div>
            <div>
              <img 
                src={botTypes[activeBot].image} 
                alt={botTypes[activeBot].name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Page Component
const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const portfolioData = [
    { coin: 'BTC', amount: '0.05234', value: '$2,145.67', change: '+5.2%', changeColor: 'text-green-600' },
    { coin: 'ETH', amount: '1.2345', value: '$3,456.78', change: '-2.1%', changeColor: 'text-red-600' },
    { coin: 'ADA', amount: '1,234.56', value: '$567.89', change: '+12.3%', changeColor: 'text-green-600' },
    { coin: 'DOT', amount: '45.67', value: '$234.56', change: '+8.9%', changeColor: 'text-green-600' },
  ];

  const activeBots = [
    { name: 'BTC DCA Bot', status: 'Active', profit: '+$234.56', pairs: 'BTC/USDT', type: 'DCA' },
    { name: 'ETH Grid Bot', status: 'Active', profit: '+$123.45', pairs: 'ETH/USDT', type: 'Grid' },
    { name: 'ADA Signal Bot', status: 'Paused', profit: '+$45.67', pairs: 'ADA/USDT', type: 'Signal' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Monitor your trading performance and portfolio</p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Portfolio Value</h3>
            <p className="text-2xl font-bold text-gray-900">$6,404.90</p>
            <p className="text-sm text-green-600">+5.2% (24h)</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Active Bots</h3>
            <p className="text-2xl font-bold text-gray-900">3</p>
            <p className="text-sm text-blue-600">2 profitable</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Profit</h3>
            <p className="text-2xl font-bold text-green-600">+$403.68</p>
            <p className="text-sm text-green-600">+12.3% (All time)</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Exchanges Connected</h3>
            <p className="text-2xl font-bold text-gray-900">2</p>
            <p className="text-sm text-gray-600">Binance, Coinbase</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Portfolio Overview</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {portfolioData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <span className="font-bold text-sm">{item.coin}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.coin}</p>
                          <p className="text-sm text-gray-600">{item.amount}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{item.value}</p>
                        <p className={`text-sm ${item.changeColor}`}>{item.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Active Bots</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {activeBots.map((bot, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{bot.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          bot.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {bot.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{bot.pairs}</p>
                      <p className="text-sm font-medium text-green-600">{bot.profit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Portfolio Page Component
const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio Management</h1>
          <p className="text-gray-600">Track and manage your cryptocurrency portfolio across all exchanges</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <img 
            src="https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg" 
            alt="Portfolio Management"
            className="w-full max-w-md mx-auto rounded-lg mb-6"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Portfolio Management</h2>
          <p className="text-gray-600 mb-6">
            Monitor your entire cryptocurrency portfolio across multiple exchanges from a single dashboard. 
            Get real-time insights, performance analytics, and automated rebalancing.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold">
            Connect Exchange
          </button>
        </div>
      </div>
    </div>
  );
};

// Export all components
const Components = {
  Header,
  HeroSection,
  StatsSection,
  BenefitsSection,
  CTASection,
  GetStartedSection,
  TradingToolkitSection,
  Footer,
  TradingBotsPage,
  DashboardPage,
  PortfolioPage
};

export default Components;