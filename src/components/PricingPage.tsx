import React, { useState } from 'react';
import { ActiveTab } from '../types';

interface PricingPageProps {
  onOpenAuthModal: (mode: 'login' | 'signup') => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenAuthModal, setActiveTab }) => {
  const [gpuCount, setGpuCount] = useState<number>(8);
  const [gpuModel, setGpuModel] = useState<'h100' | 'b300' | 'rtx'>('h100');

  const hourlyRates = {
    rtx: 0.89,
    h100: 2.19,
    b300: 3.49
  };

  const estimatedMonthly = Math.round(gpuCount * hourlyRates[gpuModel] * 730 * 0.8); // 20% reserved discount applied

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
            Pricing That Scales With <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Your AI Ambition</span>
          </h1>
          <p className="text-lg text-slate-600 mt-4 font-light">
            No hidden ingress fees. No forced egress penalties. Pay strictly by the second with simple tier discounts.
          </p>
        </div>

        {/* 3 Tier Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Starter */}
          <div className="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-600 font-bold uppercase tracking-wider">PROTOTYPE & HOBBY</span>
              <h3 className="text-3xl font-display font-bold text-slate-900 mt-2">Starter Tier</h3>
              <div className="my-6">
                <span className="text-4xl font-mono font-bold text-slate-900">$500</span>
                <span className="text-slate-500 text-sm"> / min. deposit</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pb-6 border-b border-slate-100">
                Ideal for independent engineers and academic teams fine-tuning 7B to 13B LLMs.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> Access to RTX 6000 & H100</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> Standard Community Support</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> 500 GB Gen4 NVMe Storage</li>
              </ul>
            </div>
            <button
              onClick={() => onOpenAuthModal('signup')}
              className="mt-8 w-full py-3.5 rounded-xl bg-slate-100 hover:bg-cyan-600 hover:text-white text-cyan-700 font-bold text-sm transition-all border border-slate-200 hover:border-transparent"
            >
              Get Started
            </button>
          </div>

          {/* Scale (Featured) */}
          <div className="bg-gradient-to-b from-cyan-50/60 to-white border-2 border-cyan-600 rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-cyan-600/5 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-600 text-white font-mono text-xs font-black uppercase tracking-wider">
              MOST POPULAR
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-600 font-bold uppercase tracking-wider">STARTUPS & SCALEUPS</span>
              <h3 className="text-3xl font-display font-bold text-slate-900 mt-2">Scale Tier</h3>
              <div className="my-6">
                <span className="text-4xl font-mono font-bold text-slate-900">$2,500</span>
                <span className="text-slate-500 text-sm"> / min. commitment</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pb-6 border-b border-slate-200">
                Built for venture-backed AI companies running continuous pre-training and MoE inference pods.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-800 font-medium">
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> Priority Bare Metal Blackwell B300</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> Dedicated InfiniBand NDR Switch</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> Assigned Slack Support Channel</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> 5 TB Shared Lustre / NFS Storage</li>
              </ul>
            </div>
            <button
              onClick={() => onOpenAuthModal('signup')}
              className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-extrabold text-sm shadow-md hover:brightness-110 transition-all"
            >
              Deploy Scale Pod
            </button>
          </div>

          {/* Elite */}
          <div className="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider">ENTERPRISE & FRONTIER LABS</span>
              <h3 className="text-3xl font-display font-bold text-slate-900 mt-2">Elite Tier</h3>
              <div className="my-6">
                <span className="text-4xl font-mono font-bold text-slate-900">$10,000+</span>
                <span className="text-slate-500 text-sm"> / custom contract</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pb-6 border-b border-slate-100">
                For frontier research institutions training 100B+ foundation models requiring massive GPU clusters.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-indigo-600 text-lg">check</span> Up to 1,024x Blackwell B300 Pods</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-indigo-600 text-lg">check</span> Dedicated MLOps Engineering Team</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-indigo-600 text-lg">check</span> Custom HIPAA / BAA / SOC2 SLA</li>
              </ul>
            </div>
            <button
              onClick={() => { setActiveTab('support'); window.scrollTo(0,0); }}
              className="mt-8 w-full py-3.5 rounded-xl bg-slate-100 hover:bg-indigo-600 hover:text-white text-indigo-700 font-bold text-sm transition-all border border-slate-200 hover:border-transparent"
            >
              Contact Sales Team
            </button>
          </div>

        </div>

        {/* Interactive Estimator Calculator */}
        <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-8 sm:p-14 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">Interactive Billing Estimator</h2>
            <p className="text-slate-600 text-sm mt-2">Calculate your estimated monthly spend with 20% reserved instance discounts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-6">
              
              {/* GPU Select */}
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase mb-2 font-semibold">Select GPU Architecture</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setGpuModel('rtx')}
                    className={`p-3 rounded-xl border text-center transition-all ${gpuModel === 'rtx' ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                  >
                    <div className="text-xs">RTX 6000</div>
                    <div className="text-[10px] font-mono mt-1 opacity-70">$0.89/hr</div>
                  </button>
                  <button
                    onClick={() => setGpuModel('h100')}
                    className={`p-3 rounded-xl border text-center transition-all ${gpuModel === 'h100' ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                  >
                    <div className="text-xs">NVIDIA H100</div>
                    <div className="text-[10px] font-mono mt-1 opacity-70">$2.19/hr</div>
                  </button>
                  <button
                    onClick={() => setGpuModel('b300')}
                    className={`p-3 rounded-xl border text-center transition-all ${gpuModel === 'b300' ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                  >
                    <div className="text-xs">Blackwell B300</div>
                    <div className="text-[10px] font-mono mt-1 opacity-70">$3.49/hr</div>
                  </button>
                </div>
              </div>

              {/* Node Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono text-slate-500 uppercase font-semibold">GPU Accelerator Count</label>
                  <span className="font-mono font-bold text-cyan-700 text-base">{gpuCount} GPUs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="64"
                  step="1"
                  value={gpuCount}
                  onChange={(e) => setGpuCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>1 GPU</span>
                  <span>16 Pod</span>
                  <span>32 Pod</span>
                  <span>64 Pod Cluster</span>
                </div>
              </div>

            </div>

            {/* Total Display */}
            <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-4">
              <span className="text-xs font-mono text-slate-500 uppercase font-semibold">Est. Reserved Monthly</span>
              <div className="text-4xl sm:text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                ${estimatedMonthly.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Includes InfiniBand networking, NFS storage attachments, and 24/7 automated monitoring.
              </p>
              <button
                onClick={() => onOpenAuthModal('signup')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:brightness-110 text-white font-bold text-sm shadow-md transition-all"
              >
                Claim Reserved Pricing
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
