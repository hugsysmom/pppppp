import React, { useState } from 'react';
import { ActiveTab } from '../types';

interface ProductsPageProps {
  onOpenAuthModal: (mode: 'login' | 'signup') => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenAuthModal, setActiveTab }) => {
  const [selectedTopology, setSelectedTopology] = useState<'single' | '8x_pod' | '32x_cluster'>('8x_pod');

  const topologyInfo = {
    single: {
      title: 'Single Node Sandbox',
      gpus: '1x - 4x NVIDIA H100',
      bandwidth: 'PCIe Gen5 / NVLink',
      useCase: 'Fast prototyping, LoRA fine-tuning, and model evaluation.',
      price: 'From $0.89 / hr'
    },
    '8x_pod': {
      title: 'NVIDIA SXM Bare Metal Pod',
      gpus: '8x Blackwell B300 or H100',
      bandwidth: '1.8 TB/s All-to-All NVLink Switch',
      useCase: 'Distributed PyTorch DDP, 70B+ LLM pre-training, and MoE inference.',
      price: 'From $17.52 / hr'
    },
    '32x_cluster': {
      title: 'Supercomputing NDR Cluster',
      gpus: '32x - 1,024x Blackwell B300',
      bandwidth: '3.2 Tbps InfiniBand NDR Non-Blocking Fabric',
      useCase: 'Foundation model pre-training from scratch & frontier scientific AI.',
      price: 'Custom SLA Quote'
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono mb-4">
            <span className="material-symbols-outlined text-sm">grid_view</span>
            COMPUTE PLATFORM ARCHITECTURE
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
            One Platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Three Ways to Compute.</span>
          </h1>
          <p className="text-lg text-slate-600 mt-6 leading-relaxed font-light">
            Whether you need a quick 5-minute Jupyter session or a 512-GPU InfiniBand interconnected cluster for frontier AI research, SIGTRON provides instant elastic provisioning.
          </p>
        </div>

        {/* 3 Core Pillars Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">terminal</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900">AI Playgrounds</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Serverless Jupyter Lab sandboxes pre-configured with CUDA 12.4, PyTorch 2.3, HuggingFace Accelerate, and FlashAttention 2.
              </p>
              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs font-mono text-slate-700">
                <div className="flex justify-between"><span>BOOT TIME:</span> <span className="text-cyan-700 font-semibold">&lt; 1.5 seconds</span></div>
                <div className="flex justify-between"><span>BILLING:</span> <span>Per second (auto-sleep)</span></div>
                <div className="flex justify-between"><span>STORAGE:</span> <span>Persistent NFS workspace</span></div>
              </div>
            </div>
            <button
              onClick={() => onOpenAuthModal('signup')}
              className="mt-8 w-full py-3 rounded-xl bg-slate-100 hover:bg-cyan-600 hover:text-white text-cyan-700 font-bold text-sm transition-all border border-slate-200 hover:border-transparent"
            >
              Launch Playground
            </button>
          </div>

          <div className="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all relative overflow-hidden">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">memory</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900">Cloud Compute VMs</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dedicated bare metal NVIDIA Blackwell B300 and H100 VMs. Full root access, custom kernel parameters, and direct SSH keys.
              </p>
              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs font-mono text-slate-700">
                <div className="flex justify-between"><span>HYPERVISOR:</span> <span className="text-blue-700 font-semibold">Bare Metal Passthrough</span></div>
                <div className="flex justify-between"><span>NVME SSD:</span> <span>Up to 12.8 TB Gen5 NVMe</span></div>
                <div className="flex justify-between"><span>NETWORK:</span> <span>100 Gbps Dual Redundant</span></div>
              </div>
            </div>
            <button
              onClick={() => onOpenAuthModal('signup')}
              className="mt-8 w-full py-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-blue-700 font-bold text-sm transition-all border border-slate-200 hover:border-transparent"
            >
              Provision Bare Metal
            </button>
          </div>

          <div className="bg-gradient-to-b from-cyan-50/60 to-white border-2 border-cyan-600 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900">Scale & Clusters</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Non-blocking InfiniBand NDR (400Gbps) fabrics connecting up to 1,024 GPUs. Built specifically for multi-billion parameter LLM pre-training.
              </p>
              <div className="space-y-3 pt-4 border-t border-slate-200 text-xs font-mono text-slate-700 font-medium">
                <div className="flex justify-between"><span>INTERCONNECT:</span> <span className="text-indigo-600 font-semibold">InfiniBand NDR Rail-Optimized</span></div>
                <div className="flex justify-between"><span>TENANT ISOLATION:</span> <span>Dedicated Air-Gapped VPC</span></div>
                <div className="flex justify-between"><span>SUPPORT POD:</span> <span>Assigned MLOps Architects</span></div>
              </div>
            </div>
            <button
              onClick={() => { setActiveTab('support'); window.scrollTo(0,0); }}
              className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm shadow-md hover:brightness-110 transition-all"
            >
              Request Pod Architecture
            </button>
          </div>

        </div>

        {/* Interactive Topology Explorer */}
        <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/2 space-y-6">
              <span className="text-xs font-mono text-cyan-600 uppercase tracking-wider font-semibold">Interactive Topology Visualizer</span>
              <h2 className="text-3xl font-display font-bold text-slate-900">Interconnect Architecture</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Traditional cloud networks bottleneck distributed PyTorch training due to PCIe latency. SIGTRON implements full NVLink 4 switch topologies inside every 8-GPU SXM chassis.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => setSelectedTopology('single')}
                  className={`w-full p-4 rounded-xl border text-left flex justify-between items-center transition-all ${
                    selectedTopology === 'single' ? 'bg-cyan-50 border-cyan-500 text-slate-900 shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm">1. Single Node Prototyping</div>
                    <div className="text-xs text-slate-500 mt-0.5">Up to 4x PCIe Gen5 GPUs</div>
                  </div>
                  <span className="material-symbols-outlined text-cyan-600">arrow_forward</span>
                </button>

                <button
                  onClick={() => setSelectedTopology('8x_pod')}
                  className={`w-full p-4 rounded-xl border text-left flex justify-between items-center transition-all ${
                    selectedTopology === '8x_pod' ? 'bg-cyan-50 border-cyan-500 text-slate-900 shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm">2. 8-GPU SXM Bare Metal Pod</div>
                    <div className="text-xs text-slate-500 mt-0.5">900GB/s Bi-directional NVLink</div>
                  </div>
                  <span className="material-symbols-outlined text-cyan-600">arrow_forward</span>
                </button>

                <button
                  onClick={() => setSelectedTopology('32x_cluster')}
                  className={`w-full p-4 rounded-xl border text-left flex justify-between items-center transition-all ${
                    selectedTopology === '32x_cluster' ? 'bg-cyan-50 border-cyan-500 text-slate-900 shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm">3. InfiniBand NDR Supercomputing Pod</div>
                    <div className="text-xs text-slate-500 mt-0.5">Multi-rack 3.2 Tbps optical switches</div>
                  </div>
                  <span className="material-symbols-outlined text-cyan-600">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Visual Screen */}
            <div className="lg:w-1/2 w-full bg-slate-100 border border-slate-200 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[11px] text-slate-500">
                TOPOLOGY_ID: {selectedTopology.toUpperCase()}
              </div>

              <div className="my-8">
                <div className="inline-block p-6 rounded-3xl bg-white border border-cyan-200 shadow-xl max-w-sm w-full">
                  <div className="text-cyan-700 font-mono text-xs font-bold mb-4">{topologyInfo[selectedTopology].title}</div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="material-symbols-outlined text-cyan-600 mb-1">memory</span>
                      <div className="text-xs font-bold text-slate-900">{topologyInfo[selectedTopology].gpus}</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="material-symbols-outlined text-indigo-600 mb-1">lan</span>
                      <div className="text-[10px] font-mono text-slate-700">{topologyInfo[selectedTopology].bandwidth}</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-left bg-slate-50 p-3 rounded-lg border border-slate-200 mb-4">
                    {topologyInfo[selectedTopology].useCase}
                  </p>
                  <div className="text-sm font-mono font-bold text-emerald-700">{topologyInfo[selectedTopology].price}</div>
                </div>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                ⚡ Zero virtualization overhead • Bare metal PCIe Gen5 passthrough
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
