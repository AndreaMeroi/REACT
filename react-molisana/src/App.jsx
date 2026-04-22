
import reactLogo from './assets/react.svg'
import molisanaLogo from './assets/img/logo.png'
import viteLogo from './assets/vite.svg'


function App() {

  return (
    <>
      <header>
        <img src={molisanaLogo} alt="" />
        <nav>
          <a href="" className='active' >Home </a>
          <a href="">Prodotti </a>
          <a href="">Chi Siamo </a>
          <a href="">Contatti</a>
        </nav>

      </header>
      <main>

      </main>
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

    </>
  )
}

export default App
