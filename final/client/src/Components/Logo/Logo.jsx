import './Logo.scss';

const Logo = (props) => {
    const { parentClass } = props;
    return (
        <div className={"Logo " + parentClass}>
            <div className="Logo__img-wrap">
                <img src="./img/icons/logo.svg" alt="logo" />
            </div>
            <div className="Logo__name">
                Organick
            </div>
        </div>
    );
}

export default Logo;