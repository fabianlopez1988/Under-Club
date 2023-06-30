import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "react-quill/dist/quill.snow.css";
import "./SelectedNews.css";
import { getNewsByTitle } from "../../store/news";
import { Helmet } from "react-helmet-async";

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
  let ogUrl = `https://underclub.com.ar/news/${id}`;
  let titleMetaTag = selectedNews?.newsTitle
  let descriptionMetaTag = selectedNews?.newsDescription
  let photoMetaTag = selectedNews?.photo
  
  if(loading === true){
    return null;
  }

  return (
    <>
        <Helmet>
        {/* Primary Meta Tags */}
        <title>{titleMetaTag}</title>
        <meta name="title" content={titleMetaTag} />
        <meta name="description" content={descriptionMetaTag} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:title" content={titleMetaTag} />
        <meta property="og:description" content={descriptionMetaTag} />
        {/* <meta property="og:image" content={photoMetaTag} /> */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={ogUrl} />
        <meta property="twitter:title" content={titleMetaTag} />
        <meta
          property="twitter:description"
          content={descriptionMetaTag}
        />
        {/* <meta property="twitter:image" content={photoMetaTag} /> */}
      </Helmet>
      <div className="selectedNews-container">
      <h1 className="selectedNews-title">{pathEdited}</h1>
      <div>
        <img
          src={photoMetaTag}
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
    </>

  );
};

export default SelectedNews;