import i18n from "../config/i18n"
import {
    CONFIGURATION_ROUTE,
    CUSTOMERS_ROUTE,
    MANAGEMENT_ROUTE,
    OFFERS_ROUTE,
} from "./routes.consts"

const { t } = i18n

type NavBarRoute = {
    id: number
    name: string
}

type NavBarListRoutes = {
    [key: string]: NavBarRoute
}

const navBarRoutes: NavBarListRoutes = {
    [CONFIGURATION_ROUTE]: {
        id: 1,
        name: t("Configuration"),
    },
    [OFFERS_ROUTE]: {
        id: 2,
        name: t("Offers"),
    },
    [CUSTOMERS_ROUTE]: {
        id: 3,
        name: t("Customers"),
    },
    [MANAGEMENT_ROUTE]: {
        id: 4,
        name: t("Management"),
    },
}

export default navBarRoutes
