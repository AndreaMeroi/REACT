export default function ProductCard({ name, img }) {

    console.log(name, img);
    // essendo props un oggetto posso destrutturare
    // quindi  dentro alle graffe identifico i parametri al posto di props nella funzione
    // e posso scrivere direttamente il nome della chiave nel return


    return (
        <div className="card">
            <img src={img} alt="" />

            <h3>{name}</h3>
        </div>
    )
}