import Link from "next/link";
import React from "react"

type buttonProps = {
    text: string;
};

const button: React.FC<buttonProps> = ({
    text,
}) => {
    return (
        <div className="w-[20rem] py-[1.286rem] border border-[#263167] rounded-[0.938rem] flex justify-center items-center font-bold text-lg font-Helvetica text-[#263167]">
            <Link href={""} >
                {text}
            </Link>
        </div>
    );
};

export default button;
