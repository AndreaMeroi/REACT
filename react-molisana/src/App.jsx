
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppAlert from './components/AppAlert'
/*voglio centralizzare l'IMPORT DEI DATI (importo nell'app principali i dati e posso 
cancellare l'import a livello del componente)*/
import header_menu from './data/header_menu'
import footer_menu from './data/footer_menu'
import products from './data/products'


function App() {

  return (
    <>

      <AppHeader header_menu={header_menu} />
      <AppMain products={products} />
      <AppFooter footer_menu={footer_menu} />





      {/* 
  <div className="container">
        <AppAlert type='danger'>
          <ul>
            <li>error 1</li>
            <li>error 2</li>
            <li>error 3 </li>
          </ul>
        </AppAlert>

        <AppAlert type='success'>
          <p>Wel done you did it!</p>
        </AppAlert>

      </div>
*/}




    </>
  )
}

export default App
