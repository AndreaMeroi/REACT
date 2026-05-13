import Input from "./Input"
import UlTitles from "./UlTitles"
export default function Form({

    handleSubmit,
    handleDelete,
    handleChange,
    formData,
    articlesData }) {

    return (


        <form className="container" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-4">
                    <Input formData={formData} handleChange={handleChange} />
                </div>

                <div className="col-8">
                    <UlTitles articlesData={articlesData} handleDelete={handleDelete} />
                </div>

            </div>


        </form>


    )


}