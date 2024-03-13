import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {EN} from "./dictionaries/en";
import {UA} from "./dictionaries/ua";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EN
      },
      ua: {
        translation: UA
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;