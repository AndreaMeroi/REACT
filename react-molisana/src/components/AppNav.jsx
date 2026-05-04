export default function AppNav({ header_menu }) {

    return (

        <nav>
            {
                header_menu.map(item =>
                    <a href={item.link} key={item.id} className={item.is_active ? 'active' : ''}>{item.text} </a>)
            }


            {/*
                <a href="" className='active' >Home </a>
                <a href="">Prodotti </a>
                <a href="">Chi Siamo </a>
                <a href="">Contatti</a> 
                */}
            {/*
            <nav>
                {
                    header_menu.map(item => <a href={item.link} key={item.id} className={item.is_active ? 'active' : ''}>{item.text} </a>)
                }
                {/*
                <a href="" className='active' >Home </a>
                <a href="">Prodotti </a>
                <a href="">Chi Siamo </a>
                <a href="">Contatti</a> 
                */}
        </nav>
    )
}