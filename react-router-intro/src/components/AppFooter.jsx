import { Link } from "react-router-dom"
export default function AppFooter() {

    return (
        <>
            <footer className="bg-dark-subtle py-5 text-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <h3>Company</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <h3>Quick Links</h3>
                            <ul className="list-unstyle">
                                <li> <Link to='/'>Home</Link> </li>
                                <li> <Link to='/about'>About</Link> </li>
                                <li> <Link to='/contacts'>Contacts</Link> </li>
                                <li> <Link to='/Login'>Login</Link> </li>
                                <li> <Link to='/Register'>Register</Link> </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <h3>Legal</h3>
                            <ul className="list-unstyle">
                                <li> <Link to='/'>Privacy</Link> </li>
                                <li> <Link to='/about'>Cookies</Link> </li>
                                <li> <Link to='/contacts'>Terms and conditions</Link> </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}