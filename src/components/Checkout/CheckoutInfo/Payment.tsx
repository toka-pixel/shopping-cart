import { useState } from "react";
import { Col, Row, Radio, Divider, Form } from "antd";
import "./style.scss";
import { useAppSelector } from "../../../hooks";

const Payment = () => {
  const { isDarK } = useAppSelector((state) => state.theme);

  const options = [
    { label: "Online Payment", value: "Online Payment" },
    { label: "Cash on Delivery", value: "Cash on Delivery" },
    { label: "Pos on Delivery", value: "Pos on Delivery" },
  ];

  const [value, setValue] = useState<string>(options[0]?.value);

  function onChange(e: any) {
    setValue(e.target.value);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Form.Item
        name="payment"
        rules={[{ required: true, message: "Please input Payment" }]}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Row>
            {options.map((item, index) => (
              <Col xs={24} key={index}>
                <Radio value={item.value}>
                  <p className={isDarK ? "dark" : "light"}>{item.value}</p>
                </Radio>
                <Divider />
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Form.Item>
    </div>
  );
};

export default Payment;
