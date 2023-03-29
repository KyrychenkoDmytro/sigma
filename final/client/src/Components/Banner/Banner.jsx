import './Banner.scss';

const Banner = () => {
    return (
        <section className="Banner">
            <div className="container">
                <div className="Banner__wrap">
                    <div className="Banner__block">
                        <div className='title-label Banner__title-label'>100% Natural Food</div>
                        <h1 className="title Banner__title">
                            Choose the best<br />
                            healthier way<br />
                            of life<br />
                        </h1>
                        <button className='btn btn_khaki Banner__btn'>Explore Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;