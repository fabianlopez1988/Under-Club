import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllNews } from "../../store/news";
import newsEmpty from "../../assets/novedadesVacias.png";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselNews.css";

const CarouselNews = () => {
  const [carouselNews, setCarouselNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews())
      .then((response) => {
        setCarouselNews(response.payload);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return null;
  }

  if (carouselNews?.length < 1) {
    return (
      <div>
        <img
          className="empty-carousel-image"
          src={newsEmpty}
          alt="Empty Carousel"
        />
      </div>
    );
  }

  return (
    <div>
      <Carousel className="container-carousel-news" controls={false}  interval={4000}>
        {carouselNews?.map((news, index) => {
          const pathEdited = news.newsTitle.replaceAll("-", " ");
          return (
            <Carousel.Item key={index}>
              <div className="carousel-news-container">
                <img
                  className="d-block w-100"
                  src={news.photo}
                  alt="slider"
                  onClick={() => navigate(`/news/${news.newsTitle}`)}
                />
                <div className="carousel-news-caption">
                  <h2 className="carousel-news-title">{pathEdited}</h2>
                  <h3 className="carousel-news-description">
                    {news.newsDescription}
                  </h3>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselNews;