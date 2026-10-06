'use client';

import { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';

const INDUSTRIES = [
  { value: 'SaaS', label: 'SaaS & Technology' },
  { value: 'Fintech', label: 'Fintech' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'E-commerce', label: 'E-commerce' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Education', label: 'Education' },
];

const COMPANY_SIZES = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '200+', label: '200+ employees' },
];

const labelClass = 'block text-xs font-medium text-slate-300 uppercase mb-1.5 tracking-wider';
const inputClass =
  'w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all';

export default function OnboardingWizard() {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    companySize: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-black text-slate-100 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      <AnimatedBackground />

      {/* Main content container */}
      <div className="w-full max-w-5xl bg-slate-950/70 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-purple-950/40 border border-purple-500/10 overflow-hidden grid grid-cols-1 md:grid-cols-12 relative z-10">
        {/* Left column: info sidebar */}
        <div className="md:col-span-5 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-950 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <span className="text-xs font-bold tracking-widest text-purple-300 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
              B2B Onboarding Wizard
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-6 tracking-tight">
              NexusScale
            </h2>
          </div>

          <div className="my-auto py-10 relative z-10">
            <h3 className="text-2xl font-semibold text-white leading-snug mb-3">
              Tell us about your organization
            </h3>
            <p className="text-sm text-purple-200/80 leading-relaxed">
              Help us personalize your environment. Knowing your industry and team size helps us optimize your workflow recommendations and resource limits right out of the box—it only takes a few seconds.
            </p>
          </div>

          <div className="relative z-10 text-xs text-purple-300/60 font-medium">
            Secure B2B Portal &bull; Enterprise Grade
          </div>
        </div>

        {/* Right column: Step 1 form */}
        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between bg-slate-900/50">
          <div>
            <p className="text-xs text-purple-400 uppercase tracking-wider font-semibold">
              Step 1 of 3
            </p>
            <h1 className="text-xl font-bold text-white mt-1 mb-1">Company Profile</h1>
            <p className="text-xs text-slate-400 mb-6">Enter your business details to begin.</p>

            <div className="space-y-4">
              <div>
                <label htmlFor="companyName" className={labelClass}>Company Name</label>
                <input
                  id="companyName"
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Aspen Corporation"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="industry" className={labelClass}>Industry</label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled className="bg-slate-900 text-slate-500">
                    Select industry
                  </option>
                  {INDUSTRIES.map((item) => (
                    <option key={item.value} value={item.value} className="bg-slate-900 text-white">
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="companySize" className={labelClass}>Company Size</label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled className="bg-slate-900 text-slate-500">
                    Select company size
                  </option>
                  {COMPANY_SIZES.map((item) => (
                    <option key={item.value} value={item.value} className="bg-slate-900 text-white">
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button
              type="button"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2.5 rounded-lg text-sm transition-colors shadow-lg shadow-purple-600/30"
            >
              Continue to Step 2
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}