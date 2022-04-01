import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            isLoaded: false,
            page: 1

        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=de&apiKey=467c2a62bb7d47fb8252b66063bbac7d&page=1&pagesize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            isLoaded: true,
            totalResults: parsedData.totalResults
        });
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=de&apiKey=467c2a62bb7d47fb8252b66063bbac7d&page=${this.state.page + 1}&pagesize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            //console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            });
        }

    }

    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=de&apiKey=467c2a62bb7d47fb8252b66063bbac7d&page=${this.state.page - 1}&pagesize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        });


    }

    render() {
        const { isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (

                <div className='container my-3' >
                    <h2>Newsy - Top Headlines</h2>
                    <div className="row my-3">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title.slice(0, 36)} description={element.description.slice(0, 73)}
                                    imgUrl={element.urlToImage}
                                    newsUrl={element.url} />
                            </div>

                        })}

                    </div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>




            )
        }
    }
}

export default News