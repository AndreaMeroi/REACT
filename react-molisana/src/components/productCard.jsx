export default function ProductCard({ product }) {

    const { title, src } = product
    console.log(title, src);
    // essendo props un oggetto posso destrutturare
    // quindi  dentro alle graffe identifico i parametri al posto di props nella funzione
    // e posso scrivere direttamente il nome della chiave nel return


    return (
        <div className="col">
            <div className="card">
                <img src={product.src} alt="" />
                <h3>{product.title}</h3>
            </div>
        </div>
    )
}