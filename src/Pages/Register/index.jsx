// Register.js
import React from 'react';
import Layout from "../../Components/Layout";
import './Register.css';
import { DocumentAndEmailStep, VerificationCodeStep, PasswordStep  } from './Steps';
import useRegisterForm from './useRegisterForm';

const Register = () => {
  const { step, userData, setUserData, handleStepChange } = useRegisterForm();

  // Función para actualizar los datos del usuario
  const updateUserData = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  return (
    <div className='prueba'>
      <div className="register-form">
      {step === 1 && (
          <DocumentAndEmailStep
            documentType={userData.documentType}
            documentNumber={userData.documentNumber}
            email={userData.email}
            onTypeChange={(value) => updateUserData('documentType', value)}
            onNumberChange={(value) => updateUserData('documentNumber', value)}
            onEmailChange={(value) => updateUserData('email', value)}
            onSubmit={() => handleStepChange(2)}
          />
        )}
        {step === 2 && (
          <VerificationCodeStep
            value={userData.verificationCode}
            onChange={(value) => updateUserData('verificationCode', value)}
            onSubmit={() => handleStepChange(4)}
          />
        )}
        {step === 3 && (
          <PasswordStep
            value={userData.password}
            onChange={(value) => updateUserData('password', value)}
            onSubmit={() => handleStepChange(5)} // Asumiendo que hay un paso siguiente o alguna acción final
          />
        )}
      </div>
    </div>
  );
};

export default Register;
