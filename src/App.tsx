import React, { useState } from 'react';
import { ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProductsPage } from './components/ProductsPage';
import { PricingPage } from './components/PricingPage';
import { DocsPage } from './components/DocsPage';
import { SupportPage } from './components/SupportPage';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [authModal, setAuthModal] = useState<{ open: boolean; mode: 'login' | 'signup' }>({
    open: false,
    mode: 'signup'
  });
  const [emailInput, setEmailInput] = useState('');
  const [authSuccess, setAuthSuccess] = useState(false);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthSuccess(true);
    setTimeout(() => {
      setAuthSuccess(false);
      setAuthModal({ open: false, mode: 'signup' });
      setEmailInput('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAuthModal={(mode) => setAuthModal({ open: true, mode })}
      />

      {/* Main Screen Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onOpenAuthModal={(mode) => setAuthModal({ open: true, mode })}
          />
        )}
        {activeTab === 'products' && (
          <ProductsPage
            setActiveTab={setActiveTab}
            onOpenAuthModal={(mode) => setAuthModal({ open: true, mode })}
          />
        )}
        {activeTab === 'pricing' && (
          <PricingPage
            setActiveTab={setActiveTab}
            onOpenAuthModal={(mode) => setAuthModal({ open: true, mode })}
          />
        )}
        {activeTab === 'docs' && <DocsPage />}
        {activeTab === 'support' && <SupportPage />}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Auth / Get Started Modal */}
      {authModal.open && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-white border border-slate-200 shadow-2xl p-8 overflow-hidden">
            
            <button
              onClick={() => setAuthModal({ open: false, mode: 'signup' })}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-cyan-600 text-2xl">bolt</span>
              <span className="font-display font-bold text-slate-900 tracking-wider">SIGTRON CLOUD</span>
            </div>

            {authSuccess ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Account Created Successfully!</h3>
                <p className="text-xs text-slate-500 font-mono">$100 GPU compute credits have been deposited to your test wallet.</p>
              </div>
            ) : (
              <form onSubmit={handleAuthSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-display font-extrabold text-slate-900">
                    {authModal.mode === 'signup' ? 'Create Free Account' : 'Welcome Back'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {authModal.mode === 'signup' 
                      ? 'Deploy bare metal Blackwell & H100 pods in seconds.' 
                      : 'Log in to manage your active compute workloads.'}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 uppercase mb-1.5">Work Email</label>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="engineer@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 uppercase mb-1.5">SSH Public Key or Password</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••••••"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white text-sm"
                    />
                  </div>
                </div>

                {authModal.mode === 'signup' && (
                  <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center gap-3 text-xs font-mono text-cyan-800">
                    <span className="material-symbols-outlined text-cyan-600">gift</span>
                    <span>Includes $100 free developer credits</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:brightness-110 text-white font-extrabold text-sm shadow-xl shadow-cyan-600/20 transition-all"
                >
                  {authModal.mode === 'signup' ? 'Claim Credits & Continue' : 'Authenticate to Pod'}
                </button>

                <div className="text-center text-xs text-slate-500 pt-2">
                  {authModal.mode === 'signup' ? (
                    <span>Already have an account? <button type="button" onClick={() => setAuthModal({ open: true, mode: 'login' })} className="text-cyan-600 hover:underline font-bold">Log In</button></span>
                  ) : (
                    <span>Don't have an account? <button type="button" onClick={() => setAuthModal({ open: true, mode: 'signup' })} className="text-cyan-600 hover:underline font-bold">Sign Up Free</button></span>
                  )}
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default App;
