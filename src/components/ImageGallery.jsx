import React from 'react'

const ImageGallery = ({image}) => {
    return (
        <div className="container card mt-5" style={{ width: '18rem' }}>
            <img className="card-img-top" src={image.webformatURL} alt='' />
            <div className="card-body">
                <h5 className="card-title">Photo By {image.user}</h5>
                <p className="card-text">Views: {image.views}</p>
                <p className="card-text">Likes: {image.likes}</p>
                <p className="card-text">Total Downloads: {image.downloads}</p>
            </div>
        </div>
    )
}

export default ImageGallery
