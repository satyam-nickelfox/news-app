import React from 'react'
import {
    Link
} from "react-router-dom";

const NewsItem = ({ title, description, url, urlToImage, source }) => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={urlToImage} alt="rover" />
            </div>
            <div className="card-body">
                <span className="tag tag-teal">{source}</span>
                <h4>
                    <a href={url} target="_blank">{title}</a>
                </h4>
                <p>
                    {description}
                </p>
                <div class="user">
                    <div class="user-info">
                        <small>2h ago</small>
                    </div>
                </div>

            </div>

        </div>
        // <div className="card-container">
        //     <div className='image-container'>
        //         <img src={urlToImage} alt={urlToImage} />
        //     </div>
        //     <div className="card-content">
        //         <div className="card-title">
        //             <h3><a href={url}>{title}</a></h3>
        //         </div>
        //         <p>{description}</p>
        //         <h4>-{source}</h4>
        //     </div>

        // </div>
    )
}

export default NewsItem