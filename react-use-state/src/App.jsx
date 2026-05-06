import '@fontsource/source-sans-pro';
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import { languages } from './data/languages';

function App() {


  return (
    <>

      <AppHeader languages={languages} />

      <AppMain languages={languages} />

      <footer></footer>
    </>
  )
}

export default App
