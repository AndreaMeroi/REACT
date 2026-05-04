export default function AppNavFooter({ footer_menu }) {

    return (

        <div className="topFootList">
            {footer_menu.map(item => (
                <ul key={item.title}>
                    <li>
                        <h3>{item.title}</h3>
                    </li>
                    {item.list.map(list_item => (
                        <li key={list_item.id}>
                            <a href={list_item.link}>{list_item.text}</a>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    )


}