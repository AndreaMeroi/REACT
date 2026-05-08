import DeleteButton from './DeleteButton'

export default function UlTitles({ titles, handleDelete }) {

    return (
        <ul>


            {
                titles.map((title, i) =>
                    <li key={i}>

                        <DeleteButton handleDelete={handleDelete} i={i} />
                        <span>{title}</span>

                    </li>
                )
            }
        </ul>


    )
}