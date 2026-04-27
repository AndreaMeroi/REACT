import digitalComicsImg from "../assets/img/buy-comics-digital-comics.png"
import merchandiseImg from "../assets/img/buy-comics-merchandise.png"
import subscriptionImg from "../assets/img/buy-comics-subscriptions.png"
import locatorImg from "../assets/img/buy-comics-shop-locator.png"
import powerVisaImg from "../assets/img/buy-dc-power-visa.svg"




export default function BluList() {

    return (
        <>
            <nav className="bluList">
                <div className="container">
                    <ul>
                        <li>
                            <button>
                                <a href="">
                                    <img src={digitalComicsImg} alt="" />
                                    <h3>digital comics</h3>
                                </a>
                            </button>
                        </li>
                        <li>
                            <button>
                                <a href="">
                                    <img src={merchandiseImg} alt="" />
                                    <h3>dc merchandise</h3>
                                </a>
                            </button>
                        </li>
                        <li>
                            <button>
                                <a href="">
                                    <img src={subscriptionImg} alt="" />
                                    <h3>subscription</h3>
                                </a>
                            </button>
                        </li>
                        <li>
                            <button>
                                <a href="">
                                    <img src={locatorImg} alt="" />
                                    <h3>comic shop locator</h3>
                                </a>
                            </button>
                        </li>
                        <li>
                            <button>
                                <a href="">
                                    <img src={powerVisaImg} alt="" />
                                    <h3>dc power visa</h3>
                                </a>
                            </button>
                        </li>
                    </ul>

                </div>


            </nav>
        </>
    )
}