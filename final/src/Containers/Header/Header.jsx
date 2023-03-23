import './Header.scss';
import Logo from '../../Components/Logo/Logo';
import Nav from '../../Components/Nav/Nav';
import Search from '../../Components/Search/Search';
import CartNavigate from '../../Components/CartNavigate/CartNavigate';


const Header = () => {
    return (
        <div className="Header">
            <div className="Header__wrap">
                <Logo />
                <Nav />
                <Search />
                <CartNavigate />
            </div>
        </div>
    );
}

export default Header;