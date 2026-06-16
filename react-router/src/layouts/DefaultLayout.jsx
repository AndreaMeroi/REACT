import { Outlet } from "react-router-dom"
import AppHeader from "../assets/components/AppHeader"

export default function DefaultLayout() {

    return (
        <>
            <AppHeader />
            <Outlet />
        </>



    )

}