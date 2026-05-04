export default function AppNavHeader({ header_menu }) {

    return (
        <nav>
            {
                header_menu.map(list_item =>

                    <li key={list_item.id}>
                        <a href={list_item.link} >{list_item.text}</a>
                    </li>
                )
            }
        </nav>

    )
}