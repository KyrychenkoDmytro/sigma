import './AboutUs.scss';

const AboutUs = () => {
    return (
        <section className="AboutUs">
            <div className="container">
                <div className="AboutUs__wrap">
                    <div className="AboutUs__block">
                        <div className='title-label AboutUs__title-label'>About Us</div>
                        <h2 className="title AboutUs__title">
                            We Believe in Working<br />
                            Accredited Farmers<br />
                        </h2>
                        <p className="AboutUs__text">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>
                        <div className="AboutUs__our-advantages">
                            <div className="AboutUs__advantage-block">
                                <div className="AboutUs__advantage-img">
                                    <img src="./img/icons/about-us1.svg" alt="advantage" />
                                </div>
                                <div className="AboutUs__advantage-info">
                                    <h6 className="title AboutUs__advantage-title">Organic Foods Only</h6>
                                    <p className="AboutUs__advantage-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                </div>
                            </div>
                            <div className="AboutUs__advantage-block">
                                <div className="AboutUs__advantage-img">
                                    <img src="./img/icons/about-us2.svg" alt="advantage" />
                                </div>
                                <div className="AboutUs__advantage-info">
                                    <h6 className="title AboutUs__advantage-title">Quality Standards</h6>
                                    <p className="AboutUs__advantage-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn_gray AboutUs__btn">Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;