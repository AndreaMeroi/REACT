export default function WatchList({ list }) {
    return (

        <ul>
            {list.map((item, i) =>
                <li key={i}>
                    {item}
                </li>
            )}
        </ul >

    )
}