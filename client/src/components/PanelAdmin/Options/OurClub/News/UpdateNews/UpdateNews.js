import "./UpdateNews.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../../../../../store/news";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const UpdateNews = () => {
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

  const newsRedux = useSelector((state) => state.news);

  return (
    <div className="update-news-container">
      <h1>Editar noticia</h1>
      <div className="grid">
        {Array.isArray(newsRedux) &&
          newsRedux.length > 0 &&
          newsRedux.map((news) => (
            <div key={news._id}>
              <Link to={`/admin/ourclub/news/updatenews/${news._id}`}>
                <img src={news.photo} alt={news._id} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UpdateNews;
