import { useContext, useEffect, useState } from 'react';
import FavouritesContext from '../contexts/favouritescontext';


export default function HomePage() {

    //make a state variable where store the charaters lilst

    const [currentPage, setCurrentPage] = useState(1)
    const { characters, fetchData, isFavourite, favourites } = useContext(FavouritesContext)



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
                        <h1 className="display-5 fw-bold">WElcome to the Rick e Morty Universe</h1>
                        <p className="col-md-8 fs-4">
                            Using a series of utilities, you can create this highlighted hero
                            section. Check out the examples below for how you can remix and
                            restyle it to your liking.
                        </p>

                    </div>
                </div>

                <section id="characters">
                    <div className="container">
                        <div className="row g-4">

                            {characters?.map(character =>

                                isFavourite(character.id) &&

                                (
                                    <div className="col-12 col-sm-6 col-md-4" key={character.id} >
                                        <div className="card h-100">
                                            <img className='card-img-top' src={character.image} alt="" />
                                            <div className="card-body">
                                                <h3>{character.name}</h3>


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

                                ))}

                            {favourites.length == 0 && <p> No features selected, come back after you liked any </p>}
                        </div>
                    </div>
                </section>


            </main>

            {/*print the data */}
        </>
    )
}