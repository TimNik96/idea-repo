import { useTranslation } from "react-i18next"
import CustomSelect from "components/atom/CustomSelect"

const Header = () => {
    const { t, i18n } = useTranslation()

    const languages = [
        {
            id: 0,
            value: t("English"),
            label: "en",
        },
        {
            id: 1,
            value: t("Italian"),
            label: "it",
        },
    ]

    const languageChangeHandler = (selectedLanguage: string) => {
        const language = languages.find(
            (item) => item.value === selectedLanguage,
        )?.label
        if (language) {
            i18n.changeLanguage(language)
        }
    }

    return (
        <header className="bg-plain-white relative z-1 shadow-lg h-20 px-8 ">
            <div className="container h-full mx-auto flex items-center justify-between">
                <p>
                    Logo
                </p>
                <div className="flex items-center gap-2">
                    <CustomSelect
                        name="language"
                        onChange={languageChangeHandler}
                        options={languages}
                        classNames="border-none"
                        value={languages[0]}
                    />
                    <div className="rounded-full bg-fingerprint-blue w-2.5 h-2.5 hidden sm:block"></div>
                    <p className="text-fingerprint-blue pb-0.5 hidden sm:block">
                        test@gmail.com
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header
