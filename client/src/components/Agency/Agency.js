import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Agency.css';
import axios from 'axios';
import { motion, useScroll } from 'framer-motion';
import logo from '../../assets/logoUC.png';
import { apiUrl } from '../../utils/apiUrl';

const Agency = () => {
  const [resident, setResident] = useState([]);
  const { scrollYProgress } = useScroll();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    axios.get(`${apiUrl}/agency`).then((res) => setResident(res.data));
  }, []);

  const sortedResidents = resident
    ? [...resident].sort((a, b) => a.name.localeCompare(b.name))
    : null;

  return (
    <>
      {/* {loading ? (
        <div className="logo-app-loading">
          <img className="logo-app-img" src={logo} alt="logo under" />
        </div>
      ) : ( */}
      <div className="agency-container">
        <motion.div className="progress-bar-agency" style={{ scaleX: scrollYProgress }} />
        <section className="agency-section">
          <h1 className="agency-section-title">
            AGENCIAa<br></br>
          </h1>
          {!sortedResidents
            ? null
            : sortedResidents.map((res) => (
                <Accordion bsPrefix={{ background: '#d0f1f7' }} flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{res.name}</Accordion.Header>
                    <Accordion.Body className="agency-accordion-body_modifier">
                      <div className="agency-accordion-left">
                        <div className="container-agency">
                          {/* resident advisor trae el país de orígen */}
                          <div className="agency-country">ORIGEN: {res.nationality}</div>
                        </div>
                        <div className="agency-biography">{res.biography}</div>
                        <div className="agency-social-media">
                          <ul>
                            <li>
                              <a
                                className="agency-tag-a"
                                href={res.instagram}
                                target="_blank"
                                rel="noreferrer"
                              >
                                INSTAGRAM
                              </a>
                            </li>
                            <li>
                              <a
                                className="agency-tag-a"
                                href={res.soundcloud}
                                target="_blank"
                                rel="noreferrer"
                              >
                                SOUNDCLOUD
                              </a>
                            </li>

                            <li>
                              <a
                                className="agency-tag-a"
                                href={res.pressKit}
                                target="_blank"
                                rel="noreferrer"
                              >
                                PRESS KIT
                              </a>
                            </li>

                            {/* <li>
                            <div className="agency-soundcloud-container">
                              <ReactSoundCloud
                              height={"200px"}
                              color={"#8342ea"}
                                url={res.trackSoundcloud}
                              />
                            </div>
                          </li> */}
                          </ul>
                        </div>
                      </div>

                      <div className="agency-accordion-right">
                        <div className="agency-social-media-query">
                          <ul>
                            <li>
                              <a
                                className="agency-tag-a"
                                href={res.instagram}
                                target="_blank"
                                rel="noreferrer"
                              >
                                INSTAGRAM
                              </a>
                            </li>
                            <li>
                              <a
                                className="agency-tag-a"
                                href={res.soundcloud}
                                target="_blank"
                                rel="noreferrer"
                              >
                                SOUNDCLOUD
                              </a>
                            </li>
                            <li>
                              <a
                                className="agency-tag-a"
                                href={res.pressKit}
                                target="_blank"
                                rel="noreferrer"
                              >
                                PRESS KIT
                              </a>
                            </li>
                            {/* <li>
                            <a
                              className="agency-tag-a"
                              href={res.residentAdvisor}
                              target="_blank"
                              rel="noreferrer"
                            >
                              RESIDENT ADVISOR
                            </a>
                          </li> */}

                            {/* <li>
                            <div className="agency-soundcloud-container">
                              <ReactSoundCloud
                              height={"200px"}
                              color={"#8342ea"}
                                url={res.trackSoundcloud}
                              />
                            </div>
                          </li> */}
                          </ul>
                        </div>
                        <div className="agency-social-media-photo-query">
                          <img src={res.photo} alt="foto" className="agency-photo"></img>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}
        </section>
      </div>
      {/* )} */}
    </>
  );
};

export default Agency;
