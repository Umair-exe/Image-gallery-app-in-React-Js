import React, { useState } from 'react'

const ImageSearch = ({search}) => {
    const [searchImage,setSearchimage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        search(searchImage);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card-body row no-gutters align-items-center">
                    <div className="col">
                        <input onChange={e => setSearchimage(e.target.value) } className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" />
                    </div>

                    <div className="col-auto">
                        <button className="btn btn-lg btn-success" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>


    )
}

export default ImageSearch
