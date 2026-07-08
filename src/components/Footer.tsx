import React from 'react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-600 text-sm relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-100">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
                  <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 text-lg font-bold">
                    bolt
                  </span>
                </div>
              </div>
              <span className="font-display font-extrabold tracking-wider text-lg text-slate-900">
                SIGTRON
              </span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              SIGTRON delivers enterprise-grade AI compute, bare metal NVIDIA Blackwell clusters, and instant serverless GPU sandboxes scaled for everyone from solo researchers to global enterprises.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                SOC 2 Type II Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-mono">
                99.98% SLA
              </span>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-slate-900 tracking-wider uppercase">Products</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><button onClick={() => { setActiveTab('products'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">AI Playgrounds</button></li>
              <li><button onClick={() => { setActiveTab('products'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">Cloud Compute VMs</button></li>
              <li><button onClick={() => { setActiveTab('products'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">Bare Metal Blackwell</button></li>
              <li><button onClick={() => { setActiveTab('products'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">InfiniBand Clusters</button></li>
              <li><button onClick={() => { setActiveTab('pricing'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">Serverless Inference</button></li>
            </ul>
          </div>

          {/* Solutions & Pricing */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-slate-900 tracking-wider uppercase">Solutions</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><button onClick={() => { setActiveTab('support'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">Enterprise AI</button></li>
              <li><button onClick={() => { setActiveTab('support'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">Research & HPC</button></li>
              <li><button onClick={() => { setActiveTab('support'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">Startups Program</button></li>
              <li><button onClick={() => { setActiveTab('pricing'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">Reserved Instances</button></li>
              <li><button onClick={() => { setActiveTab('pricing'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">Billing Calculator</button></li>
            </ul>
          </div>

          {/* Docs & Support */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-slate-900 tracking-wider uppercase">Ecosystem</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><button onClick={() => { setActiveTab('docs'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">API Reference</button></li>
              <li><button onClick={() => { setActiveTab('docs'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">CLI & SDKs</button></li>
              <li><button onClick={() => { setActiveTab('support'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">Support Portal</button></li>
              <li><button onClick={() => { setActiveTab('support'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">System Status</button></li>
              <li><button onClick={() => { setActiveTab('support'); window.scrollTo(0,0); }} className="hover:text-cyan-600 transition-colors">Community Discord</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SIGTRON Cloud Inc. All rights reserved. Powered by NVIDIA H100 & Blackwell.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => setActiveTab('support')} className="hover:text-slate-800 transition-colors">Privacy Policy</button>
            <button onClick={() => setActiveTab('support')} className="hover:text-slate-800 transition-colors">Terms of Service</button>
            <button onClick={() => setActiveTab('support')} className="hover:text-slate-800 transition-colors">Security & Compliance</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
