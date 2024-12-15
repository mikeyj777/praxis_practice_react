// src/components/ui/Dialog.jsx
import React, { useEffect } from 'react';

const Dialog = ({ children, open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div className="dialog-overlay" onClick={onClose} />
      <div className="dialog-content">
        {children}
      </div>
    </>
  );
};

export default Dialog;