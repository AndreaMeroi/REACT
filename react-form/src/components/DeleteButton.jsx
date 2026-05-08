export default function DeleteButton({ handleDelete, i }) {

    return (
        <button type="button" onClick={() => handleDelete(i)}>delete me</button>

    )

}