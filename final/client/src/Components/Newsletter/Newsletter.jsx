import "./Newsletter.scss";

const Newsletter = () => {
    return (
        <section className="Newsletter">
            <div className="container">
                <div className="Newsletter__wrap">
                    <h2 className="title Newsletter__title">
                        Subscribe to<br />
                        our Newsletter
                    </h2>
                    <div className="Newsletter__form">
                        <form>
                            <div className="Newsletter__input-mail">
                                <input type="text" placeholder="Your Email Address" />
                            </div>
                            <button className="btn btn_pagination-grey Newsletter__info-btn" type="submit">Subscribe</button>
                        </form>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Newsletter;