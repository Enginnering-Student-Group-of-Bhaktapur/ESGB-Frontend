import React from "react";

import banner_1 from '../../assets/img/HomeCarousel/1.jpg';
import banner_2 from '../../assets/img/HomeCarousel/2.jpg';
import banner_3 from '../../assets/img/HomeCarousel/3.jpg';
import banner_4 from '../../assets/img/HomeCarousel/4.jpg';
import banner_5 from '../../assets/img/HomeCarousel/5.jpg';


function Carousel() {
  return (
    <section id="carousel_home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div
              id="HomeCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#HomeCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#HomeCarousel"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#HomeCarousel"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#HomeCarousel"
                  data-slide-to="3"
                ></li>
                <li
                  data-target="#HomeCarousel"
                  data-slide-to="4"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100 home_carousel_image" src={banner_1} alt="First slide" />
                </div>
                <div className="carousel-item home_carousel_image">
                  <img className="d-block w-100" src={banner_2} alt="Second slide" />
                </div>
                <div className="carousel-item home_carousel_image">
                  <img className="d-block w-100" src={banner_3} alt="Third slide" />
                </div>
                <div className="carousel-item home_carousel_image">
                  <img className="d-block w-100" src={banner_4} alt="Third slide" />
                </div>
                <div className="carousel-item home_carousel_image">
                  <img className="d-block w-100" src={banner_5} alt="Third slide" />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#HomeCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#HomeCarousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
