import React from "react";
import "./ShortHistory.css";

const ShortHistory = () => {
  return (
    <div className="short-history-container">
      <div>
        <h1 id="title1">UNDER CLUB</h1>
      </div>
      <div id="grid-col-container-line">
        <div id="line-container">
          <div id="grid-line-col"></div>
          <div></div>
        </div>
        <div id="title2-container">
          <h1 id="title2">PARA TODO EL MUNDO</h1>
        </div>
      </div>

      <p id="paragraph-container">
        "Under Club no es solo un club de música electrónica. Acá pasan cosas
        que impactan en la vida de los clubbers. Es como un cambio de energía, y
        eso es lo que quiero que suceda en nuestro club.”
        <br></br>Joel Silva.
      </p>
    </div>
  );
};

export default ShortHistory;
