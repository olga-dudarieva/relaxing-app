import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'
import {LOCALS} from "./constans";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(HttpApi)
    .init({
    debug: false,
    ns: [
        'common',
        'layout'
    ],
    fallbackNS: 'common',
    fallbackLng: LOCALS.EN,
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
});
