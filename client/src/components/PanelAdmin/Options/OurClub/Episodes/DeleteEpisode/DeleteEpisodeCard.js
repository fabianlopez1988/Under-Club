import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteEpisode, getAllEpisodes } from "../../../../../../store/episodes";
import "./DeleteEpisodeCard.css";
import Swal from "sweetalert2";

const DeleteEpisodeCard = ({ episode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteEpisode(id))
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Borrado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllEpisodes()));
  };

  return (
    <div className="card-container-episode">
      <img src={episode.flyer} alt={episode._id} />
      <button onClick={() => handleDelete(episode._id)}>Borrar</button>
    </div>
  );
};

export default DeleteEpisodeCard;