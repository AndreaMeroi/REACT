import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import CharacterCard from "../components/CharacterCard"
import { Cardio } from 'ldrs/react'




export default function CharacterPage() {

    {/*salvo in una const il dato id destrutturando con useParams */ }
    const { id } = useParams()

    {/*salvo la hook useNavigate in una costante */ }
    const navigate = useNavigate()

    {/*salvo in una variabile di stato i dati del personaggio e creo il setter per stampare in pagina*/ }
    const [character, setCharacter] = useState(null)

    {/*salvo in una const il link da cui fetchare, uso i backtick per interpolare il campo id e rendere il link dinamico */ }
    const endpoint = `https://rickandmortyapi.com/api/character/${id}`
    console.log(endpoint);

    {/*passo alla funzione la variabile che contiene il link da cui fetchare tra le () */ }
    function fetchdata(endpoint) {
        axios.get(endpoint)
            .then(res => {
                console.log(res.data);
                {/*applico il setter per stampare in pagina il dato fetchato */ }
                setCharacter(res.data)

            }).catch(err => {
                console.log(err);

                {/*attivo navigate per portare l'utente ad una specifica pagina in caso di errore, in questo caso la home*/ }
                navigate('/')
            })
    }

    useEffect(() => {

        {/*poichè il caricamento della card del personaggio è rapidissimo 
                e la condizione null sarebbe vera per un tempo brevissimo
                 non vedrei apparire loading..., quindi rallento il fetch inserendo la funzione fetchdata(endpoint) 
                 in un timeout di 2 secondi*/}
        setTimeout(() => {
            fetchdata(endpoint)
        }, 2000)
    }, [])



    return (
        <div>

            <div className="p-5 bg-light ">
                <div className="container py-5">
                    <h1 className="display-5 fw-bold">Discover the character!</h1>
                    <p className="col-md-8 fs-4">
                        here is our list of character
                    </p>

                </div>
            </div>


            {/*se character è diverso da null passa la scheda del personaggio altrimenti mostrain pagina loading */}

            {character != null ?
                (
                    /*importo il componente e passo la props character come indicato 
                    nell'export default di characterCard */

                    < CharacterCard character={character} />
                ) :
                (
                    // Default values shown

                    <div className="mt-4 vh-100 text-center">
                        <Cardio
                            size="50"
                            stroke="4"
                            speed="2"
                            color="black"
                        />
                        <div>loading...</div>
                    </div>

                )}
        </div>

    )
}