
import { useAppSelector, useAppDispatch } from "../../hooks";
import { changeStatus } from '../../store/Cart/cartSlice';
import CartMenu from "../Cart/CartMenu/CartMenu";
import "./Navbar.scss";

const Navbar = () => {


  const quantity = useAppSelector(state => state.product.totalQuantity);
  const status = useAppSelector(state => state.cart.status)
  const dispatch = useAppDispatch();

  return (
    <div className="pb">
      <header>
        <p>Online Store</p>
        <div className="options">
          <i className="fa-regular fa-heart"></i>
          <label onClick={() => dispatch(changeStatus(true))} >
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="product-count">{quantity}</span>
          </label>
        </div>

      </header>
      {
        status && <CartMenu />
      }
    </div>
  );
};

export default Navbar;
