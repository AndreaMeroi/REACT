import { Link } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';


export default function CharactersPage() {

    //make a state variable where store the charaters lilst
    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1)


    function fetchData(page) {
        console.log('you clicked on fetchData');
        //fetch the data with axios 
        axios
            .get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(res => {

                //log the fetched data
                console.log(res.data.results);
                // salvo il contenuto di data (info e results)  in due variabilie
                const { info, results } = res.data

                //update the state variable 
                setCharacters(results)
            })
            .catch((err) => {
                console.error(err.message);
            })
    }

    // uso useEffect per richiamare il fetch dei dati e quindi l'aggiornamento del contenuto della variabiule
    // e l'aggiornamentio della UI solo al primo caricamento 
    // se richiamassi solo fetchData() attiverei un ciclo infinito di chiamate 
    useEffect(() => {
        fetchData(currentPage)
    }, []
    )



    return (

        <>

            <main>
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container py-5">
                        <h1 className="display-5 fw-bold">Rick e Morty Characters</h1>
                        <p className="col-md-8 fs-4">
                            Here is our list of characters
                        </p>

                    </div>
                </div>

                <section id="characters">
                    <div className="container">
                        <div className="row g-4">

                            {characters.map(character =>

                                <div className="col-12 col-sm-6 col-md-4" key={character.id} >
                                    <div className="card h-100">

                                        {/*incarto l'immagine e h3 in un Link per poter portare l'utente alla scheda del singolo personaggio se clicca sull'immagine o sul testo */}

                                        <Link to={`/character/${character.id}`} >
                                            <img className='card-img-top' src={character.image} alt="" />
                                        </Link>

                                        <div className="card-body">

                                            <Link className='text-decoration-none text-dark' to={`/character/${character.id}`} >
                                                <h3>{character.name}</h3>

                                            </Link>


                                            <div className='d-flex justify-content-between alig-items-center'>

                                                <span >
                                                    Specie: <strong>{character.species}</strong>
                                                </span>

                                                <span className='badge bg-dark btn-sm position-relative'>
                                                    {character.status}
                                                    <span className='position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle'>
                                                        <span className='visually-hidden'>new alerts</span>
                                                    </span>

                                                </span>

                                            </div>



                                        </div>

                                    </div>
                                </div>

                            )}

                        </div>
                    </div>
                </section>


            </main>

            {/*print the data */}
        </>
    )
}