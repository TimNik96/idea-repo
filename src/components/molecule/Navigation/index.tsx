import Card from "components/atom/Card"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import navBarRoutes from "app/consts/navbar.consts"
// @ts-ignore
import ApplyIcon from "assets/img/icons/apply-in-circle-larger.svg?react"
// TODO - fix svg import!
// import { ReactComponent as ApplyIcon } from "../../../assets/img/icons/btc.svg"

import "./style.scss"
import Button from "components/atom/Button"

const Navigation = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col xl:flex-row items-center justify-center gap-2 xl:h-20 mb-2">
            <Card classNames="w-full lg:w-2/3 xl:w-1/2 h-full">
                <nav className="main-navigation flex justify-center px-2 py-5 sm:px-5 h-full">
                    <div className="flex justify-center text-xs sm:text-base items-center sm:gap-3 bg-unreachable border rounded-full">
                        {Object.keys(navBarRoutes).map((key) => {
                            return (
                                <NavLink
                                    key={navBarRoutes[key].id}
                                    to={key}
                                    className={({ isActive }) =>
                                        isActive ? "active" : undefined
                                    }
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <ApplyIcon />
                                        {navBarRoutes[key].name}
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </nav>
            </Card>
            <Card classNames="w-full lg:w-2/3 xl:w-1/2 flex gap-2 sm:gap-0 flex-wrap sm:flex-nowrap items-center justify-around h-fit py-3 sm:py-0 sm:h-20 xl:h-full">
                <Button classNames="basicButton px-5">{t("Reset")}</Button>
                <div className="flex flex-wrap sm:flex-nowrap justify-center gap-2">
                    <Button classNames="basicButton px-5">
                        {t("Save to Offers")}
                    </Button>
                    <Button classNames="basicButton px-5">{t("View")}</Button>
                    <Button classNames="blueButton px-5">{t("Start")}</Button>
                </div>
            </Card>
        </div>
    )
}

export default Navigation
