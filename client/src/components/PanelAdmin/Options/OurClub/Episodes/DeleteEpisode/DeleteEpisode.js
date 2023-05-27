import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllEpisodes } from "../../../../../../store/episodes";
import DeleteEpisodeCard from "./DeleteEpisodeCard";
import "./DeleteEpisode.css";

const DeleteEpisode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllEpisodes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const episodes = useSelector((state) => state.episode);

  return (
    <div className="delete-container-episode">
      <h1>Borrar Episodio</h1>
      <div className="grid">
        {episodes?.data.map((episode) => (
          <DeleteEpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default DeleteEpisode;
