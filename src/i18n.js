import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./assets/locales/uz/translation.json";
import ru from "./assets/locales/ru/translation.json";
const resources = {
  uz: {
    translation: uz,
  },
  ru: {
    translation: ru,
  },
};
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "ru",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
