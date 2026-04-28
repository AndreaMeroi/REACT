
import AppLogo from './AppLogo'

export default function AppFooter() {

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <AppLogo slogan={'La pasta buona buona!'} />
                    </div>
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