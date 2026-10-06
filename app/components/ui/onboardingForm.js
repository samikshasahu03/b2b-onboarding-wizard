'use client';

import { useState } from 'react';
import StepOne from './step-one';
import StepTwo from './step-two';
import StepThree from './step-three';
import StepSuccess from './step-success';
import { processOnboardingWithAI, saveFinalOnboarding } from '../../actions';

export default function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // 💡 One central state tracker handles dynamic updates across all steps
  const [formMemory, setFormMemory] = useState({
    companyName: '',
    industry: '',
    companySize: '',
    fullName: '',
    workEmail: '',
    password: '',
    aiPrompt: '',
    aiSummary: ''
  });

  // Automatically captures layout keypress updates to keep state synchronised
  const handleInputChange = (fieldName, value) => {
    setFormMemory(prev => ({ ...prev, [fieldName]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // 🤖 Triggered on Step 3: Calls the backend AI extractor without submitting the final form
  const handleAIConsultation = async () => {
    setLoading(true);
    const result = await processOnboardingWithAI(
      { 
        companyName: formMemory.companyName, 
        industry: formMemory.industry, 
        companySize: formMemory.companySize 
      }, 
      formMemory.aiPrompt
    );

    if (result.success) {
      // Update form data state values using the AI's response data
      setFormMemory(prev => ({
        ...prev,
        companyName: result.data.companyName,
        industry: result.data.industry,
        companySize: result.data.companySize,
        aiSummary: result.data.aiSummary
      }));
      alert("AI Processing complete! Form fields updated successfully.");
    } else {
      alert(`AI Extraction issue: ${result.error}`);
    }
    setLoading(false);
  };

  // Final submit handler saves all unified data into the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await saveFinalOnboarding(formMemory);
    if (result.success) {
      setStep(4);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between space-y-8">
      <div>
        {step < 4 && (
          <p className="text-xs text-purple-400 uppercase tracking-wider font-semibold">
            Step {step} of 3
          </p>
        )}

        <div className={step !== 1 ? 'hidden' : ''}>
          <StepOne values={formMemory} onChange={handleInputChange} onNext={nextStep} />
        </div>

        <div className={step !== 2 ? 'hidden' : ''}>
          <StepTwo values={formMemory} onChange={handleInputChange} onNext={nextStep} onBack={prevStep} />
        </div>

        <div className={step !== 3 ? 'hidden' : ''}>
          <StepThree 
            values={formMemory} 
            onChange={handleInputChange} 
            onBack={prevStep} 
            onAI={handleAIConsultation} // Pass the AI handler down
            isPending={loading} 
          />
        </div>

        {step === 4 && <StepSuccess data={formMemory} />}
      </div>
    </form>
  );
}