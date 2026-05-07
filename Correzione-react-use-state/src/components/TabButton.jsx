export default function TabButton({ index, currentTab, title, onPress }) {

    return (
        // interpolo un condizionale ternario: se l'index è uguale al quello del bottone cliccato allora primary, se no light
        //invento la prop onPress che prende la funzionalità dal componente genitore App.jsx e la passa all'onClick che eseguirà la funzione passata dal componente genitore
        <button className={`btn btn-${index === currentTab ? 'primary' : 'light'} mx-3`} onClick={onPress}>
            {title}
        </button>
    )

    /* come l'ho copiata da App.js per componentizzarla
    
      // interpolo un condizionale ternario: se l'index è uguale al quello del bottone cliccato allora primary, se no light
            <button className={`btn btn-${index === currentTab ? 'primary' : 'light'} mx-3`} key={lang.id} onClick={() => handleClick(index)}>
                {lang.title}
            </button>
        )
    */




}