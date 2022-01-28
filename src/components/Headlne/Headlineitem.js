import React from 'react';

function Headlineitem({ url, title, urlToImage, source }) {

    return (
        <div className="row">
            <div className="column">
                <div className="content">
                    <h3><a href={url}>{title}</a></h3>
                    <div className="source">
                        <h6>-{source}</h6>
                    </div>
                </div>
                <div className="image">
                    <img src={urlToImage} alt={urlToImage} />
                </div>
            </div>
        </div>
    )
}

export default Headlineitem;
