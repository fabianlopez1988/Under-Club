import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselHome.css";
import { getAllEvent } from "../../store/events";
import DemoSlider from "../../assets/DemoSlider.jpg";
import DemoSlider2 from "../../assets/anetha.jpg";
import DemoSlider3 from "../../assets/DemoSlider3.jpg";
import DemoSlider4 from "../../assets/DemoSlider4.jpg";
import DemoSlider5 from "../../assets/Oscar.jpeg";

function CarouselHome() {
  const [cultures, setCultures] = useState(0);

  const handleSelect = (selectedCulture, e) => {
    setCultures(selectedCulture);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllEvent());
  }, []);

  const events = useSelector((state) => state.events);

  return (
    <div className="carousel-home-container" >
      <Carousel fade>
        {/* activeIndex={index} onSelect={handleSelect} */}
        {/* <Carousel.Item>

          {events ? (
         
            
            <div className="carousel-home-container">
              <a href={events.data[0]?.url} alt="flyer" target="_blank">
              <img src={events.data[0]?.flyerLarge} alt="flyer" />
            </a>
            </div>

          ) : (
            <h3>flyer</h3>
          )}

    
        </Carousel.Item> */}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-resize-image"
            src={DemoSlider5}
            alt="slider"
            onClick={() => navigate("/culture")}
          />
          <Carousel.Caption className="carousel-caption-culture">
            <h3 className="carousel-title-culture"
            onClick={() => navigate("/culture")}>
              NO FOTOS<br></br> NO VIDEOS
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-resize-image"
            src={DemoSlider3}
            alt="slider"
            onClick={() => navigate("/culture")}
          />
          <Carousel.Caption className="carousel-caption-culture">
            <h3 className="carousel-title-culture"
            onClick={() => navigate("/culture")}>
              NO VIP<br></br>SOMOS TODOS <br></br>IGUALES
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-resize-image"
            src={DemoSlider4}
            alt="slider"
            onClick={() => navigate("/culture")}
          />
          <Carousel.Caption className="carousel-caption-culture">
            <h3 className="carousel-title-culture"
            onClick={() => navigate("/culture")}>
              PERMISO<br></br> PERDON <br></br>GRACIAS
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-resize-image"
            src={DemoSlider2}
            alt="slider"
            onClick={() => navigate("/culture")}
          />
          <Carousel.Caption className="carousel-caption-culture">
            <h3 className="carousel-title-culture"
            onClick={() => navigate("/culture")}>
              GREEN<br></br>CLUB<br></br>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
