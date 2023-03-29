import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="Nav">
            <nav>
                <ul className='Nav__ul'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Pages</Link></li>
                    <li><Link to="#">Shop</Link></li>
                    <li><Link to="#">Projects</Link></li>
                    <li><Link to="#">News</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;