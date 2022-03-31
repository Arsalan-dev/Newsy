import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "By <a href=\"/profiles/aditi-sandal\">Aditi Sangal</a>, <a href=\"/profiles/adrienne-vogt\">Adrienne Vogt</a>, <a href=\"/profiles/meg-wagner\">Meg Wagner</a>, <a href=\"/profiles/travis-caldwell\">Travis Caldwell</a>, Seán Federico O'Murchú, Jack Guy, Hafsa Khalil, and Kathryn Snowdon, CNN",
            "title": "Russia invades Ukraine: Live updates - CNN",
            "description": "Shelling has intensified around the suburbs of Kyiv, and Ukraine's deputy defense minister said Russian forces are attempting to establish a \"corridor\" around the Ukrainian capital to block supply routes. Follow here for live news updates.",
            "url": "https://www.cnn.com/europe/live-news/ukraine-russia-putin-news-03-29-22/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220328115809-ukraine-russia-conflict-032722-super-tease.jpg",
            "publishedAt": "2022-03-29T12:05:00Z",
            "content": "Kremlin spokesperson Dmitry Peskov said he is not aware of cases of missing Ukrainian journalists and activists, or of reports of arrested officials in Russian-held territories of Ukraine.\r\nPeskov's … [+2158 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GamesIndustry.biz"
            },
            "author": "Christopher Dring",
            "title": "Sony merges PS Now and PS Plus to create three-tier subscription service - GamesIndustry.biz",
            "description": "PS1, PS2, PS3, PSP, PS4 and PS5 games included, but not brand new releases",
            "url": "https://www.gamesindustry.biz/articles/2022-03-29-sony-merges-ps-now-and-ps-plus-to-create-three-tier-subscription-service",
            "urlToImage": "https://images.gnwcdn.com/2022/articles/2022-03-29-09-55/PlayStation_Plus_Logo.jpg",
            "publishedAt": "2022-03-29T12:01:57Z",
            "content": "Share this article\r\nCompanies in this article\r\nSony Interactive Entertainment\r\nAt a glance:\r\n<ul><li>Sony overhauls games subscription offering to create three tiers: PS Plus Essentials, PS Plus Extr… [+3203 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Peter Schacknow",
            "title": "Stocks making the biggest moves in the premarket: Nielsen Holdings, FedEx, LHC Group and more - CNBC",
            "description": "The stocks making the biggest moves in premarket trading include Nielsen Holdings, FedEx, LHC Group, and more.",
            "url": "https://www.cnbc.com/2022/03/29/stocks-making-the-biggest-moves-in-the-premarket-nielsen-holdings-fedex-lhc-group-and-more.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106972429-16364108192021-11-08t215634z_1516855190_rc2jqq9dbnhe_rtrmadp_0_usa-stocks.jpeg?v=1636410879&w=1920&h=1080",
            "publishedAt": "2022-03-29T11:42:03Z",
            "content": "Take a look at some of the biggest movers in the premarket:\r\nNielsen Holdings (NLSN) The TV ratings company's stock surged 20.9% in the premarket after it agreed to be acquired by a private-equity co… [+3004 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Monica Greep",
            "title": "Prince George and Princess Charlotte arrive for Philip's memorial - Daily Mail",
            "description": "Prince George and Princess Charlotte looked adorable as they joined their parents the Duke and Duchess of Cambridge for their beloved great- grandfather's memorial service today.",
            "url": "https://www.dailymail.co.uk/femail/article-10663505/Prince-George-Princess-Charlotte-arrive-Westminster-Abbey-Philips-memorial.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/03/29/12/55948919-0-image-a-52_1648552460812.jpg",
            "publishedAt": "2022-03-29T11:21:49Z",
            "content": "Prince George and Princess Charlotte looked adorable as they joined their parents the Duke and Duchess of Cambridge for their beloved great-grandfather's memorial service today.  \r\nWalking hand-in-ha… [+41220 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Alexandra Semenova",
            "title": "Stock market news live updates: Stock futures point to higher open after all three benchmarks close at 6-week highs - Yahoo Finance",
            "description": "Futures on Wall Street’s main benchmarks pushed higher in pre-market trading Tuesday following a choppy previous session that saw stocks climb in the final...",
            "url": "https://finance.yahoo.com/news/stock-market-news-live-updates-march-29-2022-223713863.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/EAkBB0FtuF9sYuDlDOEeYg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDE-/https://s.yimg.com/os/creatr-uploaded-images/2022-03/234e9280-ae3e-11ec-bdd8-053a47939272",
            "publishedAt": "2022-03-29T11:18:08Z",
            "content": "Futures on Wall Streets main benchmarks pushed higher in pre-market trading Tuesday following a choppy previous session that saw stocks climb in the final hour to cap the day at six-week highs.\r\nCont… [+5374 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Sandra Gonzalez, CNN",
            "title": "Will Smith issues apology to Chris Rock over slapping incident at Oscars - CNN",
            "description": "Will Smith has issued an apology for striking presenter Chris Rock at Sunday's Academy Awards.",
            "url": "https://www.cnn.com/2022/03/28/entertainment/will-smith-apology/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220328184557-will-smith-file-032722-super-tease.jpg",
            "publishedAt": "2022-03-29T10:57:00Z",
            "content": "(CNN)Will Smith has issued an apology for striking presenter Chris Rock at Sunday's Academy Awards.\r\nIn a post on Instagram on Monday afternoon, Smith called his behavior \"unacceptable and inexcusabl… [+4987 chars]"
        }

    ]
    constructor(){
        super();
        console.log('Constructor from News Component');
        this.state = {
            articles : this.articles,
            loading : false

        }

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