import React from 'react';

export const DocumentAndEmailStep = ({ documentType, documentNumber, email, onTypeChange, onNumberChange, onEmailChange, onSubmit }) => (
    <div>
      <select value={documentType} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="DNI">DNI</option>
        <option value="Passport">Pasaporte</option>
        <option value="Other">Otro</option>
      </select>
      <input
        type="text"
        placeholder="Número de Documento"
        value={documentNumber}
        onChange={(e) => onNumberChange(e.target.value)}
        
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
      />
      <button onClick={onSubmit}>Continuar</button>
    </div>
);

// Similar para VerificationCodeStep y PasswordStep

export const VerificationCodeStep = ({ value, onChange, onSubmit }) => (
    <div>
        <input
        type="text"
        placeholder="Código de Verificación"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
        <button onClick={onSubmit}>Verificar</button>
    </div>
    );

export const PasswordStep = ({ value, onChange, onSubmit }) => (
    <div>
        <input
        type="password"
        placeholder="Contraseña"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
        <button onClick={onSubmit}>Crear Cuenta</button>
    </div>
    );