import React from 'react'


const NewsItem = ({ title, description, url, urlToImage, source }) => {
    return (

        <div className="card-container">
            <div className='image-container'>
                <img src={urlToImage} alt={urlToImage} />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3><a href={url}>{title}</a></h3>
                </div>
                <p>{description}</p>
                <h4>-{source}</h4>
            </div>

        </div>
    )
}

export default NewsItem