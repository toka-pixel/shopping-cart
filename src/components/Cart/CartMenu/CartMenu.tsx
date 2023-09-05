import { useAppSelector, useAppDispatch } from "../../../hooks";
import { changeCartStatus } from "../../../store/DrawerMenu/DrawerMenu";
import { Drawer } from "antd";
import CartProduct from "../../shared-components/CartProduct/CartProduct";
import ButtonSubmit from "../../shared-components/Button/Button";
import EmptyMenu from "../../shared-components/EmptyMenu/EmptyMenu";
import { useNavigate } from "react-router-dom";
import "./CartMenu.scss";

const CartMenu = () => {
  const { cartStatus } = useAppSelector((state) => state.drawerMenu);
  const { totalPrice, cartProducts } = useAppSelector((state) => state.product);
  const { isDarK } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onClose = () => {
    dispatch(changeCartStatus(false));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="CartMenu">
      <Drawer
        className={isDarK ? "darkMenu" : ""}
        title="My Cart"
        placement="right"
        onClose={onClose}
        open={cartStatus}
      >
        <div className={isDarK ? "dark" : "light"}>
          {cartProducts.length > 0 ? (
            <>
              {cartProducts.map((product) => (
                <CartProduct
                  className={""}
                  key={product.id}
                  product={product}
                />
              ))}

              <div className="totalPrice">
                <label>Total</label>
                <label>${totalPrice.toFixed(2)}</label>
              </div>
              <ButtonSubmit onClick={handleCheckout}>checkout</ButtonSubmit>
            </>
          ) : (
            <EmptyMenu
              img={"emptyCart.png"}
              text_1=" Your shopping cart is empty"
              text_2="let’s do some shopping"
            />
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default CartMenu;
