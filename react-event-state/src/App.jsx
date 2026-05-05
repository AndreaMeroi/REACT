import Counter from "./components/Counter"
import De_counter from "./components/de_counter"

function App() {

  /*
  function handleClick() {
      console.log('You clicked me!')
    }
  */


  /*PUO' ESSERE ANCHE SCRITTA COSI
   const handleClick = () => {
     console.log('You clicked me!')
   };
  */

  return (
    <>

      <Counter />
      <De_counter />


      {/* la funzione viene PASSATA non CHIAMATA() viene messa tra le parentesi tonde
      perchè deve essere eseguitaSOLO al verificarsi dell'evento click
      se RICHIAMATA tra le parentesi tonde verrebbe eseguita ad ogni caricamento della pagina 

<button onClick={handleClick}>
        Click me!
      </button>

      <button onClick={() => alert('Clicked the other button')}>
        Click me again!
      </button>

      <button onClick={function () {
        console.log('Clicked the function declaration')
      }}>
        Click me again two!
      </button>
*/}






    </>

  )


}

export default App
