import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false

        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=de&apiKey=467c2a62bb7d47fb8252b66063bbac7d";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});
    }

    render() {
        return (

            <div className='container my-3' >
                <h2>Newsy - Top Headlines</h2>
                <div className="row my-3">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem title={element.title.slice(0,36)} description={element.description.slice(0,73)} 
                        imgUrl={element.urlToImage}
                        newsUrl = {element.url} /></div>

                    })}
                    
                </div>

            </div>




        )
    }
}

export default News