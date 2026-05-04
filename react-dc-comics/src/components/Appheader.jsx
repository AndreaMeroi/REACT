import dcLogo from "../assets/img/dc-logo.png"
import AppNavHeader from "./AppNavHeader"

export default function AppHeader({ header_menu }) {



    return (
        <header>

            <div className="container">
                <img src={dcLogo} alt="" />

                <AppNavHeader header_menu={header_menu} />

            </div>

        </header>
    )
}