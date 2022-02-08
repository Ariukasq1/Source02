import React from "react";
import Image from "next/image";

const FactSection = ({ post }) => {
  const { acf } = post || {};

  const { bg_image } = acf || {};

  return (
    <div className="thirdPart">
      <Image loader={() => bg_image} src={bg_image} layout="fill" />
      <div className="list-of-facts">
        {Object.entries(post.acf).map(([key, value]) => {
          if (!key.includes("group")) {
            return null;
          }

          return (
            <div key={key} className="fact">
              <img
                src={value.icon}
                data-aos="zoom-in"
                data-aos-easing="ease"
                data-aos-duration="2000"
                data-aos-offset="300"
              />
              <p dangerouslySetInnerHTML={{ __html: value.upper_text }} />
              <div className="numbers">
                {value.number} {value.number_format}
              </div>
              <p dangerouslySetInnerHTML={{ __html: value.bottom_text }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FactSection;
