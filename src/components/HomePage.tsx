import React, { useState } from 'react';
import { ActiveTab, HardwareSpec } from '../types';

interface HomePageProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenAuthModal: (mode: 'login' | 'signup') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onOpenAuthModal }) => {
  const [billingMode, setBillingMode] = useState<'hourly' | 'reserved'>('hourly');
  const [codeTab, setCodeTab] = useState<'python' | 'curl' | 'docker'>('python');

  const hardwareSpecs: HardwareSpec[] = [
    {
      id: 'b300',
      name: 'NVIDIA Blackwell B300',
      badge: 'NEW FLAGSHIP',
      vram: '288GB HBM3e',
      interconnect: '1.8TB/s NVLink',
      fp16Tflops: '4,500 TFLOPS',
      priceHourly: 3.49,
      priceReserved: 2.79,
      availability: 'Instant',
      idealFor: 'Massive LLM Training & Real-time MoE Inference'
    },
    {
      id: 'h100',
      name: 'NVIDIA H100 SXM5',
      badge: 'WORKHORSE',
      vram: '80GB HBM3',
      interconnect: '900GB/s NVLink',
      fp16Tflops: '1,979 TFLOPS',
      priceHourly: 2.19,
      priceReserved: 1.75,
      availability: 'Instant',
      idealFor: 'Fine-tuning Llama 3, Computer Vision & Distributed HPC'
    },
    {
      id: 'rtx6000',
      name: 'NVIDIA RTX PRO 6000 Ada',
      vram: '48GB GDDR6',
      interconnect: 'PCIe Gen4 x16',
      fp16Tflops: '91.1 TFLOPS',
      priceHourly: 0.89,
      priceReserved: 0.69,
      availability: 'Instant',
      idealFor: 'Stable Diffusion, Video Gen & Medium LLM Sandbox'
    }
  ];

  const codeExamples = {
    python: `from sigtron import ComputeCluster, GPU

# Initialize instant serverless cluster
cluster = ComputeCluster.create(
    name="llama3-training-node",
    gpu=GPU.BLACKWELL_B300,
    count=8,
    interconnect="infiniband_ndr"
)

# Run distributed workload with zero setup
job = cluster.submit_job(
    image="pytorch/pytorch:2.3.0-cuda12.1",
    command="torchrun --nproc_per_node=8 train.py"
)
print(f"Job started: {job.dashboard_url}")`,
    curl: `curl -X POST https://api.sigtron.cloud/v1/clusters \\
  -H "Authorization: Bearer sk_live_5891a82bc..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "instance_type": "bm-blackwell-b300.8xlarge",
    "region": "ap-northeast-1",
    "storage_gb": 2000,
    "spot_auto_recovery": true
  }'`,
    docker: `# Launch instant remote GPU shell via Sigtron CLI
sigtron compute ssh \\
  --gpu h100 \\
  --vram 80g \\
  --port-forward 8080:8080 \\
  --mount ./local_weights:/workspace/weights`
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-indigo-600/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <span className="material-symbols-outlined text-sm text-cyan-600 animate-spin" style={{ animationDuration: '6s' }}>blur_on</span>
          <span>INTRODUCING NVIDIA BLACKWELL B300 CLUSTERS</span>
          <span className="material-symbols-outlined text-xs">arrow_forward</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-[1.1] mb-6">
          <span className="inline-block mr-2 text-cyan-600">⚡</span>
          AI Compute & Infrastructure
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 mt-2">
            Scaled For Everyone
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          Deploy dedicated NVIDIA Blackwell & H100 bare metal clusters in seconds. Experience zero-config Jupyter notebooks, high-speed InfiniBand networking, and transparent per-second billing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={() => onOpenAuthModal('signup')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-xl shadow-cyan-600/20 hover:shadow-cyan-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          >
            <span>Create Free Account</span>
            <span className="material-symbols-outlined text-sm bg-white text-cyan-600 rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
          <button
            onClick={() => { setActiveTab('support'); window.scrollTo(0,0); }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-base border border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <span className="material-symbols-outlined text-cyan-600">headset_mic</span>
            <span>Talk to Expert</span>
          </button>
        </div>

        <div className="mt-6 text-xs text-slate-500 font-mono flex items-center justify-center gap-4">
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> $100 Free Credits Included</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="hidden sm:flex items-center gap-1"><span className="material-symbols-outlined text-cyan-600 text-sm">credit_card_off</span> No Credit Card Required</span>
        </div>
      </section>

      {/* Trust & Status Bar */}
      <section className="border-y border-slate-200 bg-white/60 py-4 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-900 font-semibold">LIVE SYSTEM STATUS:</span>
            <span className="text-emerald-600 font-semibold">99.98% Operational</span>
          </div>

          <div className="flex items-center gap-6">
            <div><span className="text-slate-400">AVG LATENCY:</span> <span className="text-cyan-700 font-semibold">12ms Global</span></div>
            <div className="hidden md:block"><span className="text-slate-400">ACTIVE NODES:</span> <span className="text-slate-800 font-semibold">14,280+ GPUs</span></div>
            <div className="hidden lg:block"><span className="text-slate-400">INTERCONNECT:</span> <span className="text-indigo-600 font-semibold">3.2 Tbps InfiniBand</span></div>
          </div>
        </div>
      </section>

      {/* Choose Your Pathway */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-cyan-600 uppercase mb-3 font-semibold">Tailored Infrastructure</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">Choose Your Pathway</h3>
          <p className="text-slate-600 mt-3">From instant 1-click LLM playgrounds to massive multi-node supercomputing clusters.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Beginners & Creators */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-lg p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">terminal</span>
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">Beginners & Creators</h4>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Start experimenting immediately with zero setup required. Pre-configured Jupyter environments and serverless LLM endpoints.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> 1-Click Jupyter & VS Code</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> Pre-loaded Llama 3 & DeepSeek</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> Pay per minute, auto-sleep</li>
              </ul>
            </div>
            <button
              onClick={() => { setActiveTab('products'); window.scrollTo(0,0); }}
              className="mt-8 w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-cyan-600 hover:text-white text-cyan-700 font-semibold text-sm transition-all flex items-center justify-center gap-2 border border-slate-200 hover:border-transparent"
            >
              <span>Explore Playgrounds</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>

          {/* Card 2: Advanced Developers */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-lg p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all group relative overflow-hidden">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">code_blocks</span>
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Advanced Developers</h4>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Full root access bare metal VMs. Custom Docker images, direct SSH tunnels, high-speed NVMe storage, and REST API automation.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-blue-600 text-lg">check</span> Root SSH & Full Docker root</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-blue-600 text-lg">check</span> Unthrottled NVLink 900GB/s</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-blue-600 text-lg">check</span> Python SDK & Terraform provider</li>
              </ul>
            </div>
            <button
              onClick={() => { setActiveTab('products'); window.scrollTo(0,0); }}
              className="mt-8 w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 hover:text-white text-blue-700 font-semibold text-sm transition-all flex items-center justify-center gap-2 border border-slate-200 hover:border-transparent"
            >
              <span>Launch Dedicated VM</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>

          {/* Card 3: Enterprise Teams (Popular) */}
          <div className="rounded-2xl bg-gradient-to-b from-cyan-50/60 to-white border-2 border-cyan-600 p-8 flex flex-col justify-between shadow-xl shadow-cyan-600/5 relative group">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-600 text-white text-[10px] font-extrabold font-mono tracking-wider uppercase">
              POPULAR CHOICE
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-700 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">Enterprise & Labs</h4>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Massive InfiniBand NDR interconnected supercomputing clusters. Dedicated VPC isolation, custom 99.99% SLA, and 24/7 engineering pod.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-800 font-medium">
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> Up to 1,024 Blackwell B300 GPUs</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> Dedicated InfiniBand & VPC</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-cyan-600 text-lg">check</span> Custom HIPAA / SOC2 contracts</li>
              </ul>
            </div>
            <button
              onClick={() => { setActiveTab('support'); window.scrollTo(0,0); }}
              className="mt-8 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-600/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <span>Contact Sales Pod</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Live Pricing & Hardware Specs */}
      <section className="py-20 bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-xs font-mono tracking-widest text-cyan-600 uppercase mb-2 font-semibold">Transparent Billing</h2>
              <h3 className="text-3xl font-display font-extrabold text-slate-900">Live Hardware & Pricing</h3>
            </div>

            {/* Toggle */}
            <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              <button
                onClick={() => setBillingMode('hourly')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  billingMode === 'hourly' ? 'bg-white text-cyan-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ON-DEMAND (HOURLY)
              </button>
              <button
                onClick={() => setBillingMode('reserved')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
                  billingMode === 'reserved' ? 'bg-white text-cyan-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>RESERVED (MONTHLY)</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] ${billingMode === 'reserved' ? 'bg-cyan-600 text-white' : 'bg-emerald-100 text-emerald-700 font-bold'}`}>
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-mono text-slate-500 bg-slate-50">
                  <th className="py-4 px-6">GPU ACCELERATOR</th>
                  <th className="py-4 px-6">VRAM & BANDWIDTH</th>
                  <th className="py-4 px-6">INTERCONNECT</th>
                  <th className="py-4 px-6">COMPUTE PERFORMANCE</th>
                  <th className="py-4 px-6">AVAILABILITY</th>
                  <th className="py-4 px-6 text-right">PRICE ({billingMode === 'hourly' ? '/ HR' : '/ HR EFF.'})</th>
                  <th className="py-4 px-6 text-center">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm font-medium">
                {hardwareSpecs.map((spec) => (
                  <tr key={spec.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                          <span className="material-symbols-outlined">memory</span>
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 flex items-center gap-2">
                            {spec.name}
                            {spec.badge && (
                              <span className="px-2 py-0.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-700 text-[10px] font-mono font-bold">
                                {spec.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">{spec.idealFor}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-6 font-mono text-slate-700">{spec.vram}</td>
                    <td className="py-5 px-6 font-mono text-slate-700">{spec.interconnect}</td>
                    <td className="py-5 px-6 font-mono text-cyan-700 font-semibold">{spec.fp16Tflops}</td>
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {spec.availability}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-right font-mono font-bold text-lg text-slate-900">
                      ${billingMode === 'hourly' ? spec.priceHourly.toFixed(2) : spec.priceReserved.toFixed(2)}
                    </td>
                    <td className="py-5 px-6 text-center">
                      <button
                        onClick={() => onOpenAuthModal('signup')}
                        className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-cyan-600 hover:text-white text-cyan-700 text-xs font-bold transition-all border border-slate-200 hover:border-transparent"
                      >
                        Deploy Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-between items-center text-xs text-slate-500">
            <span>* Custom InfiniBand topologies available for orders above 32x Blackwell nodes.</span>
            <button onClick={() => { setActiveTab('pricing'); window.scrollTo(0,0); }} className="text-cyan-600 hover:underline flex items-center gap-1 font-semibold">
              View Full Billing Matrix & Custom Quotes <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Built for Developers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs font-mono tracking-widest text-cyan-600 uppercase font-semibold">Developer Experience</h2>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 leading-tight">
              Built for Developers. <br/>Automated by APIs.
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Whether you prefer managing infrastructure through pure Python SDKs, Terraform scripts, or command-line tools, SIGTRON integrates natively into your MLOps CI/CD pipelines.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-600 mt-1">
                  <span className="material-symbols-outlined text-lg">bolt</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Instant Cold Start (&lt; 2s)</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Bare metal container virtualization boots Llama weights instantly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 mt-1">
                  <span className="material-symbols-outlined text-lg">terminal</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Full Root & SSH Tunneling</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Attach VS Code remote SSH or Jupyter Lab securely from your local terminal.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => { setActiveTab('docs'); window.scrollTo(0,0); }}
                className="inline-flex items-center gap-2 font-semibold text-cyan-600 hover:text-cyan-700 transition-colors text-sm"
              >
                <span>Read Official Documentation & SDK Guides</span>
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </button>
            </div>
          </div>

          {/* Interactive Code Window */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
              {/* Window Bar */}
              <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-3 font-mono text-xs text-slate-300">quickstart_cluster.py</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-700">
                  <button
                    onClick={() => setCodeTab('python')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-all ${codeTab === 'python' ? 'bg-cyan-500/30 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Python
                  </button>
                  <button
                    onClick={() => setCodeTab('curl')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-all ${codeTab === 'curl' ? 'bg-cyan-500/30 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    cURL API
                  </button>
                  <button
                    onClick={() => setCodeTab('docker')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-all ${codeTab === 'docker' ? 'bg-cyan-500/30 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    CLI
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-cyan-300 bg-slate-950">
                <pre><code>{codeExamples[codeTab]}</code></pre>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Hardened Security & Compliance */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs font-mono tracking-widest text-cyan-600 uppercase font-semibold">Enterprise Trust</h2>
          <h3 className="text-3xl font-display font-extrabold text-slate-900">Hardened Security & Compliance</h3>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            SIGTRON compute nodes operate inside Tier IV data centers equipped with military-grade physical security, dedicated hardware encryption keys, and air-gapped tenant isolation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-emerald-600">shield_lock</span>
            <span className="font-bold text-slate-900 text-sm">SOC 2 Type II</span>
            <span className="text-[11px] text-slate-500">Independently audited annual compliance</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-cyan-600">health_and_safety</span>
            <span className="font-bold text-slate-900 text-sm">HIPAA Compliant</span>
            <span className="text-[11px] text-slate-500">BAA agreements for clinical AI workloads</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-blue-600">verified</span>
            <span className="font-bold text-slate-900 text-sm">ISO 27001</span>
            <span className="text-[11px] text-slate-500">Global information security management</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-indigo-600">bolt</span>
            <span className="font-bold text-slate-900 text-sm">99.98% SLA</span>
            <span className="text-[11px] text-slate-500">Financially backed uptime guarantee</span>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl shadow-cyan-600/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent)] pointer-events-none"></div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white mb-6 relative z-10">
            Ready To Accelerate Your AI Workflow?
          </h2>
          <p className="text-cyan-100 text-lg sm:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Get $100 free instant GPU compute credits upon registration. Experience the sheer velocity of NVIDIA Blackwell B300 today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onOpenAuthModal('signup')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-base shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Claim $100 Free Credits</span>
              <span className="material-symbols-outlined text-sm text-cyan-600">arrow_forward</span>
            </button>
            <button
              onClick={() => { setActiveTab('pricing'); window.scrollTo(0,0); }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/30 hover:bg-slate-900/50 text-white font-bold text-base backdrop-blur-sm border border-white/20 transition-all"
            >
              View Pricing Calculator
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
