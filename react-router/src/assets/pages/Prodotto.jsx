import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import CardProdotto from "../components/CardProdotto";


export default function Prodotto() {

    const { id } = useParams();

    const [prodotto, setProdotto] = useState(null)

    const endpoint = `https://fakestoreapi.com/products/${id}`
    console.log(endpoint)

    function fetchdata(endpoint) {
        axios.get(endpoint)
            .then(res => {
                console.log(res.data);
                setProdotto(res.data)
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => fetchdata(endpoint), [])

    return (
        <>

            <div className="p-5 bg-light ">
                <div className="container py-5">
                    <h1 className="display-5 fw-bold">Scopri tutti i nostri prodotti!</h1>
                    <p className="col-md-8 fs-4">
                        Qui la nostra lista di prodotti!
                    </p>

                </div>
            </div>


            {
                prodotto != null ? (

                    <CardProdotto prodotto={prodotto} />
                ) :
                    (
                        <div>loading...</div>
                    )


            }




        </>
    )
}