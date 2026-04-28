export default function ProductCard({ title, img }) {

    return (
        <>
            <div className="card">
                <img src={img} alt="" />
                <h3>{title}</h3>
            </div>
        </>

    )
}