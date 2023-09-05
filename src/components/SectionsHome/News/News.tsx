import React from "react";
import { Row, Col } from "antd";
import CenterText from "../../shared-components/CenterText/CenterText";
import "./News.scss";

const News = () => {
  return (
    <div className="container grid pt-60 pb-60">
      <CenterText text={"New Latest"} />
      <Row>
        <Col xs={24} md={8}>
          <div className="effect-roxy">
            <img src="/imgs/news3.jpg" alt="news" className="gridImg" />
            <div className="overflow-content">
              <p className="trend">Trend Of Year</p>
              <p>
              Perfect Winter Work Wardrobe Requires Only These 7 Items
              </p>
              <a className="hover" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yahoo.com%2Flifestyle%2Fperfect-winter-wardrobe-requires-only-050500775.html&psig=AOvVaw2xGJxKLeOj9qMDV584dhfX&ust=1674690958312000&source=images&cd=vfe&ved=0CBEQjhxqFwoTCPCB54-04fwCFQAAAAAdAAAAABAZ">
                View more
              </a>
            </div>
          </div>
        </Col>

        <Col xs={24} md={8}>
          <div className="effect-roxy">
            <img src="/imgs/news1.jpg" alt="news" className="gridImg" />
            <div className="overflow-content">
              <p className="trend">Trend Of Year</p>
              <p>17 Work Outfits That Will Totally Function in the Winter</p>
              <a className="hover" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whowhatwear.com%2Fcute-winter-work-outfits&psig=AOvVaw2xGJxKLeOj9qMDV584dhfX&ust=1674690958312000&source=images&cd=vfe&ved=0CBEQjhxqFwoTCPCB54-04fwCFQAAAAAdAAAAABAx">
                View more
              </a>
            </div>
          </div>
        </Col>

        <Col xs={24} md={8}>
          <div className="effect-roxy">
            <img
              src="/imgs/news2.jpg
              "
              alt="news"
              className="gridImg"
            />
            <div className="overflow-content">
              <p className="trend">Trend Of Year</p>
              <p> Fashionista is a fashion news website that covers the business </p>
              <a className="hover" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whowhatwear.com%2Fcute-winter-work-outfits&psig=AOvVaw2xGJxKLeOj9qMDV584dhfX&ust=1674690958312000&source=images&cd=vfe&ved=0CBEQjhxqFwoTCPCB54-04fwCFQAAAAAdAAAAABAx">
                View more
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <div></div>
    </div>
  );
};

export default News;
