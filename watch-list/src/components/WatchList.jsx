export default function WatchList({ list, onTrashClick }) {


    return (

        <ul>
            {list.map((item, i) =>
                <li key={i}>
                    {item}

                    <button onClick={() => onTrashClick(i)}>
                        Delete
                    </button>
                </li>
            )}
        </ul >

    )
}