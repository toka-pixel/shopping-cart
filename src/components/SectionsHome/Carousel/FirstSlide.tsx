import React from "react";
import { Row, Col } from "antd";
import { Button } from "antd";
import ButtonSubmit from '../../shared-components/Button/Button' 

const FirstSlide = () => {
  return (
    <div className="carousel firstSlide">
      <Row>
        <Col xs={12}></Col>
        <Col xs={2}></Col>
        <Col xs={8}>
          <div className="right-text">
            <p>summer fashion</p>
            <p>sale</p>
            <p>
              up to <span className="ratio">30%</span> off
            </p>
           <ButtonSubmit>buy now</ButtonSubmit>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FirstSlide;
