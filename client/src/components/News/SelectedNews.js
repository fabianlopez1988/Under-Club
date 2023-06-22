import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "react-quill/dist/quill.snow.css";
import "./SelectedNews.css";
import { getNewsByTitle } from "../../store/news";


const SelectedNews = () => {
  const { id } = useParams();
  const [selectedNews, setSelectedNews] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getNewsByTitle(id)).then((response) => {
      setSelectedNews(response.payload);
      setLoading(false);
    });
  }, [id]);

  const pathEdited = id?.replaceAll("-", " ");

  if(loading === true){
    return null;
  }

  return (
    <div className="selectedNews-container">
      <h1 className="selectedNews-title">{pathEdited}</h1>
      <div>
        <img
          src={selectedNews?.photo}
          alt="photoNew"
          className="selectedNews-photo"
        />
      </div>
      <h3 className="selectedNews-date">
        {!selectedNews?.date
          ? null
          : selectedNews?.date?.slice(0, 10).split("-").reverse().join("-")}
      </h3>
      <h3 className="selectedNews-description">
        {selectedNews?.newsDescription}
      </h3>
      <div
        className="selectedNews-body"
        dangerouslySetInnerHTML={{ __html: selectedNews?.newsBody }}
      />
    </div>
  );
};

export default SelectedNews;