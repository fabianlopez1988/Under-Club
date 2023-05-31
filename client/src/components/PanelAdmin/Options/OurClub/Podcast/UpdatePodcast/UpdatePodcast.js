import "./UpdatePodcast.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPodcast } from "../../../../../../store/podcast";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const UpdatePodcast = () => {
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
    <div className="update-podcast-container">
      <h1>Editar Podcast</h1>
      <div className="grid">
        {podcasts?.data?.map((podcast) => (
          <div>
            <Link to={`/admin/ourclub/podcast/updatepodcast/${podcast._id}`}>
              <img src={podcast.flyer} alt={podcast._id} />
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default UpdatePodcast;
