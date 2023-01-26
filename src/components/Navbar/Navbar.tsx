import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  changeCartStatus,
  changeFavoriteStatus,
} from "../../store/DrawerMenu/DrawerMenu";
import CartMenu from "../Cart/CartMenu/CartMenu";
import FavoriteMenu from "../Favorite/FavoriteMenu";
import ModeButton from "../shared-components/ModeButton/ModeButton";
import "./Navbar.scss";

const Navbar = () => {
  const quantity = useAppSelector((state) => state.product.totalQuantity);
  const { cartStatus, favoriteStatus } = useAppSelector(
    (state) => state.drawerMenu
  );
  const numOf_Favorites = useAppSelector(
    (state) => state.favorite.numOf_Favorites
  );
  const {isDarK}=useAppSelector(state=>state.theme)
  const dispatch = useAppDispatch();

  return (
    <div className="pb">
      <div className={`header ${isDarK ? 'headerFooterDark' : 'headerFooterLight'}`}>
        
        <img className="logo" src='/imgs/logo2 (2).png' />
        <div className="options">
          <ModeButton />
          <p onClick={() => dispatch(changeFavoriteStatus(true))}>
            <i className="fa-regular fa-heart"></i>
            <span className="favorite-count">{numOf_Favorites}</span>
          </p>
          <p onClick={() => dispatch(changeCartStatus(true))}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="product-count">{quantity}</span>
          </p>
        </div>
      </div>
      {cartStatus && <CartMenu />}
      {favoriteStatus && <FavoriteMenu />}
    </div>
  );
};

export default Navbar;
