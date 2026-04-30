import dcLogo from "../assets/img/dc-logo.png"
import header_menu from "../data/heder_menu"
export default function AppHeader() {



    return (
        <header>

            <div className="container">
                <img src={dcLogo} alt="" />

                <ul>
                    {
                        header_menu.map(list_item =>

                            <li key={list_item.id}>
                                <a href={list_item.link} >{list_item.text}</a>
                            </li>
                        )
                    }
                </ul>

            </div>

        </header>
    )
}