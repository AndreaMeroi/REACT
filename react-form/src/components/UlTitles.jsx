import DeleteButton from './DeleteButton'

export default function UlTitles({ articlesData, handleDelete }) {

    return (
        <div className="card">
            <div className="card-body">
                <h3>Titles</h3>

                <ul className='list-group list-unstyled'>

                    {
                        articlesData.map((article, i) =>

                            <li className='list-group-item d-flex relative justify-content-between align-items-center p-1 mb-2 relative' key={i}>
                                <div className="d-flex flex-column g-1">
                                    <strong className=''>
                                        {article?.tile}
                                    </strong>
                                    <h2>{article?.title}</h2>
                                    <h3>{article?.author}</h3>
                                    <p>{article.comment}</p>
                                    <div className='position-absolute top-0 end-0 m-2'>
                                        <label className="badge  text-bg-primary d-block mb-2" htmlFor="">{article.category}</label>
                                        <label className="badge text-bg-success d-block " htmlFor="">Available</label>
                                    </div>

                                </div>
                                <div className="position-absolute bottom-0 end-0 m-2">
                                    <DeleteButton handleDelete={handleDelete} i={i} />
                                </div>



                            </li>


                        )
                    }



                </ul>

            </div>
        </div>








    )
}