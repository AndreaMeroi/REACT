import languages from "./languages"
import { useState } from "react"
/*
 1. Crea una lista di bottoni, uno per  linguaggio.
 2. Inserisci sotto una card che mostri il titolo e la descrizione del primo linguaggio nell’array.
 3. Fare in modo che, cliccando uno dei bottoni, la card in basso visualizzi il linguaggio corrispondente e la relativa descrizione
*/

function App() {

  const [currentTab, setCurrentTab] = useState(null)
  // usando null faccio apparire solo i bottoni, 
  // ma non il contenuto delle card al caricamento della pagina
  // (il contenuto apparirà solo dopo aver cliccato un bottone)
  console.log(languages);


  //  uso l'indice per far aprire l'elemento cliccato 
  function handleClick(index) {
    console.log('Click on element with id:', index);
    // passando alla funzione di useStae faccio modificare alla funzione il contenuto della pagina 
    // corrispondente dell'indice del bottone cliccato 
    setCurrentTab(index)
  }


  return (
    <>
      <h1>Learn web development</h1>

      <div className="tabs">

        {/*
        -per selezionare la card applico un handler direttamente sul bottone
        -map elemento, il suo indice e tutto il contenuto dell'array, perciò passo l'elemento corrente lang e il suo indice
        -posiziono l'evento onClick direttamente nell'elemento e faccio chiamare ad handleClick il suo indice*/}

        {languages.map((lang, index) =>
          <button key={lang.id} onClick={() => handleClick(index)}>{lang.title}</button>
        )}

        {/*inserisco una condizione per risolvere l'errore derivante da currentTab = null dovuto all'impostazione a riga 11 */}
        {
          currentTab === null ? <p>nessun elemento selezionato</p> :

            <div className="tab-card">
              {/* tra le quadre l'indice del bottone cliccato per selezionare il testo corrispondente(vedi nell'oggetto) */}
              <h2>{languages[currentTab].title}</h2>
              <p>{languages[currentTab].description}</p>
            </div>
        }
      </div>
    </>
  )
}

export default App
