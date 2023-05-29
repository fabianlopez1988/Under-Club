import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePodcast, getAllPodcast } from "../../../../../../store/podcast";
import "./DeletePodcastCard.css";
import Swal from "sweetalert2";

const DeletePodcastCard = ({ podcast }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    dispatch(deletePodcast(id))
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Borrado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllPodcast()));
  };

  return (
    <div className="card-container-podcast">
      <img src={podcast.flyer} alt={podcast.id} />
      <button onClick={() => handleDelete(podcast.id)}>Borrar</button>
    </div>
  );
};

export default DeletePodcastCard;