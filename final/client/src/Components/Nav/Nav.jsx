import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = ({ active, setActive }) => {

    const links = [
        { to: '#', name: 'Home' },
        { to: '#', name: 'About' },
        { to: '#', name: 'Pages' },
        { to: '#', name: 'Shop' },
        { to: '#', name: 'Projects' },
        { to: '/orders', name: 'Orders' }
    ]

    return (
        <div className={active ? 'Nav _active' : 'Nav'}>
            <nav>
                <ul className='Nav__ul'>
                    {links.map((item, i) => (
                        <li key={i}>
                            <Link
                                onClick={() => setActive(false)}
                                to={item.to}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Nav;