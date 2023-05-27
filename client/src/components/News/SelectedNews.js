import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
// import { Helmet } from "react-helmet";
import "./SelectedNews.css";
import { useParams } from "react-router-dom";

const SelectedNews = () => {
  const { id } = useParams();
  const [selectedNews, setSelectedNews] = useState({});

  const pathEdited = id.replaceAll("-", " ");

  useEffect(() => {
    axios.get(`/api/news/title/${pathEdited}`).then((response) => {
      setSelectedNews(response.data);
    });
  }, [pathEdited]);

  return (
    <div className="selectedNews-container">
      {/* <Helmet>
        <title>{selectedNews.newsTitle}</title>
        <meta name="description" content={selectedNews.newsDescription} />
        <meta property="og:title" content={selectedNews.newsTitle} />
        <meta
          property="og:description"
          content={selectedNews.newsDescription}
        />
        <meta property="og:image" content={selectedNews.photo} />
      </Helmet> */}
      <h1 className="selectedNews-title">{selectedNews.newsTitle}</h1>
      <div>
        <img
          src={selectedNews.photo}
          alt="photoNew"
          className="selectedNews-photo"
        />
      </div>
      <h3 className="selectedNews-date">
        {!selectedNews.date
          ? null
          : selectedNews.date?.slice(0, 10).split("-").reverse().join("-")}
      </h3>
      <h3 className="selectedNews-description">
        {selectedNews.newsDescription}
      </h3>
      <div
        className="selectedNews-body"
        dangerouslySetInnerHTML={{ __html: selectedNews.newsBody }}
      />
    </div>
  );
};

export default SelectedNews;
