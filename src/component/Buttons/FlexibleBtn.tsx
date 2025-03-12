import React from 'react';
import { FlexibleBtnProps } from '~/Types/btnType';

const FlexibleBtn: React.FC<FlexibleBtnProps> = ({
    width = 'full',
    height = 'full',
    color = 'text-white',
    bg = 'bg-[#009383]',
    title,
    icon: Icon,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`flex justify-center rounded-lg px-[12px] py-[12px] text-[20px] font-semibold gap-2 ${bg} ${color}`}
            style={{ width, height }}
        >
            {Icon && <span className="mr-2">{Icon}</span>}
            <span className="font-roboto-condensed"> {title}</span>
        </button>
    );
};

export default FlexibleBtn;
