import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EventHeaderCard.css";
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";
import { getAllEvent } from "../../store/events";

const EventHeaderCard = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  if (isLoading) {
    <SpinnerComponent />;
  }

  useEffect(() => {
    dispatch(getAllEvent()).then(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const events = useSelector((state) => state.events);

  return (
    <div>
      {events ? (
        <div className="flyer-box">
          <img src={events.data[0]?.flyerLarge} alt="flyer" />
          <a href={events.data[0]?.url} target="_blank" rel="noreferrer">
            <button>Tickets</button>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default EventHeaderCard;
