import { labelClass, inputClass } from '../constants/onboarding';

export default function StepThree({ onBack, isPending, onAI }) {
  return (
    <div className="step-box">
      <h1 className="text-xl font-bold text-white mt-1 mb-1">AI Setup Prompt</h1>
      {/* <p className="text-xs text-slate-400 mb-6">tell us what you want to achieve with your workspace</p> */}

      <div className="space-y-4">
        <div>
          <label htmlFor="aiPrompt" className={labelClass}>tell us what you want to achieve with your workspace</label>
          {/* 💡 "required" attribute is removed so this step can be skipped freely */}
          <textarea id="aiPrompt" name="aiPrompt" rows={5} placeholder="I run a 50-person marketing agency called Zoomers and want to streamline client reporting..." className={`${inputClass} resize-none`} />
        </div>
        <div class="flex justify-end">
            <button className="w-1/3 bg-purple-600 text-white font-medium py-2.5 rounded-lg text-sm" onClick={onAI} disabled={isPending}  >
                Autofill with AI
            </button>
        </div>
      </div>

      <div className="pt-8 flex gap-4">
        <button type="button" onClick={onBack} disabled={isPending} className="w-1/3 border border-slate-700 text-slate-300 py-2.5 rounded-lg text-sm">
          Back
        </button>
        <button type="submit" disabled={isPending} className="w-2/3 bg-purple-600 text-white font-medium py-2.5 rounded-lg text-sm">
          {isPending ? 'Processing...' : 'Finalise Workspace'}
        </button>
      </div>
    </div>
  );
}