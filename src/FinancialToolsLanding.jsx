import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Calculator, FileText, Bot, Shield, Zap, ChevronDown, Menu, X } from 'lucide-react';

const FinancialToolsLanding = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tools = [
    {
      id: 'tax-optimizer',
      title: 'AI-Powered Tax Optimization Assistant',
      description: 'Get personalized tax-saving recommendations powered by advanced AI analysis. Maximize your deductions and minimize your tax burden.',
      icon: Calculator,
      features: ['Smart Tax Calculations', 'Deduction Optimization', 'Filing Status Analysis', 'Real-time Updates'],
      gradient: 'from-orange-500 to-red-500',
      embedUrl: 'https://lucifer7210-income-tax-optimizer.hf.space/'
    },
    {
      id: 'mutual-fund',
      title: 'AI-Powered Mutual Fund Portfolio Optimizer',
      description: 'Optimize your investment portfolio using real Yahoo Finance data and advanced AI analysis for maximum returns.',
      icon: TrendingUp,
      features: ['Real-time Data Analysis', 'Risk Assessment', 'Portfolio Balancing', 'Performance Tracking'],
      gradient: 'from-orange-500 to-yellow-500',
      embedUrl: 'https://lucifer7210-mutual-fund-optimization.hf.space/'
    },
    {
      id: 'report-generator',
      title: 'Financial Report Generator',
      description: 'Generate comprehensive financial reports based on any stock ticker with detailed analysis and insights.',
      icon: FileText,
      features: ['Ticker Analysis', 'Comprehensive Reports', 'Market Insights', 'Data Visualization'],
      gradient: 'from-orange-500 to-pink-500',
      embedUrl: 'https://lucifer7210-finance-report-generator.hf.space/'
    }
  ];

  const HomePage = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">FinanceAI</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-orange-500 transition-colors">Features</a>
              <a href="#tools" className="text-gray-300 hover:text-orange-500 transition-colors">Tools</a>
              <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">About</a>
              <button
                onClick={() => document.getElementById('tools').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-lg font-medium hover:opacity-90 cursor-pointer transition-opacity">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-white cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden pt-16">
          <div className="px-4 py-8 space-y-6">
            <a href="#features" className="block text-xl text-gray-300 hover:text-orange-500">Features</a>
            <a href="#tools" className="block text-xl text-gray-300 hover:text-orange-500">Tools</a>
            <a href="#about" className="block text-xl text-gray-300 hover:text-orange-500">About</a>
            <button className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-30 min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/5"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gray-900/80 border border-gray-700/50 rounded-full mb-8 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-orange-500 mr-3" />
              <span className="text-sm text-gray-300 font-medium">AI-Powered Financial Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
              Smart Financial
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Decision Making
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Harness the power of AI to optimize your taxes, investments, and financial reports.
              Make smarter decisions with our suite of intelligent financial tools.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button
              onClick={() => document.getElementById('tools').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg shadow-orange-500/25 cursor-pointer"
            >
              Explore Tools <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-gray-700/50 px-8 py-4 rounded-xl font-semibold text-lg hover:border-orange-500/50 hover:bg-gray-900/30 transition-all backdrop-blur-sm cursor-pointer">
              Watch Demo
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {[
              { icon: Shield, title: "Secure & Private", desc: "Bank-level security protocols" },
              { icon: Zap, title: "Lightning Fast", desc: "Real-time data analysis" },
              { icon: Bot, title: "AI-Powered", desc: "Advanced ML algorithms" }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800/50 px-8 py-10 rounded-2xl backdrop-blur-sm hover:border-orange-500/30 hover:bg-gray-900/70 transition-all duration-300 group flex items-center justify-between gap-8">
                <div className='flex flex-col justify-start items-start flex-1 min-w-0'>
                  <h3 className="font-bold text-xl mb-4 text-white leading-tight">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-base">{feature.desc}</p>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 border border-orange-500/10">
                  <feature.icon className="w-8 h-8 text-orange-500" strokeWidth={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 px-4 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Our <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">AI Tools</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Three powerful tools designed to revolutionize your financial decision-making process with cutting-edge AI technology
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 xl:gap-10">
            {tools.map((tool) => (
              <div key={tool.id} className="group relative">
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${tool.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                <div className="relative bg-gray-900/80 border border-gray-800/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500 transform hover:-translate-y-3 backdrop-blur-sm">
                  <div className={`w-20 h-20 bg-gradient-to-r ${tool.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20`}>
                    <tool.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-orange-400 transition-colors">{tool.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">{tool.description}</p>

                  <ul className="space-y-3 mb-10">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setCurrentPage(tool.id)}
                    className={`w-full bg-gradient-to-r ${tool.gradient} px-6 py-4 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center justify-center group-hover:scale-105 shadow-lg shadow-orange-500/25 text-white cursor-pointer`}
                  >
                    Launch Tool <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gradient-to-b from-gray-950/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
                <span className="text-orange-500 text-sm font-medium">Why Choose Us</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Why Choose Our{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  AI Platform?
                </span>
              </h2>

              <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                Our cutting-edge AI technology processes vast amounts of financial data to provide
                you with actionable insights and recommendations tailored to your unique financial situation.
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: "Advanced AI Algorithms",
                    desc: "State-of-the-art machine learning models trained on financial data",
                    icon: "🧠"
                  },
                  {
                    title: "Real-time Data Processing",
                    desc: "Live market data integration with instant analysis and insights",
                    icon: "⚡"
                  },
                  {
                    title: "Personalized Recommendations",
                    desc: "Tailored financial advice based on your unique profile and goals",
                    icon: "🎯"
                  },
                  {
                    title: "Secure & Compliant",
                    desc: "Enterprise-grade security with full regulatory compliance",
                    icon: "🔒"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="text-xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2 text-white group-hover:text-orange-400 transition-colors">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              {/* Floating dashboard mockup */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gray-900/90 border border-gray-700/50 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="bg-black rounded-2xl p-6 border border-gray-800">
                    {/* Browser header */}
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-gray-800 rounded-lg px-3 py-1 ml-4">
                        <div className="text-xs text-gray-400">financeai.com/dashboard</div>
                      </div>
                    </div>

                    {/* Dashboard content */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="bg-gray-800 h-4 rounded-lg w-32"></div>
                        <div className="bg-orange-500/50 h-4 rounded-lg w-20"></div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800 h-20 rounded-lg p-3">
                          <div className="bg-orange-500/30 h-2 rounded w-16 mb-2"></div>
                          <div className="bg-gray-700 h-2 rounded w-12"></div>
                        </div>
                        <div className="bg-gray-800 h-20 rounded-lg p-3">
                          <div className="bg-red-500/30 h-2 rounded w-14 mb-2"></div>
                          <div className="bg-gray-700 h-2 rounded w-16"></div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 h-8 rounded-lg"></div>
                      <div className="space-y-2">
                        <div className="bg-gray-800 h-3 rounded w-3/4"></div>
                        <div className="bg-gray-800 h-3 rounded w-1/2"></div>
                        <div className="bg-orange-500/30 h-3 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">FinanceAI</span>
          </div>
          <p className="text-gray-400 mb-4">Empowering smart financial decisions with AI</p>
          <p className="text-gray-500 text-sm">Made with ❤️ By Raul Hesline Rebello, Aric Tuscano, Sinclair Pereira & Aryan Dabre </p>
        </div>
      </footer>
    </div>
  );

  const ToolPage = ({ tool }) => (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors"
              >
                ← Back to Home
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <tool.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">{tool.title}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Tool Content */}
      <div className="pt-16">
        <div className="p-4">
          <div className=" mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
              <iframe src={tool.embedUrl} title={tool.title} className="w-full h-[80vh] border-0" allow="clipboard-write"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Route the current page
  if (currentPage === 'home') {
    return <HomePage />;
  }

  const currentTool = tools.find(tool => tool.id === currentPage);
  if (currentTool) {
    return <ToolPage tool={currentTool} />;
  }

  return <HomePage />;
};

export default FinancialToolsLanding;
