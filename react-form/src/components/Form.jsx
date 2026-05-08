import Input from "./Input"
import UlTitles from "./UlTitles"
export default function Form({ handleSubmit, handleDelete, newTitle, setNewTitle, titles }) {

    return (

        <form onSubmit={handleSubmit}>
            <Input newTitle={newTitle} setNewTitle={setNewTitle} />

            <UlTitles titles={titles} handleDelete={handleDelete} />
        </form>
    )


}