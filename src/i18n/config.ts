import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en/translation.json';
import ua from './ua/translation.json';
import {LOCALS} from "./constans";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    debug: true,
    fallbackLng: LOCALS.EN,
    resources: {
        [LOCALS.EN]: {
            translation : en,
        },
        [LOCALS.UA]: {
            translation: ua,
        }
    },
    // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
    // set returnNull to false (and also in the i18next.d.ts options)
    // returnNull: false,
});