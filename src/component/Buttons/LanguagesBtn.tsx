// LanguageItem.tsx
import React from 'react';

interface LanguagesBtnProps {
    language: string;
    currentLanguage: { name: string; image: string };
    imageSrc: string;
    onClick: (language: string) => void;
}

const LanguagesBtn: React.FC<LanguagesBtnProps> = ({ language, currentLanguage, imageSrc, onClick }) => {
    return (
        <div
            className={`font-semibold px-[12px] py-[5px] min-h-[32px] text-[14px] cursor-pointer rounded-[4px] flex items-center ${
                currentLanguage.name === language ? 'bg-[#6eb7ac] text-[#fff]' : 'text-[#6eb7ac] bg-[#fff]'
            }`}
            onClick={() => onClick(language)}
        >
            <img className="w-[2rem] h-[2rem]" src={imageSrc} alt={language} />
            <span className="ml-4 font-bold font-roboto-condensed">{language}</span>
        </div>
    );
};

export default LanguagesBtn;
