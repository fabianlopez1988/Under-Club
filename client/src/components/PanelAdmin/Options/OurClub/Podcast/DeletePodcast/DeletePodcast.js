import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPodcast } from "../../../../../../store/podcast";
import DeletePodcastCard from "./DeletePodcastCard";
import "./DeletePodcast.css";

const DeletePodcast = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllPodcast());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const podcasts = useSelector((state) => state.podcast);

  return (
    <div className="delete-container-podcast">
      <h1>Borrar Podcast</h1>
      <div className="grid">
        {podcasts?.data.map((podcast) => (
          <DeletePodcastCard key={podcast._id} podcast={podcast} />
        ))}
      </div>
    </div>
  );
};

export default DeletePodcast;
