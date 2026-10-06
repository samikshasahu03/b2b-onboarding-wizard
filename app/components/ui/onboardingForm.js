'use client';

import { useState } from 'react';
import StepOne from './step-one';
import StepTwo from './step-two';
import StepThree from './step-three';
import StepSuccess from './step-success';
import { processOnboardingWithAI } from '../../actions';

export default function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  //object to hold all form data across steps
  const [formMemory, setFormMemory] = useState({
    companyName: '',
    industry: '',
    companySize: '',
    fullName: '',
    workEmail: '',
    password: '',
    aiPrompt: '',
    aiSummary: '',
    aiGenerated: false 
  });

  // calls setformmemory function to update field from each steps 
  const handleInputChange = (fieldName, value) => {
    setFormMemory(prev => ({ ...prev, [fieldName]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

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
      setFormMemory(prev => ({
        ...prev,
        companyName: result.data.companyName,
        industry: result.data.industry,
        companySize: result.data.companySize,
        aiSummary: result.data.aiSummary,
        aiGenerated: true 
      }));
    } else {
      alert(`AI Extraction issue: ${result.error}`);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    //   const result = await saveFinalOnboarding(formMemory);
    //   if (result.success) {
        setStep(4); // Advance to the success card leaf screen layout frame
    //   } else {
    //     alert(result.error);
    //   }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
            onAI={handleAIConsultation} 
            isPending={loading} 
          />
        </div>
        {/* strict checking therefore 3 equal to '4' == 4 data type comparison happens as well */}
        {step === 4 && <StepSuccess data={formMemory} />} 
      </div>
    </form>
  );
}