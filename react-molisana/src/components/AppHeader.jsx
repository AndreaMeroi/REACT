import AppLogo from "./AppLogo"
import header_menu from "../data/header_menu"
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

export default function AppHeader() {



    return (
        <header>
            {/*
         <ul>
                {menu.map((teacher) => (
                    <li>{teacher}</li>
                ))}
            </ul>
         */}



            <AppLogo />
            <nav>
                {
                    header_menu.map(item => <a href={item.link} key={item.id} className={item.is_active && 'active'}>{item.text} </a>)
                }
                {/*
                <a href="" className='active' >Home </a>
                <a href="">Prodotti </a>
                <a href="">Chi Siamo </a>
                <a href="">Contatti</a> 
                */

                }
            </nav>

        </header>
    )

}