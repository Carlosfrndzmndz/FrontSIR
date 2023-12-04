
import React from 'react';

export const DocumentAndEmailStep = ({ documentType, documentNumber, email, onTypeChange, onNumberChange, onEmailChange, onSubmit }) => (
    <div>
      <select value={documentType} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="DNI">DNI</option>
        <option value="LE">LE</option>
        <option value="LC">LC</option>
        <option value="CI">CI</option>
        <option value="Pas">Pasaporte</option>
      </select>
      <input
        type="text"
        placeholder="Número de Documento"
        value={documentNumber}
        onChange={(e) => {
          const inputValue = e.target.value;
          if (/^\d{0,8}$/.test(inputValue)) {
            onNumberChange(inputValue);
          }
        }}
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

export const VerificationCodeStep = ({ value, onChange, onSubmit, onResendToken  }) => (
    <div>
        <input
        type="text"
        placeholder="Código de Verificación"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />  
        <button onClick={onSubmit}>Verificar</button>
        <button onClick={onResendToken} style={resendButtonStyle}>Reenviar Token</button>
        
        
    </div>
    );

    const resendButtonStyle = {
      marginBottom: '10px',
      fontSize: '12px',
      padding: '5px 10px',
      
      border: '1px solid #3498db', // Borde celeste claro
      borderRadius: '5px',
      backgroundColor: '#3498db', // Fondo celeste claro
      color: 'white', // Texto en blanco
      width: '120px',
      marginLeft: '390px', // Espacio a la izquierda del botón
  };
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
