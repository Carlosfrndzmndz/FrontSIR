import { useState } from 'react';

const useRegisterForm = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    documentId: '',
    email: '',
    verificationCode: '',
    password: ''
  });

  const handleStepChange = (nextStep) => {
    setStep(nextStep);
  };

  return { step, userData, setUserData, handleStepChange };
};

export default useRegisterForm;
