import React from "react";
import { Row, Col } from "antd";
import { getData, __ } from "../../utils";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

const FirstPart = ({ data }) => {
  return (
    <div className="firstPart">
      <div className="page-title">Industries</div>
      <Row className="industries">
        {data
          .slice(0)
          .reverse()
          .map((post, ind) => {
            const { title, excerpt, slug, _embedded, id } = post || {};

            return (
              <Col
                span={6}
                key={ind}
                data-aos="fade-down"
                data-aos-easing="ease"
                data-aos-delay={ind * 300}
                data-aos-duration="2000"
                data-aos-offset="300"
                className="industries-part"
              >
                <div
                  className="continue-title"
                  dangerouslySetInnerHTML={{ __html: title.rendered }}
                />

                <div
                  className="continue-text"
                  dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
                />

                <Link href={`/industries/${slug}`}>
                  <a className="read-more-detail">
                    {__("Read more")} <ArrowRightOutlined />
                  </a>
                </Link>

                <div className="industries-image">
                  <img src={getData(_embedded, "image")} />
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default FirstPart;
