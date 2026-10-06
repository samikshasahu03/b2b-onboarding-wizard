'use client';

const streaks = [
  { top: '12%', delay: '0s', duration: '9s', width: '45%' },
  { top: '28%', delay: '3s', duration: '12s', width: '60%' },
  { top: '46%', delay: '6s', duration: '10s', width: '40%' },
  { top: '63%', delay: '1.5s', duration: '14s', width: '55%' },
  { top: '80%', delay: '4.5s', duration: '11s', width: '50%' },
];

const particles = [
  { left: '8%', size: 4, delay: '0s', duration: '14s' },
  { left: '18%', size: 3, delay: '4s', duration: '18s' },
  { left: '30%', size: 5, delay: '8s', duration: '16s' },
  { left: '42%', size: 3, delay: '2s', duration: '20s' },
  { left: '55%', size: 4, delay: '6s', duration: '15s' },
  { left: '66%', size: 3, delay: '10s', duration: '19s' },
  { left: '77%', size: 5, delay: '1s', duration: '17s' },
  { left: '88%', size: 4, delay: '5s', duration: '21s' },
  { left: '95%', size: 3, delay: '9s', duration: '13s' },
];

export default function OnboardingWizard() {
  return (
    <main className="min-h-screen bg-black text-slate-100 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      <style>{`
        @keyframes drift-a {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(120px, -80px) scale(1.25); }
          66%  { transform: translate(-60px, 70px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift-b {
          0%   { transform: translate(0, 0) scale(1.1); }
          40%  { transform: translate(-140px, 60px) scale(0.85); }
          75%  { transform: translate(50px, -90px) scale(1.3); }
          100% { transform: translate(0, 0) scale(1.1); }
        }
        @keyframes drift-c {
          0%   { transform: translate(-50%, -50%) scale(1); }
          50%  { transform: translate(calc(-50% + 100px), calc(-50% + 60px)) scale(1.35); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes ring-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes streak {
          0%   { transform: translateX(-120%) rotate(-25deg); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(260%) rotate(-25deg); opacity: 0; }
        }
        @keyframes rise {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          10%  { opacity: 0.9; }
          50%  { transform: translateY(-55vh) translateX(25px); }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-110vh) translateX(-20px); opacity: 0; }
        }
        @keyframes grid-move {
          from { background-position: 0 0; }
          to   { background-position: 60px 60px; }
        }
        .animate-drift-a { animation: drift-a 18s ease-in-out infinite; }
        .animate-drift-b { animation: drift-b 22s ease-in-out infinite; }
        .animate-drift-c { animation: drift-c 26s ease-in-out infinite; }
        .animate-ring     { animation: ring-spin 40s linear infinite; }
        .animate-ring-rev { animation: ring-spin 60s linear infinite reverse; }
        .animate-grid     { animation: grid-move 8s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-drift-a, .animate-drift-b, .animate-drift-c,
          .animate-ring, .animate-ring-rev, .animate-grid { animation: none; }
        }
      `}</style>

      {/* ==========================================
          ANIMATED BACKGROUND
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft purple vignette on pure black */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(76,29,149,0.18),transparent_70%)]" />

        {/* Slowly moving grid */}
        <div
          className="absolute inset-0 animate-grid opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(168,85,247,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />

        {/* Drifting glowing orbs */}
        <div className="absolute top-[5%] left-[8%] w-72 h-72 rounded-full bg-purple-600/30 blur-3xl animate-drift-a" />
        <div className="absolute bottom-[8%] right-[8%] w-80 h-80 rounded-full bg-violet-700/30 blur-3xl animate-drift-b" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-fuchsia-900/20 blur-3xl animate-drift-c" />
        <div className="absolute top-[60%] left-[15%] w-40 h-40 rounded-full bg-purple-500/20 blur-2xl animate-drift-b" />
        <div className="absolute top-[15%] right-[20%] w-44 h-44 rounded-full bg-indigo-600/20 blur-2xl animate-drift-a" />

        {/* Rotating outlined rings */}
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full border border-purple-500/20 animate-ring">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_20px_6px_rgba(168,85,247,0.7)]" />
        </div>
        <div className="absolute -bottom-52 -left-52 w-[640px] h-[640px] rounded-full border border-violet-500/15 animate-ring-rev">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_20px_6px_rgba(139,92,246,0.7)]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-dashed border-purple-800/20 animate-ring-rev" />

        {/* Light streaks sweeping across */}
        {streaks.map((s, i) => (
          <div
            key={i}
            className="absolute left-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent"
            style={{
              top: s.top,
              width: s.width,
              animation: `streak ${s.duration} ease-in-out ${s.delay} infinite`,
            }}
          />
        ))}

        {/* Floating particles */}
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-purple-300/80 shadow-[0_0_12px_3px_rgba(168,85,247,0.6)]"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animation: `rise ${p.duration} linear ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* ==========================================
          MAIN CARD CONTAINER
          ========================================== */}
      <div className="w-full max-w-5xl bg-slate-950/70 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-purple-950/40 border border-purple-500/10 overflow-hidden grid grid-cols-1 md:grid-cols-12 relative z-10">
        {/* LEFT COLUMN: Sidebar */}
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

        {/* RIGHT COLUMN: Form Container Placeholder */}
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