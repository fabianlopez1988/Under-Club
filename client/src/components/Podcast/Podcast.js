import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPodcast } from "../../store/podcast";
import { useNavigate } from "react-router-dom";

import "./Podcast.css";
import Carousel from "react-bootstrap/Carousel";

const Podcast = () => {
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
    <div>
      <section className="podcast">
        <div>
          <h1 className="podcast_title">PODCAST</h1>
        </div>
        <div className="podcast-title-paragraph_container">
          <div className="podcast_line"></div>
          <div></div>
          <div className="podcast-paragraph_container">
            <p className="podcast_paragraph">
              Under Club pertenece al puñado de clubes que han sabido construir
              una identidad sonora en conjunto con su público.<br></br>
              <br></br>
              El intercambio de energía entre DJs y clubbers fundó las bases
              para un sonido característico que fue madurando a lo largo del
              tiempo, hasta convertirse en una impronta en la escena.<br></br>
              <br></br>
              Encontrá debajo los distintos episodios donde artistas locales e
              internacionales harán entrega de sesiones que reflejan el sonido
              Under Club.
            </p>
          </div>
        </div>
      </section>
      <section>
        <Carousel>
          {podcasts?.data?.map((podcast) => (
            <Carousel.Item>
            <div className="podcast-container">
              <div className="podcast-container-flyer">
                <img className="" src={podcast.flyer} alt={podcast.id} />
              </div>

              <div className="podcast-container-intro">
                  <p>{podcast.intro}</p>
                <div className="podcast-container_button">
                  <a href={podcast.url} target="_blank" rel="noreferrer">
                    <button
                      className="podcast-container-intro_button"
                      src={podcast.url}
                    >
                      ESCUCHAR
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

export default Podcast;
