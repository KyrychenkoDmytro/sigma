import './Gallery.scss';

const Gallery = () => {
    return (
        <section className="Gallery">
                <div className="Gallery__wrap">
                    <div className="Gallery__block">
                       <h6 className="title Gallery__block-name">Organic Juice</h6>
                    </div>
                    <div className="Gallery__block">
                       <h6 className="title Gallery__block-name">Organic Food</h6>
                    </div>
                    <div className="Gallery__block">
                       <h6 className="title Gallery__block-name">Nuts Cookis</h6>
                    </div>
                </div>
        </section>
    );
}

export default Gallery;