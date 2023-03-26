import './Header.scss';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import CartNavigate from '../CartNavigate/CartNavigate';


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