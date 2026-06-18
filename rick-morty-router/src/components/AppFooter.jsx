import { Link } from "react-router-dom"
export default function AppFooter() {

    return (

        <>
            <footer className="bg-dark py-5 mt-5 text-white">
                <div className="container">
                    <div className="row-row-cols-1 row-cols-sm-2 row clos-lg-3">
                        <div className="col">
                            <h3>Rick and Morty</h3>
                            <p>This is Ryck and Morty</p>

                        </div>
                        <div className="col">
                            <h3>Menu</h3>
                            <ul className="list-unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="contacts">Contacts</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/characters">Characters</Link></li>
                            </ul>

                        </div>
                        <div className="col">
                            <h3>Legal</h3>
                            <ul className="list-unstyled">
                                <li><Link to="">Privacy</Link></li>
                                <li><Link to="">T&C</Link></li>
                                <li><Link to="">Cookies</Link></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}