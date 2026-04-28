import AppLogo from "./AppLogo"

export default function AppHeader() {
    return (
        <header>

            <AppLogo />
            <nav>
                <a href="" className='active' >Home </a>
                <a href="">Prodotti </a>
                <a href="">Chi Siamo </a>
                <a href="">Contatti</a>
            </nav>

        </header>
    )

}