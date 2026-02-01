import React from 'react';
import { Printer } from 'lucide-react';

const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      className="no-print fixed top-6 right-6 z-50 flex items-center gap-2 px-5 py-2.5 
                 bg-[var(--salon-bg-card)] border border-[var(--salon-gold-subtle)] 
                 text-[var(--salon-gold)] hover:bg-[var(--salon-gold)] hover:text-[var(--salon-bg)]
                 transition-all duration-300 rounded-sm shadow-lg cursor-pointer
                 hover:shadow-[0_0_20px_rgba(201,162,77,0.3)]"
      style={{ fontFamily: 'var(--font-body)' }}
      onClick={handlePrint}
      type="button"
      title="Print or save as PDF"
    >
      <Printer size={18} />
      <span className="text-sm font-medium tracking-wider">Print / Save PDF</span>
    </button>
  );
};

export default PrintButton;
