import languages from "./languages"
import TabCard from "./components/TabCard";
import { useState } from "react"
import TabButton from "./components/TabButton";
/*
 1. Crea una lista di bottoni, uno per  linguaggio.
 2. Inserisci sotto una card che mostri il titolo e la descrizione del primo linguaggio nell’array.
 3. Fare in modo che, cliccando uno dei bottoni, la card in basso visualizzi il linguaggio corrispondente e la relativa descrizione


 **Bonus**

 4. Se nessun linguaggio è selezionato, la card del dettaglio mostra “nessun linguaggio selezionato”

 5. Dare un colore diverso al bottone per cui il linguaggio è attualmente selezionato.

 6. Scomporre la card dei dettagli in un componente a parte che mantenga le sue funzionalità

 7. Scomporre i buttons in componenti a parte che mantengono tutte le funzionaliltà
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
      <div className="container">



        <div className="tabs">

          {/*
        -per selezionare la card applico un handler direttamente sul bottone
        -map elemento, il suo indice e tutto il contenuto dell'array, perciò passo l'elemento corrente lang e il suo indice
        -posiziono l'evento onClick direttamente nell'elemento e faccio chiamare ad handleClick il suo indice*/}

          {languages.map((lang, index) =>


            <TabButton key={lang.id} title={lang.title} index={index} currentTab={currentTab} onPress={() => handleClick(index)} />


            /* com'era prima di componentizzare il bottone
            // interpolo un condizionale ternario: se l'index è uguale al quello del bottone cliccato allora primary, se no light
                      <button className={`btn btn-${index === currentTab ? 'primary' : 'light'} mx-3`} key={lang.id} onClick={() => handleClick(index)}>
                        {lang.title}
                      </button>
            */

          )}

          {/*inserisco una condizione per risolvere l'errore derivante da currentTab = null dovuto all'impostazione a riga 11 */}
          {
            currentTab === null ? <p>nessun elemento selezionato</p> :

              <TabCard title={languages[currentTab].title} description={languages[currentTab].description} />


            /* com'era prima di componentizzare la card 

            <div className="card mt-5">
                <div className="card-body">
                 // tra le quadre l'indice del bottone cliccato per selezionare il testo corrispondente(vedi nell'oggetto) 
                  <h2>{languages[currentTab].title}</h2>
                  <p>{languages[currentTab].description}</p>

                </div>

              </div>
            
            */

          }
        </div>

      </div >


    </>
  )
}

export default App
