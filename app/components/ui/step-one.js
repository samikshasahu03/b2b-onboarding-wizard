import { INDUSTRIES, COMPANY_SIZES, labelClass, inputClass } from '../constants/onboarding';

export default function StepOne({ values, onChange, onNext }) {
  const handleNext = (e) => {
    const box = e.currentTarget.closest('.step-box'); // what is step box 
    const inputs = box.querySelectorAll('input, select');
    let allValid = true;

    inputs.forEach(input => {
      if (!input.checkValidity()) { // default browser validation for required fields and email format
        input.reportValidity();
        allValid = false;
      }
    });

    if (allValid) onNext();
  };

  return (
    <div className="step-box">
      <h1 className="text-xl font-bold text-white mt-1 mb-1">Company Profile</h1>
      <p className="text-xs text-slate-400 mb-6">Enter your business details to begin.</p>

      <div className="space-y-4">
        <div>
          <label htmlFor="companyName" className={labelClass}>Company Name</label>
          <input 
            id="companyName" 
            type="text" 
            name="companyName" 
            value={values.companyName} //controlled state management
            onChange={(e) => onChange('companyName', e.target.value)}
            required 
            placeholder="e.g. Aspen Corp" 
            className={inputClass} 
          />
        </div>

        <div>
          <label htmlFor="industry" className={labelClass}>Industry</label>
          <select 
            id="industry" 
            name="industry" 
            value={values.industry} 
            onChange={(e) => onChange('industry', e.target.value)}
            required 
            className={inputClass}
          >
            <option value="" disabled className="bg-slate-900 text-slate-500">Select industry</option>
            {INDUSTRIES.map((item) => (
              <option key={item.value} value={item.value} className="bg-slate-900 text-white">{item.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="companySize" className={labelClass}>Company Size</label>
          <select 
            id="companySize" 
            name="companySize" 
            value={values.companySize} 
            onChange={(e) => onChange('companySize', e.target.value)}
            required 
            className={inputClass}
          >
            <option value="" disabled className="bg-slate-900 text-slate-500">Select company size</option>
            {COMPANY_SIZES.map((item) => (
              <option key={item.value} value={item.value} className="bg-slate-900 text-white">{item.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="pt-8">
        <button 
          type="button" 
          onClick={handleNext} 
          className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2.5 rounded-lg text-sm transition-colors shadow-lg shadow-purple-600/30"
        >
          Continue to Step 2
        </button>
      </div>
    </div>
  );
}
