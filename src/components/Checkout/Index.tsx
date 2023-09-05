import { useAppSelector } from "../../hooks/index";
import CartProduct from "../shared-components/CartProduct/CartProduct";
import EmptyMenu from "../shared-components/EmptyMenu/EmptyMenu";
import CheckoutInfo from "./CheckoutInfo/Index";
import { Divider, Row, Col } from "antd";
import "./Checkout.scss";

const Checkout = () => {
  const { totalPrice, cartProducts } = useAppSelector((state) => state.product);
  const { isDarK, darkColor_2, lightColor } = useAppSelector(
    (state) => state.theme
  );

  return (
    <div className="checkout container pb">
      <p className="cartHead">Checkout</p>
      <Divider />
      {cartProducts.length > 0 ? (
        <Row align="middle">
          <Col xs={24} md={15}>
            <CheckoutInfo  />
          </Col>
          <Col xs={2}></Col>
          <Col
            xs={24}
            md={7}
            className={`cart`}
            style={{ backgroundColor: isDarK ? darkColor_2 : lightColor }}
          >
            {
              <>
                <div>
                  {cartProducts.map((product) => (
                    <CartProduct
                      className={""}
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
                <Divider />
                <div className="totalPrice">
                  <label>Total</label>
                  <label>${totalPrice.toFixed(2)}</label>
                </div>
              </>
            }
          </Col>
        </Row>
      ) : (
        <EmptyMenu
          img={"emptyCart.png"}
          text_1=" Your shopping cart is empty"
          text_2="let’s do some shopping"
        />
      )}
    </div>
  );
};

export default Checkout;
