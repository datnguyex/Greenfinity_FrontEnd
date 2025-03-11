import { useSelector } from 'react-redux'; // Correct import for useSelector
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
    //get current language
    const languageState = useSelector((state: { language: { language: string } }) => state.language.language);

    const { i18n } = useTranslation();

    //set current language
    return useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState, i18n]);
};
