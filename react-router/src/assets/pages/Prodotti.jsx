import { useState, useEffect } from "react"
import axios from "axios"


export default function Prodotti() {

    const [productList, setProductList] = useState([])


    // fetching dei dati

    function fetchProductList() {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data);

                setProductList(res.data)
            })
    }
    // con useEffetct impesco si crei un loop infinito inserendo le parentesi quadre

    useEffect(fetchProductList, [])


    return (



        <main>



            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-5">


                    {
                        productList.map((item) =>

                            <div className="col" key={item.id} >
                                <div className="card text-start p-2 h-100" >
                                    <img className="card-img-top" src={item.image} alt="Title" />
                                    <div className="card-body">
                                        <h4 className="card-title">{item.title}</h4>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>


                            </div>



                        )
                    }




                </div>

            </div>

        </main>
    )
}