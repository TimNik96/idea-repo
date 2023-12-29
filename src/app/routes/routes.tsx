import { createBrowserRouter } from "react-router-dom"
import {
    CONFIGURATION_ROUTE,
    CUSTOMERS_ROUTE,
    MANAGEMENT_ROUTE,
    OFFERS_ROUTE,
} from "app/consts/routes.consts"
import { RouteBase } from "app/types/route.type"
import Root from "pages/Root"
import ConfigurationPage from "pages/ConfigurationPage"
import OffersPage from "pages/OffersPage"
import CustomersPage from "pages/CustomersPage"
import ManagementPage from "pages/ManagementPage"

export const routeList: Array<RouteBase> = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: CONFIGURATION_ROUTE,
                element: <ConfigurationPage />,
            },
            {
                path: OFFERS_ROUTE,
                element: <OffersPage />,
            },
            {
                path: CUSTOMERS_ROUTE,
                element: <CustomersPage />,
            },
            {
                path: MANAGEMENT_ROUTE,
                element: <ManagementPage />,
            },
        ],
    },
]

const router = createBrowserRouter(routeList)

export default router
