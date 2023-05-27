import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEpisodes } from "../../store/episodes";
import { useNavigate } from "react-router-dom";
import "./Episodes.css";
import Carousel from "react-bootstrap/Carousel";

const Episodes = () => {
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
    <div>
      <section className="episode">
        <div className="episode_title-container">
          <h1 className="episode_title">EPISODIOS</h1>
        </div>
        <div className="episode-title-paragraph_container">
          <div className="episode-paragraph_container">
            <p className="episode_paragraph">
              8 artistas <br></br>8 episodios <br></br>8 experiencias
            </p>
          </div>
          <div></div>
          <div className="episode_line"></div>
        </div>
      </section>
      <section className="episode-section-carousel">
        <Carousel>
          {episodes?.data?.map((episode) => (
            <Carousel.Item key={episode.id}>
              <div className="episode-container">
                <div className="episode-container-flyer">
                  <img className="" src={episode.flyer} alt={episode.id} key={episode.id}/>
                </div>

                <div className="episode-container-intro">
                    <p>{episode.intro}</p>
                  <div className="episode-container_button">
                    <a href={episode.url} target="_blank" rel="noreferrer">
                      <button
                        className="episode-container-intro_button"
                        src={episode.url}
                      >
                        VER
                      </button>
                    </a>
                  </div>
                </div>

              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default Episodes;
