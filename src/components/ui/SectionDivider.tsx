import React from 'react';

interface SectionDividerProps {
  title: String;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ title }) => {
  return (
    <div className="my-6">
      <h2 className="text-xl mb-3 font-artega text-blue">{title}</h2>
      <hr className="border-gray-300 mb-3" />
    </div>
  );
};

export default SectionDivider;
