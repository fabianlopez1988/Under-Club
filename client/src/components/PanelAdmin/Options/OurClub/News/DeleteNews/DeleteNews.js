import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllNews } from "../../../../../../store/news";
import DeleteNewsCard from "./DeleteNewsCard";
import "./DeleteNews.css";

const DeleteNews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newsRedux = useSelector((state) => state.new);

  return (
    <div className="delete-container-news">
      <h1>Borrar Noticia</h1>
      <div className="grid">
        {newsRedux?.map((news) => (
          <DeleteNewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default DeleteNews;
