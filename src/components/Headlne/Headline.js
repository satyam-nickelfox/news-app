import React, { useEffect } from 'react';
import axios from "axios";
import Headlineitem from './Headlineitem';
import './Headline.css'

function Headline() {
    const [headline, setHeadline] = React.useState([])

    useEffect(() => {

        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=17d9ab7490e5435ea9a1807760eac906`,{
                headers : {"Access-Control-Allow-Origin": "*"}
            })
            setHeadline(response.data.articles)
            console.log(response)
        }
        getArticles()

    }, []);

    return (
        <div className='headline'>
            
            {headline.map((article,i) => {
                return (
                   
                    <Headlineitem
                        title={article.title}
                        url={article.url}
                        urlToImage={article.urlToImage}
                        source = {article.source.name}
                        key={i}
                    />
                )
            })}
        </div>
    )
}

export default Headline;
