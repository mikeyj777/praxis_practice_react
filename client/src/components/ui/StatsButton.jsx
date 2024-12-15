// src/components/ui/StatsButton.jsx
import React, { useState } from 'react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import QuestionStats from '../QuestionStats';

const StatsButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button 
        variant="primary" 
        onClick={() => setIsModalOpen(true)}
      >
        Show Statistics
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Question Statistics"
      >
        <QuestionStats />
      </Modal>
    </>
  );
};

export default StatsButton;