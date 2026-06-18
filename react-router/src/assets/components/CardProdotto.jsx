export default function CardProdotto({ prodotto }) {

    return (

        <>
            {/*
   

    
    */}
            <div className="card text-start p-2 h-100" >
                <img className="card-img-top" src={prodotto.image} alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{prodotto.title}</h4>
                    <p className="card-text">{prodotto.description}</p>
                </div>
            </div>


        </>





    )
}