import AppLogo from "./AppLogo"
import AppNav from "./AppNav"

// ho centralizzato i dati del header_menu in app.jsx, perciò da qui li cancello
/*import header_menu from "../data/header_menu"*/


export default function AppHeader({ header_menu }) {



    return (
        <header>

            <AppLogo />
            <AppNav header_menu={header_menu} />

        </header >
    )

}

//const menu = {'home', 'prodotti', 'chi siamo', 'contatti']
//const menu = [<li>home</li>, <li> prodotti</li>, <li>chi siamo</li>, <li>contatti</li>]

{/*
    const menu = [

        {
            id: 1,
            text: 'home',
            link: '#',
            is_active: false
        },
        {
            id: 2,
            text: 'prodotti',
            link: '#',
            is_active: true
        },
        {
            id: 3,
            text: 'chi siamo',
            link: '#',
            is_active: false
        },
        {
            id: 4,
            text: 'contatti',
            link: '#',
            is_active: false
        }

    ]
    */}

