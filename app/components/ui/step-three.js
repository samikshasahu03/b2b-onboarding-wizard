import { labelClass, inputClass } from '../constants/onboarding';

export default function StepThree({ values, onChange, onBack, onAI, isPending }) {
  return (
    <div className="step-box">
      <h1 className="text-xl font-bold text-white mt-1 mb-1">
        Customization & Goals
      </h1>
      <p className="text-xs text-slate-400 mb-6">
        {values.aiGenerated 
          ? 'Your layout values have been updated. Finalise workspace parameter builds underneath.' 
          : 'Help us tailor your experience. Tell us a bit about your company or what you are looking to accomplish.'}
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="aiPrompt" className={labelClass}>Tell us what you want to achieve with our platform</label>
          <textarea 
            id="aiPrompt" 
            name="aiPrompt" 
            rows={7} 
            value={values.aiPrompt} 
            onChange={(e) => onChange('aiPrompt', e.target.value)}
            readOnly={values.aiGenerated || isPending} // either of the is false then you can edit 
            placeholder="I run a 50-person marketing agency called Zoomers, and we are looking for a platform to streamline client outreach campaigns." 
            className={`${inputClass} resize-none ${values.aiGenerated ? 'opacity-50 cursor-not-allowed bg-slate-950/40' : ''}`} 
          />
        </div>
      </div>

      <div className="pt-8 flex flex-col gap-3">
        {/* Secondary processing toggle action button layout line */}
        <button 
          type="button" 
          onClick={onAI} 
          disabled={isPending || !values.aiPrompt.trim() || values.aiGenerated}
          className="w-full bg-slate-950 border border-purple-500/30 text-purple-400 hover:bg-slate-900 font-medium py-2 rounded-lg text-sm transition-colors disabled:opacity-40 disabled:pointer-events-none"
        >
          {isPending 
            ? 'Consulting AI LLM...' 
            : values.aiGenerated 
              ? ' AI Generation Done' 
              : 'Autofill with AI'}
        </button>

        <div className="flex gap-4 w-full">
          <button 
            type="button" 
            onClick={onBack} 
            disabled={isPending} 
            className="w-1/3 border border-slate-700 hover:bg-slate-800 text-slate-300 py-2.5 rounded-lg text-sm transition-colors disabled:opacity-40"
          >
            Back
          </button>
          <button 
            type="submit" 
            disabled={isPending} 
            className="w-2/3 bg-purple-600 hover:bg-purple-500 text-white font-medium py-2.5 rounded-lg text-sm transition-colors shadow-lg shadow-purple-600/30 disabled:opacity-50"
          >
            Finalise Workspace
          </button>
        </div>
      </div>
    </div>
  );
}