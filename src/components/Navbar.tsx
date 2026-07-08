import React, { useState } from 'react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenAuthModal: (mode: 'login' | 'signup') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenAuthModal }) => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setProductsOpen(false);
    setSolutionsOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center">
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-md shadow-cyan-500/10 group-hover:shadow-cyan-500/20 transition-all">
              <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-2xl group-hover:scale-110 transition-transform">
                  bolt
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-wider text-xl text-slate-900 group-hover:text-cyan-600 transition-colors">
                SIGTRON
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase -mt-1">
                Cloud Compute
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation (Aligned Right) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 ml-auto mr-4 lg:mr-8">
          
          {/* Products Dropdown */}
          <div className="relative" onMouseLeave={() => setProductsOpen(false)}>
            <button
              onMouseEnter={() => { setProductsOpen(true); setSolutionsOpen(false); }}
              onClick={() => setProductsOpen(!productsOpen)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'products' ? 'text-cyan-600 bg-cyan-50 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Products
              <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${productsOpen ? 'rotate-180 text-cyan-600' : 'text-slate-400'}`}>
                expand_more
              </span>
            </button>

            {productsOpen && (
              <div className="absolute left-0 mt-2 w-72 rounded-2xl bg-white border border-slate-200 shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-2 border-b border-slate-100 mb-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Compute Platforms</span>
                </div>
                <button
                  onClick={() => handleNavClick('products')}
                  className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                >
                  <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors mt-0.5">
                    <span className="material-symbols-outlined text-xl">terminal</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-cyan-600">AI Playgrounds</div>
                    <div className="text-xs text-slate-500 mt-0.5">Instant serverless Jupyter & LLM sandbox</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('products')}
                  className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors mt-0.5">
                    <span className="material-symbols-outlined text-xl">memory</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">Cloud Compute VMs</div>
                    <div className="text-xs text-slate-500 mt-0.5">Dedicated H100 & Blackwell bare metal</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('products')}
                  className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                >
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-colors mt-0.5">
                    <span className="material-symbols-outlined text-xl">hub</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600">Scale & Clusters</div>
                    <div className="text-xs text-slate-500 mt-0.5">InfiniBand interconnected supercomputing</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Pricing */}
          <button
            onClick={() => handleNavClick('pricing')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'pricing' ? 'text-cyan-600 bg-cyan-50 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Pricing
          </button>

          {/* Docs */}
          <button
            onClick={() => handleNavClick('docs')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'docs' ? 'text-cyan-600 bg-cyan-50 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Docs
          </button>

          {/* Solutions Dropdown */}
          <div className="relative" onMouseLeave={() => setSolutionsOpen(false)}>
            <button
              onMouseEnter={() => { setSolutionsOpen(true); setProductsOpen(false); }}
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'support' ? 'text-cyan-600 bg-cyan-50 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Solutions & Support
              <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-cyan-600' : 'text-slate-400'}`}>
                expand_more
              </span>
            </button>

            {solutionsOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <button
                  onClick={() => handleNavClick('support')}
                  className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left text-sm font-medium text-slate-700 hover:text-cyan-600"
                >
                  <span className="material-symbols-outlined text-cyan-600">domain</span>
                  Enterprise AI Architecture
                </button>
                <button
                  onClick={() => handleNavClick('support')}
                  className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left text-sm font-medium text-slate-700 hover:text-cyan-600"
                >
                  <span className="material-symbols-outlined text-purple-600">biotech</span>
                  Research & HPC Labs
                </button>
                <button
                  onClick={() => handleNavClick('support')}
                  className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left text-sm font-medium text-slate-700 hover:text-cyan-600"
                >
                  <span className="material-symbols-outlined text-amber-600">rocket_launch</span>
                  Startups & Scaleups
                </button>
                <div className="border-t border-slate-100 my-1 pt-1">
                  <button
                    onClick={() => handleNavClick('support')}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left text-sm font-medium text-slate-700 hover:text-cyan-600"
                  >
                    <span className="material-symbols-outlined text-emerald-600">support_agent</span>
                    24/7 Expert Support
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenAuthModal('login')}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all focus:outline-none"
          >
            Log In
          </button>
          <button
            onClick={() => onOpenAuthModal('signup')}
            className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none shadow-md shadow-cyan-500/10"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-xl transition-all group-hover:opacity-100 opacity-90 animate-pulse duration-1000"></span>
            <div className="relative px-5 py-2 bg-slate-900 group-hover:bg-transparent transition-colors rounded-[11px] flex items-center gap-2 text-sm font-semibold text-white">
              <span>Get Started</span>
              <span className="material-symbols-outlined text-[18px] text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </div>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center gap-3 ${activeTab === 'home' ? 'bg-cyan-50 text-cyan-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="material-symbols-outlined">home</span> Home Overview
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center gap-3 ${activeTab === 'products' ? 'bg-cyan-50 text-cyan-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="material-symbols-outlined">memory</span> Products & Compute
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center gap-3 ${activeTab === 'pricing' ? 'bg-cyan-50 text-cyan-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="material-symbols-outlined">payments</span> Pricing & Billing
            </button>
            <button
              onClick={() => handleNavClick('docs')}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center gap-3 ${activeTab === 'docs' ? 'bg-cyan-50 text-cyan-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="material-symbols-outlined">menu_book</span> Documentation
            </button>
            <button
              onClick={() => handleNavClick('support')}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center gap-3 ${activeTab === 'support' ? 'bg-cyan-50 text-cyan-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="material-symbols-outlined">help</span> Support & Solutions
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 flex gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuthModal('login'); }}
              className="flex-1 py-3 rounded-xl bg-slate-100 text-center text-sm font-semibold text-slate-700"
            >
              Log In
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuthModal('signup'); }}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-center text-sm font-semibold text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
