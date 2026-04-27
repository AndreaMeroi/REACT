import molisanaLogo from '../assets/img/logo.png'

export default function AppFooter() {

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={molisanaLogo} alt="" />            </div>
                    <div className="col">
                        <h3>Pastificio</h3>
                        <ul>
                            <li><a href="">IL pastificio</a></li>
                            <li><a href="">IL pastificio</a></li>
                            <li><a href="">IL pastificio</a></li>
                            <li><a href="">IL pastificio</a></li>
                            <li><a href="">IL pastificio</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Prodotti</h3>
                        <ul>
                            <li><a href="">Prodotti</a></li>
                            <li><a href="">Prodotti</a></li>
                            <li><a href="">Prodotti</a></li>
                            <li><a href="">Prodotti</a></li>
                            <li><a href="">Prodotti</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )

}