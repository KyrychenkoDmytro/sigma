import './Header.scss';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import CartNavigate from '../CartNavigate/CartNavigate';

import { useState } from 'react';


const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className="Header">
            <div className="Header__wrap">
                <BurgerMenu active={menuActive} onClick={() => setMenuActive(!menuActive)} />
                <Logo parentClass="Logo_header" />
                <Nav active={menuActive} setActive={setMenuActive}/>
                <Search />
                <CartNavigate />
            </div>
        </div>
    );
}

export default Header;