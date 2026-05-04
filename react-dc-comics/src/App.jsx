
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// Supports weights 300-800
import '@fontsource-variable/open-sans/wght.css';
import AppFooter from './components/AppFooter'
import AppMain from './components/AppMain'
import AppHeader from './components/Appheader'
//centralizzo i dati 
import header_menu from './data/heder_menu';
import comics from './data/comics'
import footer_menu from './data/footer_menu-jsx';

function App() {

  return (
    <>
      <AppHeader header_menu={header_menu} />
      <AppMain comics={comics} />
      <AppFooter footer_menu={footer_menu} />

    </>
  )
}


export default App
