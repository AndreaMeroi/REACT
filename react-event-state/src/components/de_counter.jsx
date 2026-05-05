import { useState } from "react";

export default function De_counter() {

    const [de_counter, setDe_counter] = useState(0)
    console.log(de_counter);


    function handleClick() {
        setDe_counter(de_counter - 1)

    }

    return (
        <div className="counter_incremento">
            <h2>Decremento </h2>
            <p>{de_counter}</p>
            <button onClick={handleClick}>
                Decrement
            </button>
        </div>

    )
}