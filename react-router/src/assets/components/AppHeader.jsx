import { NavLink } from "react-router-dom"
export default function AppHeader() {


    const NavMenu = [
        {
            id: 1,
            link: '/',
            text: 'Home'
        },
        {
            id: 2,
            link: '/chisiamo',
            text: 'Chi Siamo'
        },
        {
            id: 3,
            link: '/prodotti',
            text: 'Prodotti'
        }
    ]

    return (

        <header>

            <ul className="nav nav-tabs" id="navId" role="tablist">
                {
                    NavMenu.map(item => <li className="nav-item" key={item.id} role="presentation">
                        <NavLink to={item.link} className="nav-link" >{item.text}</NavLink>

                    </li>


                    )}

            </ul>

        </header >



    )
}