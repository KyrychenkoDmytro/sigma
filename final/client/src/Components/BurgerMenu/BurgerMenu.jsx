import './BurgerMenu.scss';

const BurgerMenu = ({ active, onClick }) => {
    
    return (
        <div className={active ? 'BurgerMenu _active' : 'BurgerMenu'} onClick={onClick}>
            <span></span>
        </div>
    );
}

export default BurgerMenu;