import './Testimonial.scss';

const Testimonial = () => {
    return (
        <section className="Testimonial">
            <div className="container">
                <div className="Testimonial__wrap">
                    <div className="title-label Testimonial__title-label">Testimonial</div>
                    <h2 className="title Testimonial__title">What Our Customer Saying?</h2>
                    <div className="Testimonial__review">
                        <div className="Testimonial__review-img"><img src="./img/Testimonial-review-logo.jpg" alt="logo" /></div>
                        <div className="Testimonial__review-rank">&#11088;&#11088;&#11088;&#11088;&#11088;</div>
                        <p className="Testimonial__review-text">
                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                        </p>
                        <h6 className="title Testimonial__review-name">Sara Taylor</h6>
                        <span className="Testimonial__review-consumer">Consumer</span>
                        <div className="Testimonial__review-navigation"><img src="./img/icons/testimonial-navigator.svg" alt="pagination" /></div>
                    </div>
                </div>
                <div className="Testimonial__counters">
                        <div className="Testimonial__counters-item">
                            <h2 className="title Testimonial__counters-title">100%</h2>
                            <div className="Testimonial__counters-name">Organic</div>
                        </div>
                        <div className="Testimonial__counters-item">
                            <h2 className="title Testimonial__counters-title">285</h2>
                            <div className="Testimonial__counters-name">Active Product</div>
                        </div>
                        <div className="Testimonial__counters-item">
                            <h2 className="title Testimonial__counters-title">350+</h2>
                            <div className="Testimonial__counters-name">Organic Orchads</div>
                        </div>
                        <div className="Testimonial__counters-item">
                            <h2 className="title Testimonial__counters-title">25+</h2>
                            <div className="Testimonial__counters-name">Years of Farming</div>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Testimonial;