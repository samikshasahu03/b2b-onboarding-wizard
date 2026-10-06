import { labelClass, inputClass } from '../constants/onboarding';

export default function StepTwo({ onNext, onBack }) {
  const handleNext = (e) => {
    const box = e.currentTarget.closest('.step-box');
    const inputs = box.querySelectorAll('input');
    let allValid = true;

    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.reportValidity();
        allValid = false;
      }
    });

    if (allValid) onNext();
  };

  return (
    <div className="step-box">
      <h1 className="text-xl font-bold text-white mt-1 mb-1">Admin Profile</h1>
      <p className="text-xs text-slate-400 mb-6">Configure account credentials.</p>

      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className={labelClass}>Full Name</label>
          <input id="fullName" type="text" name="fullName" required placeholder="John Doe" className={inputClass} />
        </div>

        <div>
          <label htmlFor="workEmail" className={labelClass}>Work Email</label>
          <input id="workEmail" type="email" name="workEmail" required placeholder="john@nexusscale.com" className={inputClass} />
        </div>

        <div>
          <label htmlFor="password" className={labelClass}>Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            required 
            // 💡 Native regex pattern handles length, numbers, capitals, and symbols:
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
            title="Password must be at least 8 characters long, contain 1 uppercase letter, 1 number, and 1 special character."
            placeholder="Min. 8 chars, 1 uppercase, 1 digit, 1 symbol" 
            className={inputClass} 
          />
        </div>
      </div>

      <div className="pt-8 flex gap-4">
        <button type="button" onClick={onBack} className="w-1/3 border border-slate-700 text-slate-300 py-2.5 rounded-lg text-sm">
          Back
        </button>
        <button type="button" onClick={handleNext} className="w-2/3 bg-purple-600 text-white py-2.5 rounded-lg text-sm">
          Continue to Step 3
        </button>
      </div>
    </div>
  );
}