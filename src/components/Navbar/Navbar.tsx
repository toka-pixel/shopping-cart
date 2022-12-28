import { useAppSelector, useAppDispatch } from "../../hooks";
import { changeCartStatus , changeFavoriteStatus } from "../../store/DrawerMenu/DrawerMenu";
import CartMenu from "../Cart/CartMenu/CartMenu";
import FavoriteMenu from "../Favorite/FavoriteMenu";
import "./Navbar.scss";

const Navbar = () => {
  const quantity = useAppSelector((state) => state.product.totalQuantity);
  const {cartStatus , favoriteStatus} = useAppSelector((state) => state.drawerMenu);
  const numOf_Favorites = useAppSelector(
    (state) => state.favorite.numOf_Favorites
  );
  const dispatch = useAppDispatch();

  return (
    <div className="pb">
      <header>
        <p>Online Store</p>
        <div className="options">
          <label  onClick={() => dispatch(changeFavoriteStatus(true))}>
            <i className="fa-regular fa-heart"></i>
            <span className="favorite-count">{numOf_Favorites}</span>
          </label>
          <label onClick={() => dispatch(changeCartStatus(true))}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="product-count">{quantity}</span>
          </label>
        </div>
      </header>
      {cartStatus && <CartMenu />}
      {favoriteStatus && <FavoriteMenu/>}
    </div>
  );
};

export default Navbar;
