import './CartNavigate.scss';

const CartNavigate = ({ count }) => {
    return (
        <div className="CartNavigate">
            <button className='CartNavigate__button'></button>
            <div className="CartNavigate__name">Cart(<span>{count}</span>)</div>
        </div>
    );
}

export default CartNavigate;