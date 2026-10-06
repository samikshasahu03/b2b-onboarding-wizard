import { labelClass, inputClass } from '../constants/onboarding';

export default function StepTwo({ values, onChange, onNext, onBack }) {
  const handleNext = (e) => {
    const box = e.currentTarget.closest('.step-box'); // the non hidden ones 
    const inputs = box.querySelectorAll('input');
    let allValid = true;

    inputs.forEach(input => {
      if (!input.checkValidity()) { //local validation just the step which is visible
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
          <input 
            id="fullName" 
            type="text" 
            name="fullName" 
            value={values.fullName} 
            onChange={(e) => onChange('fullName', e.target.value)}
            required 
            placeholder="John Doe" 
            className={inputClass} 
          />
        </div>

        <div>
          <label htmlFor="workEmail" className={labelClass}>Work Email</label>
          <input 
            id="workEmail" 
            type="email" //local validation specific for email
            name="workEmail" 
            value={values.workEmail} 
            onChange={(e) => onChange('workEmail', e.target.value)}
            required 
            placeholder="john@nexusscale.com" 
            className={inputClass} 
          />
        </div>

        <div>
          <label htmlFor="password" className={labelClass}>Password</label>
          <input 
            id="password" 
            type="password" // protected text
            name="password" 
            value={values.password}
            onChange={(e) => onChange('password', e.target.value)}
            required 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}" //regex for password validation
            title="Password must be at least 8 characters long, contain 1 uppercase letter, 1 number, and 1 special character."
            placeholder="••••••••••••" 
            className={inputClass} 
          />
        </div>
      </div>

      <div className="pt-8 flex gap-4">
        <button 
          type="button" 
          onClick={onBack} 
          className="w-1/3 border border-slate-700 hover:bg-slate-800 text-slate-300 py-2.5 rounded-lg text-sm transition-colors"
        >
          Back
        </button>
        <button 
          type="button" 
          onClick={handleNext} 
          className="w-2/3 bg-purple-600 hover:bg-purple-500 text-white py-2.5 rounded-lg text-sm transition-colors"
        >
          Continue to Step 3
        </button>
      </div>
    </div>
  );
}
