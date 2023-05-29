import React from "react";
import LatestNews from "./LatestNews";
import CarouselNews from "./CarouselNews";
import "./News.css";

const News = () => {
  return (
    <div className="news-container">
      {/* <h1 className="sitioEnConstruccion">Sitio en construcción</h1> */}
      {/* <LatestNews /> */}
      <CarouselNews />
    </div>
  );
};

export default News;
