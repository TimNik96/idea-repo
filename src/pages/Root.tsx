import { Outlet } from "react-router-dom"
import Header from "components/molecule/Header"
import Navigation from "components/molecule/Navigation"
import MainLayout from "app/layout/MainLayout"

const Root = () => {
    return (
        <>
            <Header />
            <MainLayout>
                <Navigation />
                <Outlet />
            </MainLayout>
        </>
    )
}

export default Root
