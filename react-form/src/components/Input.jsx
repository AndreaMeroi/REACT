import { useState } from "react"

/*
const initialFormData = {
    title: '',
    author: '',
    comment: '',
    category: '',
    checked: false


}
*/


export default function Input({ formData = {}, handleChange }) {

    /* 
 const [formData, setFormData] = useState(initialFormData)
 
     function handleChange(e) {
     
             const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
     
             setFormData((formData) => ({
                 ...formData, [e.target.name]: e.target.value
             }));
     
     
         }
      */



    return (

        <div className="card">
            <div className="card-body">
                <h3>Add New Title</h3>
                <div className="mb-2">
                    <input className='form-control  ' type="text" name="title" id="title" value={formData.title} placeholder='inserisci un titolo ' onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <input className='form-control  ' type="text" name="author" id="author" value={formData.author} placeholder="add new author" onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <textarea className='form-control  ' type="text" name="comment" id="comment" value={formData.comment} placeholder="Add your comment" onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <select className="form-select" name="category" id="category" value={formData.category} onChange={handleChange}>
                        <option value='front_end'>FrontEnd</option>
                        <option value='back_end'>BackEnd</option>
                        <option value='ui_ux'>UI/UX </option>
                    </select>
                </div>

                <div className="mb-2">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="checked" id="checked" checked={formData.checked} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="">Pubblicato </label>
                    </div>
                </div>
                <div className="mb-2">
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </div>






            </div >

        </div >


    )
}