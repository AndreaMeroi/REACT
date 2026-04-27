import dcLogo from "../assets/img/dc-logo.png"

export default function AppHeader() {
    return (
        <header>

            <div className="container">
                <img src={dcLogo} alt="" />

                <ul>
                    <li>
                        <a href="">characters</a>
                    </li>
                    <li>
                        <a href="">comics</a>
                    </li>
                    <li>
                        <a href="">movies</a>
                    </li>
                    <li>
                        <a href="">tv</a>
                    </li>
                    <li>
                        <a href="">games</a>
                    </li>
                    <li>
                        <a href="">collections</a>
                    </li>
                    <li>
                        <a href="">videos</a>
                    </li>
                    <li>
                        <a href="">fans</a>
                    </li>
                    <li>
                        <a href="">shop</a>
                    </li>

                </ul>

            </div>

        </header>
    )
}