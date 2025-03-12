//for flexible button component
export interface FlexibleBtnProps {
    width?: string;
    height?: string;
    color?: string;
    bg?: string;
    title?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}
//for language button component
export interface LanguagesBtnProps {
    language: string;
    currentLanguage: { name: string; image: string };
    imageSrc: string;
    onClick: (language: string) => void;
}
