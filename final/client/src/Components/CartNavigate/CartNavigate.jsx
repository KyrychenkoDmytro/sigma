import './CartNavigate.scss';

const CartNavigate = () => {
    return (
        <div className="CartNavigate">
            <button className='CartNavigate__button'></button>
            <div className="CartNavigate__name">Cart(<span>0</span>)</div>
        </div>
    );
}

export default CartNavigate;