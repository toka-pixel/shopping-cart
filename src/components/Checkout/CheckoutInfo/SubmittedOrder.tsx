import React from "react";
import "./style.scss";

interface OrderProps {
  date: string;
  paymentMethod: string;
}

const SubmittedOrder: React.FC<OrderProps> = ({ date, paymentMethod }) => {
  return (
    <div className="submittedOrder">
      <i className="fa-solid fa-check"></i>
      <p>Thank you</p>
      <p>Your order has been received</p>
      <p>
        Order number: <span>{Math.random().toFixed(5)}</span>
      </p>
      <p>
        Date: <span>{new Date(date).toDateString()}</span>
      </p>
      <p>
        Payment method: <span>{paymentMethod}</span>
      </p>
    </div>
  );
};

export default SubmittedOrder;
