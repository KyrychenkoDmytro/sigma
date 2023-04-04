import './Header.scss';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import CartNavigate from '../CartNavigate/CartNavigate';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const { isHeaderVisible } = useSelector(state => state.products);

    return (
        <div className={isHeaderVisible ? "Header" : "Header _invisible"}>
            <div className="Header__wrap">
                <BurgerMenu active={menuActive} onClick={() => setMenuActive(!menuActive)} />
                <Link className='Header__Logo-link' to="/">
                    <Logo parentClass="Logo_header" />
                </Link>
                <Nav active={menuActive} setActive={setMenuActive} />
                <Search />
                <Link className='Header__CartNavigate-link' to="/cart">
                    <CartNavigate />
                </Link>
            </div>
        </div>
    );
}

export default Header;