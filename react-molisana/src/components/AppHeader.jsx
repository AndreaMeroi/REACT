import molisanaLogo from '../assets/img/logo.png'


export default function AppHeader() {
    return (
        <header>

            <img src={molisanaLogo} alt="" />
            <nav>
                <a href="" className='active' >Home </a>
                <a href="">Prodotti </a>
                <a href="">Chi Siamo </a>
                <a href="">Contatti</a>
            </nav>

        </header>
    )

}