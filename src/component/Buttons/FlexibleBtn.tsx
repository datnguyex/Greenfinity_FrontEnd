import React from 'react';

interface FlexibleBtnProps {
    width?: string;
    height?: string;
    color?: string;
    bg?: string;
    title?: string;
    icon?: React.ReactNode;
}

const FlexibleBtn: React.FC<FlexibleBtnProps> = ({
    width = 'full',
    height = 'full',
    color = 'text-white',
    bg = 'bg-[#009383]',
    title,
    icon: Icon,
}) => {
    return (
        <button
            className={`flex justify-center rounded-lg px-[12px] py-[12px] text-[20px] font-semibold gap-2 ${bg} ${color}`}
            style={{ width, height }}
        >
            {Icon && <span className="mr-2">{Icon}</span>}
            <span> {title}</span>
        </button>
    );
};

export default FlexibleBtn;
