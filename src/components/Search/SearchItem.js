import React from 'react';
import './Search.css';

function SearchItem({  title, description, url, urlToImage, source }) {
    return (
        <div className="search-card-container">
            <div className='search-image-container'>
                <img src={urlToImage} alt={urlToImage} />
            </div>
            <div className="search-card-content">
                <div className="search-card-title">
                    <h3><a href={url}>{title}</a></h3>
                </div>
                <p>{description}</p>
                <h4>-{source}</h4>
            </div>

        </div>
    );
}

export default SearchItem;
