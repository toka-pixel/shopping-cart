import React from "react";
import { Row, Col } from "antd";
import ButtonSubmit from "../shared-components/Button/Button";

const SecondSlide = () => {
  return (
    <div className="carousel secondSlide">
      <Row>
      <Col xs={2}></Col>
        <Col xs={20}>
          <div className="right-text">
            <p>new trend</p>
            <p>new collection </p>
            <p>
              big sale of this week up to 30%
            </p>
            <ButtonSubmit>shop now</ButtonSubmit>
          </div>
        </Col>
        
        <Col xs={8}></Col>
      </Row>
    </div>
  );
};

export default SecondSlide;
