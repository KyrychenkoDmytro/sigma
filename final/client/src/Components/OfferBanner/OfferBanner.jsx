import './OfferBanner.scss';

const OfferBanner = () => {
    return (
        <section className="OfferBanner">
                <div className="OfferBanner__wrap">
                    <div className="OfferBanner__block">
                        <div className='title-label OfferBanner__title-label'>Natural!!</div>
                        <h3 className="title OfferBanner__title">
                            Get Garden<br />
                            Fresh Fruits<br />
                        </h3>
                    </div>
                    <div className="OfferBanner__block">
                        <div className='title-label OfferBanner__title-label'>Offer!!</div>
                        <h3 className="title OfferBanner__title">
                            Get 10% off<br />
                            on Vegetables<br />
                        </h3>
                    </div>
                </div>
        </section>
    );
}

export default OfferBanner;