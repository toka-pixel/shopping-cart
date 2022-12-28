import React from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { changeCartStatus } from "../../../store/DrawerMenu/DrawerMenu";
import { Drawer } from "antd";
import CartProduct from "./CartProduct";
import ButtonSubmit from "../../shared-components/Button/Button";
import EmptyMenu from "../../shared-components/EmptyMenu/EmptyMenu";
import "./CartMenu.scss";

const CartMenu = () => {
  const { cartStatus } = useAppSelector((state) => state.drawerMenu);
  const { totalPrice, cartProducts } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(changeCartStatus(false));
  };
  return (
    <div className="CartMenu">
      <Drawer
        className="cart"
        title="My Cart"
        placement="right"
        onClose={onClose}
        open={cartStatus}
      >
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
          <EmptyMenu
            img={"emptyCart.png"}
            text_1=" Your shopping cart is empty"
            text_2="let’s do some shopping"
          />
        )}
      </Drawer>
    </div>
  );
};

export default CartMenu;
