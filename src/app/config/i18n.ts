import { en, it } from "app/language"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"

const resources = {
    en,
    it,
}

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        resources,
        debug: false,
        lng: "en",
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
