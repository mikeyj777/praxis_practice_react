// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  disabled = false,
  fullWidth = false,
  onClick,
  className = '',
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${variant} ${fullWidth ? 'full-width' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;