import "./UpdateEpisode.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllEpisodes } from "../../../../../../store/episodes";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const UpdateEpisode = () => {
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
    <div className="update-episode-container">
      <h1>Editar episodio</h1>
      <div className="grid">
        {episodes?.data?.map((episode) => (
          <div>
            <Link to={`/admin/ourclub/episode/updateepisode/${episode.id}`}>
              <img src={episode.flyer} alt={episode.id} />
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default UpdateEpisode;
