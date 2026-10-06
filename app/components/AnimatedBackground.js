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

export default function AnimatedBackground() {
  return (
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
  );
}