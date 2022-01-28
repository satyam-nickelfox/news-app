import React, { useEffect } from 'react';
import './News.css'
import axios from "axios";
import NewsItem  from './Newsitem';

function News() {
    // const [news, setNews] = React.useState([])
    const [articles, setArticles] = React.useState([])

    useEffect(() => {
        
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=17d9ab7490e5435ea9a1807760eac906`)
            setArticles(response.data.articles)
            console.log(response)
        }
        getArticles()

    }, []);


    return (
        <div className='cards'>
           {articles.map((article,i) => {
                return(
                    // <div></div>
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                        source = {article.source.name}
                        key = {i}
                    />
                )
            })}

        </div>
    );
}

export default News;
