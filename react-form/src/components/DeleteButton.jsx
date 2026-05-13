export default function DeleteButton({ handleDelete, i }) {

    return (
        <button className="btn btn-danger  " type="button" onClick={() => handleDelete(i)}>
            <i className="bi bi-trash"></i>
        </button>

    )

}