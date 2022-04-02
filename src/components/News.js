import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=467c2a62bb7d47fb8252b66063bbac7d&page=1&pagesize=${this.props.pageSize}`;
        this.setState({isLoaded: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            isLoaded: false,
            totalResults: parsedData.totalResults
        });
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) { }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=467c2a62bb7d47fb8252b66063bbac7d&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({isLoaded: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            //console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                isLoaded: false
            });
        }

    }

    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=467c2a62bb7d47fb8252b66063bbac7d&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({isLoaded: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            isLoaded: false
        });


    }
    static defaultProps = {
        country : "us",
        category: "general",
        pageSize: 9
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number

    }

    render() {
        const { isLoaded } = this.state;
        if (isLoaded) {
            return <div><Spinner/></div>
        }
        else {
            return (

                <div className='container my-3' >
                    <h2 className="text-center" style={{margin: "30px 0px"}}>Newsy - Top Headlines</h2>
                    <div className="row my-3">
                        {!this.state.isLoaded && this.state.articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title?element.title.slice(0, 36):""} description={element.description?element.description.slice(0, 73):""}
                                    imgUrl={element.urlToImage}
                                    newsUrl={element.url} />
                            </div>

                        })}

                    </div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>




            )
        }
    }
}

export default News