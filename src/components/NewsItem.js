import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imgUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imgUrl?"https://cdn.prod.www.spiegel.de/images/131968b7-ed2a-4c3f-95eb-ba7af2979154_w1280_r1.77_fpx33.34_fpy50.jpg":imgUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title} ...</h5>
                            <p className="card-text">{description} ...</p>
                            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem