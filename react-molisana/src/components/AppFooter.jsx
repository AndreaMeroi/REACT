import AppLogo from './AppLogo'
{/*
   const footer_menu = [
    {
        title: 'Pastificio',
        list: [
            {
                id: 1,
                text: 'il pastificio',
                link: '#'
            },
            {
                id: 2,
                text: 'il pastificio',
                link: '#'
            },
            {
                id: 3,
                text: 'il pastificio',
                link: '#'
            },
            {
                id: 4,
                text: 'il pastificio',
                link: '#'
            },
            {
                id: 5,
                text: 'il pastificio',
                link: '#'
            },
        ]

    },
    {
        title: 'products',
        list: [
            {
                id: 1,
                text: 'le classiche',
                link: '#'
            },
            {
                id: 2,
                text: 'le classiche',
                link: '#'
            },
            {
                id: 3,
                text: 'le classiche',
                link: '#'
            },
            {
                id: 4,
                text: 'le classiche',
                link: '#'
            },
            {
                id: 5,
                text: 'le classiche',
                link: '#'
            },
        ]

    }
] 
    */
}


export default function AppFooter({ footer_menu }) {

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <AppLogo slogan={'La pasta buona buona!'} />
                    </div>
                    {/*first iteration for the menus  */}
                    {footer_menu.map(item => (

                        <div className="col" key={item.id}>
                            <h3>{item.title}</h3>

                            {/*second iteration for each sum item list */}

                            <ul>
                                {

                                    item.list.map(list_item =>

                                        <li key={list_item.id}>
                                            <a href={list_item.link} >{list_item.text}</a>
                                        </li>
                                    )


                                }
                            </ul>
                        </div>

                    ))}

                    {/*
<div className="col">
                        <h3>Pastificio</h3>
                        <ul>
                            <li><a href="">IL pastificio</a></li>
                            <li><a href="">IL pastificio</a></li>
                            <li><a href="">IL pastificio</a></li>
                            <li><a href="">IL pastificio</a></li>
                            <li><a href="">IL pastificio</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Prodotti</h3>
                        <ul>
                            <li><a href="">Prodotti</a></li>
                            <li><a href="">Prodotti</a></li>
                            <li><a href="">Prodotti</a></li>
                            <li><a href="">Prodotti</a></li>
                            <li><a href="">Prodotti</a></li>
                        </ul>
                    </div>
*/}

                </div>
            </div>
        </footer>

    )

}