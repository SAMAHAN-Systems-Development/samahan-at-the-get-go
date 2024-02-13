import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

type StudentServiceButtonProps = { title: string };

const StudentServiceButton: React.FC<StudentServiceButtonProps> = ({
  title,
}) => {
  return (
    <div className="flex justify-between items-center w-full border-card border-lightBlue rounded-card p-7 group hover:cursor-pointer">
      <p className="font-artega bold text-xs text-center lg:text-sm text-lightBlue capitalize group-hover:scale-95 transition-all ease-in-out duration-300">
        {title}
      </p>
      <MdArrowOutward className="flex justify-end" />
    </div>
  );
};

export default StudentServiceButton;
