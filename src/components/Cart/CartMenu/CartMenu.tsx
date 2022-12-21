import React from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { changeStatus } from "../../../store/Cart/cartSlice";
import { Drawer } from "antd";
import CartProduct from "./CartProduct";
import ButtonSubmit from "../../shared-components/Button/Button";
import "./CartMenu.scss";

const CartMenu = () => {
  const { status } = useAppSelector((state) => state.cart);
  const { totalPrice, cartProducts } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(changeStatus(false));
  };
  return (
    <div className="CartMenu">
      <Drawer className="cart" title="My Cart" placement="right" onClose={onClose} open={status}>
        {cartProducts.length > 0 ? (
          <>
            {cartProducts.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}

            <div className="totalPrice">
              <label>Total</label>
              <label>${totalPrice.toFixed(2)}</label>
            </div>
            <ButtonSubmit>checkout</ButtonSubmit>
          </>
        ) : (
          <div className="emptyCart">
            <div className="emptyItems">
              <img src="/imgs/emptyCart.png" />
              <p> Your shopping cart is empty </p>
              <p> let’s do some shopping </p>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
  //  status ? (
  //   <div className="CartMenu">
  //     <div className="drawer__overlay"></div>
  //     <div className={status ? "openMenu" : "closeMenu"}>
  //     <div className={`menu`}>
  //       <span onClick={closeMenu}>
  //         <i className="fa-solid fa-circle-xmark"></i>
  //       </span>
  //     </div>
  //     </div>
  //   </div>
  // ) : null;
};

export default CartMenu;
