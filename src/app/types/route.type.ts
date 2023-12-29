import { ReactNode } from "react"

type MetaRoute = {
    title: string
}

export type RouteBase = {
    element: ReactNode
    path: string
    meta?: MetaRoute
    children?: Array<RouteBase>
    errorElement?: ReactNode
}
