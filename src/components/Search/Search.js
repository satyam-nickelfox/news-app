import React from 'react';
import axios from "axios";
import SearchItem from './SearchItem';
import './Search.css'

function Search() {
    const [news, setSearchNews] = React.useState([])

    async function searchNews(e) {
       
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${e}&pageSize=9&sortBy=popularity`,{
            headers:{"Authorization" : "17d9ab7490e5435ea9a1807760eac906"}
        })
        if (response) {
            setSearchNews(response.data.articles)
        }
        else{
            setSearchNews([])
        }
    }


    return (
        <>
            <div>
                <div className='searchbar'>
                    <input type="text" name='search' placeholder="Search.." onChange={event => searchNews(event.target.value)} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>

            </div>
            <div className='search-cards'>

                {news.map((article, i) => {
                    return (
                        <SearchItem
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}
                            source={article.source.name}
                            key={i}
                        />
                    )
                })}
            </div>
        </>

    );
}

export default Search;
