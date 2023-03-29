import './News.scss';

const News = () => {
    return (
        <section className="News">
            <div className="container">
                <div className="News__info">
                    <div className="News__info-wrap-titles">
                        <div className="title-label News__title-label">News</div>
                        <h2 className="title News__title">
                            Discover weekly content about<br />
                            organic food, & more
                        </h2>
                    </div>
                    <button className="btn btn_white News__Info-btn">More News</button>
                </div>
                <div className="News__wrap-blogs">
                    <div className="News__blog">
                        <div className="News__blog-date">
                            <div className="News__date-day">25</div>
                            <div className="News__date-month">Nov</div>
                        </div>
                        <div className="News__blog-info">
                            <div className="News__blog-author">By Rachi Card</div>
                            <h6 className="title News__blog-title">The Benefits of Vitamin D & How to Get It</h6>
                            <p className="News__blog-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <button className="btn btn_khaki News__blog-btn">Read More</button>
                        </div>
                    </div>
                    <div className="News__blog">
                        <div className="News__blog-date">
                            <div className="News__date-day">25</div>
                            <div className="News__date-month">Nov</div>
                        </div>
                        <div className="News__blog-info">
                            <div className="News__blog-author">By Rachi Card</div>
                            <h6 className="title News__blog-title">Our Favourite Summertime Tommeto</h6>
                            <p className="News__blog-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <button className="btn btn_khaki News__blog-btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default News;