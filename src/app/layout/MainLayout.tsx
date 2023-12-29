import { ReactNode } from "react"

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="py-5 xl:p-16">
            <div className="container mx-auto">{children}</div>
        </div>
    )
}

export default MainLayout
