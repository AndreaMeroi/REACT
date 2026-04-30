import topFootLogo from "../assets/img/dc-logo-bg.png"

import nav_links from "../data/nav_links"

import BluList from "./BluList"
import footer_menu from "../data/footer_menu-jsx"


export default function AppFooter() {
    return (
        <>
            <footer>

                <BluList />
                <div className="container">
                    <div className="topFooter">
                        <div className="topFootList">
                            {footer_menu.map(item => (
                                <ul key={item.title}>
                                    <li>
                                        <h3>{item.title}</h3>
                                    </li>
                                    {item.list.map(list_item => (
                                        <li key={list_item.id}>
                                            <a href={list_item.link}>{list_item.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>



                        {
                            /*
    
                             <div className="topFootList">
                                <ul>
                                    <li>
                                        <h3>     dc comics       </h3>
                                    </li>
                                    <li><a href="">carachters</a></li>
                                    <li><a href="">comics</a></li>
                                    <li><a href="">movies</a></li>
                                    <li><a href="">TV</a></li>
                                    <li><a href="">Games</a></li>
                                    <li><a href="">videos</a></li>
                                    <li><a href="">news</a></li>
                                    <li>
                                        <h3>     shop       </h3>
                                    </li>
                                    <li><a href="">shop DC</a></li>
                                    <li><a href="">shop DC collectibles</a></li>
                  s              </ul>
                                <ul>
                                    <li>
                                        <h3>     dc        </h3>
                                    </li>
                                    <li><a href="">terms of use</a></li>
                                    <li><a href="">pricing policy (New)</a></li>
                                    <li><a href="">ad choices</a></li>
                                    <li><a href="">advertising</a></li>
                                    <li><a href="">jobs</a></li>
                                    <li><a href="">subscriptions</a></li>
                                    <li><a href="">talent workshops</a></li>
                                    <li><a href="">CSPC certificates</a></li>
                                    <li><a href="">ratings</a></li>
                                    <li><a href="">shop help</a></li>
                                    <li><a href="">contact us</a></li>
    
                                </ul>
                                <ul>
                                    <li>
                                        <h3>     sites      </h3>
                                    </li>
                                    <li><a href="">DC</a></li>
                                    <li><a href="">MAD Magazine</a></li>
                                    <li><a href="">DC kids</a></li>
                                    <li><a href="">DC universe</a></li>
                                    <li><a href="">DC power visa</a></li>
                                </ul>
                            </div>
                            */
                        }


                        <div className="topFootLogo">
                            <img src={topFootLogo} alt="" />
                        </div>

                    </div>

                    <nav className="footNavbar">
                        <div className="container">
                            <button className="signUp" type="button">
                                <a href="">sign up now!</a>
                            </button>
                            <ul className="footList">

                                <li>
                                    <button className="followUs" type="button">
                                        <a href="">follow us</a>
                                    </button>
                                </li>
                                {
                                    nav_links.map(item =>
                                        <li key={item.id}>
                                            <a href={item.link}><img src={item.icon} alt="" /></a>
                                        </li>
                                    )
                                }


                            </ul>
                        </div>


                    </nav>

                </div>
            </footer >
        </>
    )
}