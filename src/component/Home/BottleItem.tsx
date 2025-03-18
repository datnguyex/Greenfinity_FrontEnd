import React from 'react';
import cx from 'classnames'; // Assuming you're using cx for classNames conditionally

interface ItemCardProps {
    imageSrc: string;
    value: number;
    label: string;
    style?: { customBefore?: string; customAfter?: string };
}

const BottleItem: React.FC<ItemCardProps> = ({ imageSrc, value, label, style }) => {
    return (
        <div className="relative w-[50%] h-[100%]">
            <div className="h-[100%] absolute rotate-[16deg] bottom-[-15px] left-[-1px] z-10">
                <img className="object-contain w-[100%] h-[100%] object-bottom" src={imageSrc} alt={label} />
            </div>

            <div
                className={cx(
                    'text-center flex justify-center items-center bg-[#04b19f] border-[5px] border-solid border-[#fff] rounded-[26px] shadown-home-bottle flex-col overflow-hidden relative min-h-[180px]',
                    style?.customBefore,
                    style?.customAfter,
                )}
            >
                <div className="min-h-[24.5rem] items-center flex justify-center flex-col">
                    <div className="text-[7rem] leading-[57.6px] text-[#fff] font-bold overflow-hidden whitespace-nowrap">
                        {value}
                    </div>
                    <div className="text-[3.5rem] leading-[57.6px] text-[#fff] font-bold overflow-hidden whitespace-nowrap">
                        {label}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottleItem;
