import React from "react";

const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "75px" }}>
            <div className="image-banner" alt="First slide">
              <div className="container">
                <div className="text-banner">
                  <div className="d-flex text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
