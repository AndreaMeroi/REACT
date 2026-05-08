
/*
1. Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.
- creare un array in una costante che contenga i titoli 

2. Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.
 - creare un form
 - inserire input nel form 
 - rendere il passaggio di dati tra UI e server two-way binding usando onChange per poter scrivere nel campo input
 - usare onSubmit sul tag del form collegare il valore del dato react al input del form con value 
 - utilizzare il setter setState per modificare lo stato e quindi la UI 
 - creare un clone dell'array che aggiunga il nuovo titolo initialTitles con spread(...)



BONUS

1. Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
- importare boostrap 
- importare bootstrap icons
- creare un bottone per ogni elemento 
- attivare onClick sul bottone
- creare un handler sul bottone per cancellare l'elemento 
- creare un clone dell'array senza l'indice dell'elemento cliccato usando filter 

2. Impostare il lavoro su più componenti.
*/


import { useState } from 'react'
import initialTitles from './data/initialTitles'
import Form from './components/form'



function App() {

  const [newTitle, setNewTitle] = useState('')  //riporta vuoto il campo input 
  const [titles, setTitles] = useState(initialTitles)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('you submitted thr new Title', newTitle);

    if (newTitle.length > 5) {

      setTitles([newTitle, ...titles])
      setNewTitle('') //riporta vuoto il campo input 

      console.log(titles);
    } else {

      alert('you must type at least 5 characters')
    }

  }

  function handleDelete(i) {
    console.log('You canceled element with id:', i);
    //in questo caso il parametro title c'è ma non è utilizzato
    const filteredTitles = titles.filter((title, index) => index != i)
    setTitles(filteredTitles)


  }

  return (
    <>

      <header>

      </header>
      <main>
        <Form titles={titles} newTitle={newTitle} setNewTitle={setNewTitle} handleSubmit={handleSubmit} handleDelete={handleDelete} />
      </main>
      <footer></footer>
      {/*
 <form onSubmit={handleSubmit}>
        <Input newTitle={newTitle} setNewTitle={setNewTitle} />

        <UlTitles titles={titles} handleDelete={handleDelete} />
      </form>
*/}



    </>
  )
}

export default App
