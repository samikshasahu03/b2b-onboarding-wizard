export default function StepSuccess() {
  return (
    <div className="flex flex-col items-center text-center justify-center py-6 space-y-6 animate-in fade-in zoom-in-95 duration-500">
      
      {/* Premium Visual Success Icon Indicator */}
      <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/30 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20">
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Workspace Provisioned!</h1>
        <p className="text-sm text-slate-400 mt-2 max-w-sm mx-auto">
          NexusScale has successfully registered your organization profile and initialized your administrative cloud node parameters.
        </p>
      </div>

      <div className="w-full pt-4">
        <button
          type="button"
          onClick={() => window.location.reload()} // Resets the wizard cycle back to step 1
          className="w-full bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-indigo-600/20"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}