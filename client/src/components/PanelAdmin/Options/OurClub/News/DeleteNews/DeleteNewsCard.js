import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteNews, getAllNews } from "../../../../../../store/news";
import "./DeleteNewsCard.css";
import Swal from "sweetalert2";

const DeleteNewsCard = ({ news }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteNews(id))
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Borrado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllNews()));
  };

  return (
    <div className="card-container-news">
      <img src={news.photo} alt={news._id} />
      <button onClick={() => handleDelete(news._id)}>Borrar</button>
    </div>
  );
};

export default DeleteNewsCard;
