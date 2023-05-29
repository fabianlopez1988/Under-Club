import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { getAllNews } from "../../store/news";
import axios from "axios";
import "./LatestNews.css";
import { apiUrl } from "../../utils/apiUrl"

const LatestNews = () => {
  const [allNews, setAllNews] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllNews()).then((res) => console.log(res.data));
    axios.get(`${apiUrl}/news`).then((news) => setAllNews(news.data));
  }, []);

  return (
    <div>
      {!allNews ? null : (
        <>
          <div className="latestNews-container ">
            <h1 className="latestNews-title">{allNews[0]?.newsTitle}</h1>
            <img src={allNews[0]?.photo} alt="" className="latestNews-photo" />
            <h3 className="latestNews-date">
              {allNews &&
                allNews[0]?.date &&
                allNews[0]?.date.slice(0, 10).split("-").reverse().join("-")}
            </h3>
            <h3 className="latestNews-news-description">
              {allNews[0]?.newsDescription}
            </h3>
            <div
              className="latestNews-body"
              dangerouslySetInnerHTML={{ __html: allNews[0]?.newsBody }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default LatestNews;

