import { useState } from "react";

export default function Counter() {

    // la funzione useState è un array che contiene il valore di paretnza e la funzione per renderlo reattivo 
    //perciò la destrutturo estraendo il valore e la funzione che prenderà il nome del primo valore preceduto da 'set'
    //tra le parentesi il valore di partenza da assegnare come punto di partenza del

    const [counter, setCounter] = useState(0)
    console.log(counter);

    function handleClick() {
        setCounter(counter + 1)
    }

    //una volta ricavata la funzione setCounter posso usarla nell'handler per aggiornare la UI 
    //al combiamento di count 


    return (

        <>

            {/* OPPURE COSI SNZ DICHIARARE handleClick FUORI DAL RETURN
         <h2>old_Counter Component </h2>
                <p>{counter}</p>
                <button onClick={() => { setCounter(counter + 1) }}>
                    Increment
                </button>
        */}
            <div className="counter_incremento">
                <h2>Incremento </h2>
                <p>{counter}</p>
                <button onClick={handleClick}>
                    Increment
                </button>
            </div>


        </>
    )
}