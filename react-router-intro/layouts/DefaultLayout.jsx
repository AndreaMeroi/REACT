import { Outlet } from "react-router-dom";
import AppHeader from "../src/components/AppHeader";
import AppFooter from "../src/components/Appfooter";

export default function DefaultLayout() {

    return (

        <>
            <AppHeader />
            <Outlet />
            <AppFooter />

        </>
    )
}