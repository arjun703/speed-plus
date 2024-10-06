// src/components/LanguageSwitcher.jsx
import { useTranslation } from 'react-i18next';

import {Button} from '@shopify/polaris';
import {LanguageFilledIcon} from '@shopify/polaris-icons';

const LanguageSwitcher = () => {

    const { i18n } = useTranslation();

    const toggleLanguage = () => {
      const newLang = i18n.language === 'en' ? 'ar' : 'en'; // Toggle between English and Arabic
      i18n.changeLanguage(newLang); // This should trigger a re-render in components using translations
    };

  return (
    <Button icon={LanguageFilledIcon}  onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'AR' : 'EN'}
    </Button>
  );

};

export default LanguageSwitcher;
