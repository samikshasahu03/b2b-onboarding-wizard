import AnimatedBackground from './components/AnimatedBackground';

export default function OnboardingWizard() {
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

        {/* Right column: form placeholder */}
        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between bg-slate-900/50">
          <div>
            <p className="text-xs text-purple-400 uppercase tracking-wider font-semibold">
              Step 1 of 3
            </p>
            <h1 className="text-xl font-bold text-white mt-1 mb-6">Company Profile</h1>
            <p className="text-sm text-slate-400">Form layout</p>
          </div>
        </div>
      </div>
    </main>
  );
}