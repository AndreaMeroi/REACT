export default function Input({ newTitle, setNewTitle }) {



    return (

        <input type="text" value={newTitle} onChange={e => { setNewTitle(e.target.value) }} placeholder='inserisci un titolo ' />

    )
}