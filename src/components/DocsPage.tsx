import React, { useState } from 'react';
import { DocCategory } from '../types';

export const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories: DocCategory[] = [
    {
      id: 'quickstart',
      title: 'Getting Started',
      icon: 'rocket_launch',
      articleCount: 12,
      description: 'Zero to distributed PyTorch training in under 5 minutes.',
      articles: [
        { title: 'Connecting via SSH & VS Code Remote', readTime: '3 min', tag: 'ESSENTIAL' },
        { title: 'Launching Serverless Jupyter Playgrounds', readTime: '2 min', tag: 'GUIDE' },
        { title: 'Understanding Per-Second Billing & Auto-Sleep', readTime: '4 min', tag: 'BILLING' }
      ]
    },
    {
      id: 'sdk',
      title: 'Python SDK & CLI',
      icon: 'code_blocks',
      articleCount: 24,
      description: 'Programmatic automation for MLOps and CI/CD jobs.',
      articles: [
        { title: 'Installing sigtron-sdk package via pip', readTime: '2 min', tag: 'PYTHON' },
        { title: 'Submitting Async Training Jobs via CLI', readTime: '5 min', tag: 'CLI' },
        { title: 'Terraform Provider Configuration Reference', readTime: '8 min', tag: 'DEVOPS' }
      ]
    },
    {
      id: 'networking',
      title: 'InfiniBand & Storage',
      icon: 'lan',
      articleCount: 18,
      description: 'Configuring multi-node high bandwidth NVLink and NFS mounts.',
      articles: [
        { title: 'Configuring NCCL for InfiniBand NDR Switch', readTime: '6 min', tag: 'HPC' },
        { title: 'Attaching High-Performance Lustre Filesystems', readTime: '5 min', tag: 'STORAGE' },
        { title: 'Air-Gapped Dedicated VPC Tenant Setup', readTime: '7 min', tag: 'SECURITY' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Search Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono">
            <span className="material-symbols-outlined text-sm">library_books</span>
            SIGTRON KNOWLEDGE BASE
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900">
            How can we help?
          </h1>
          <p className="text-slate-600 text-base">Search guides, SDK references, architectural bluepints, and tutorials.</p>

          <div className="relative max-w-2xl mx-auto mt-8">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. 'SSH config', 'Llama fine-tuning', 'InfiniBand NCCL'..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-600 shadow-md transition-all"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 space-y-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600">
                    <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">{cat.title}</h3>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{cat.articleCount} docs</span>
              </div>

              <p className="text-xs text-slate-600">{cat.description}</p>

              <ul className="space-y-3 pt-2">
                {cat.articles.map((art, idx) => (
                  <li key={idx}>
                    <button className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between group border border-slate-100 hover:border-slate-200">
                      <div className="pr-2">
                        <div className="text-xs font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors line-clamp-1">{art.title}</div>
                        <div className="text-[10px] font-mono text-slate-500 mt-1 flex items-center gap-2">
                          <span className="text-cyan-700 font-bold">{art.tag}</span> • {art.readTime} read
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-cyan-600 text-sm transition-colors">arrow_forward</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Community Banner */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-slate-900">Need custom architectural guidance?</h3>
            <p className="text-slate-600 text-sm">Join our Discord community or schedule a 1-on-1 session with our infrastructure architects.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-sm flex items-center gap-2 transition-colors shadow-md"
            >
              <span className="material-symbols-outlined text-base">forum</span>
              <span>Discord Community</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
