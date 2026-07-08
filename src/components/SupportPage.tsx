import React, { useState } from 'react';
import { FaqItem } from '../types';

export const SupportPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "How does SIGTRON's per-second billing work?",
      answer: "Unlike traditional cloud hyperscalers that charge in 1-hour increments even if you train for 10 minutes, SIGTRON tracks container active compute cycles down to the exact second. When your Jupyter playground or VM enters idle state, VRAM is checkpointed to NVMe and billing automatically pauses.",
      category: "Billing"
    },
    {
      question: "How fast is bare metal VM provisioning cold start?",
      answer: "Our proprietary container passthrough hypervisor boots dedicated NVIDIA Blackwell B300 and H100 bare metal instances in under 2 seconds. Pre-cached HuggingFace model weights (Llama 3 70B, DeepSeek R1) attach via local Gen5 NVMe arrays almost instantaneously.",
      category: "Compute"
    },
    {
      question: "Can I bring custom Docker images and SSH keys?",
      answer: "Yes. All Advanced Developer and Enterprise Tier VMs grant full root sudo access. You can push custom Docker containers directly from DockerHub or ECR, attach local SSH public keys, and mount persistent NFS/Lustre storage volumes.",
      category: "DevOps"
    },
    {
      question: "What compliance certifications do you support?",
      answer: "SIGTRON operates exclusively inside Tier IV data centers certified for SOC 2 Type II, ISO 27001, and HIPAA compliance. We sign Business Associate Agreements (BAAs) for healthcare workloads and provide dedicated air-gapped VPCs.",
      category: "Security"
    },
    {
      question: "What interconnect speed is available for multi-node training?",
      answer: "For clusters of 8 GPUs or more, we provide full non-blocking NVIDIA NVLink (900GB/s to 1.8TB/s bi-directional switch) inside the chassis, and 400 Gbps InfiniBand NDR rail-optimized optical fabrics across racks.",
      category: "Networking"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono">
            <span className="material-symbols-outlined text-sm">support_agent</span>
            ENGINEERING SUPPORT PODS
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900">
            Support & Ecosystem
          </h1>
          <p className="text-lg text-slate-600 font-light">Get assistance from dedicated MLOps architects or connect with our global researcher network.</p>
        </div>

        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">headset_mic</span>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900">24/7 Expert Helpdesk</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Direct ticketing support staffed strictly by real infrastructure and CUDA engineers, never Level-1 bots.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-mono text-emerald-700 font-semibold">
              ⚡ Guaranteed &lt; 15 min response time
            </div>
          </div>

          <div className="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">chat</span>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900">Dedicated Slack Pod</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Shared Slack connect channel directly with our core infrastructure team for Scale & Enterprise tiers.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-mono text-cyan-700 font-semibold">
              ⚡ Real-time cluster debugging
            </div>
          </div>

          <div className="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900">Custom Solutions Pod</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tailored multi-node InfiniBand topology design, BAA HIPAA contracts, and dedicated air-gapped VPCs.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-mono text-indigo-700 font-semibold">
              ⚡ Bespoke enterprise SLAs
            </div>
          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto pt-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-slate-900 hover:text-cyan-600 transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className={`material-symbols-outlined text-cyan-600 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-4 inline-block px-2.5 py-1 rounded bg-slate-100 text-[10px] font-mono text-slate-600 font-medium">
                      CATEGORY: {faq.category.toUpperCase()}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
