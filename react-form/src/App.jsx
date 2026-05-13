
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

> <@&1337133589195657319> 
Ciao Classe,
esercizio di oggi: **React Blog Form Multifield**
repo: `react-form-multifield`

**Esercizio**
> 
> 
> Ampliare l'esercizio precedente aggiungendo, nel form, 
il campo autore, contenuto ed un campo per una categoria a 
scelta tra: *FrontEnd, BackEnd e UI/UX* (utilizzando una select)
> 
> Aggiornare la visualizzazione della lista degli articoli, mostrando le nuove informazioni inserite.
> 
> BONUS:
> 
> 1. Aggiungere un campo checkbox “Pubblicato” (che indica se l’articolo debba essere visibile o meno). 
> 
> Buon divertimento <:babyyoda:1374696912799924234> !
>
*/


import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import initialArticlesData from './data/initialArticlesData'
import initialFormData from './data/initialFormData';
import Form from './components/form'



function App() {

  const [formData, setFormData] = useState(initialFormData)
  const [articlesData, setArticlesData] = useState(initialArticlesData)



  function handleChange(e) {

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    console.log(value);


    console.log({ ...formData, [e.target.name]: value });

    setFormData({ ...formData, [e.target.name]: value });


  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('you submitted thr new Title', formData);

    const articleData = {
      id: Date.now(),
      ...formData
    }


    setArticlesData([articleData, ...articlesData])

    setFormData(initialFormData) //riporta vuoto il campo input 


    /*
    if (newTitle.length > 5) {

      setTitles([newTitle, ...titles])
      setNewTitle('') //riporta vuoto il campo input 

      console.log(titles);
    } else {

      alert('you must type at least 5 characters')
    }
    */


  }


  function handleDelete(i) {
    console.log('You canceled element with id:', i);
    //in questo caso il parametro title c'è ma non è utilizzato
    const filteredArticles = articlesData.filter((articleData, index) => index != i)
    setArticlesData(filteredArticles)


  }

  return (
    <>
      <header></header>
      <main>
        <div className="container mt-2">
          <Form handleSubmit={handleSubmit} handleDelete={handleDelete} handleChange={handleChange} formData={formData} setFormData={setFormData} articlesData={articlesData} />

        </div>

      </main>
      <footer></footer>
    </>
  )
}

export default App
