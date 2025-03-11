// InputField.tsx
import React from 'react';
import { InputAuthProps } from '~/Types/AuthType';

const InputAuth: React.FC<InputAuthProps> = ({ label, type, placeholder, value, onChange, error }) => {
    return (
        <div className="mt-6 flex flex-col items-start justify-center gap-2 w-[100%]">
            <p className="text-[16px] leading-6 font-medium text-[#494949]">{label}:</p>
            <input
                onChange={onChange}
                value={value}
                className="rounded-lg border-[1px] border-[#BBBBBB] outline-[#BBBBBB] px-[18px] w-[100%] h-[48px] placeholder:font-normal leading-6 placeholder:text-[16px] focus:outline-none"
                type={type}
                placeholder={placeholder}
            />
            {error && <p className="mb-1 text-[16px] leading-6 font-medium text-red-600">{error}</p>}
        </div>
    );
};

export default InputAuth;
