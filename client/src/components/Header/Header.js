import React from "react";
import trailer from "../../assets/videoUC.mp4";
import "./Header.css";

const Header = () => {
  return (
    <div className="containerVideo">
      <div className="overlay"></div>
      <video src={trailer} autoPlay loop muted></video>

      {/* <div className="headerContainer  text">
        <h1 className="titulo1">NUESTRO CLUB </h1>
        <h1 className="titulo1">NUESTRO </h1>
        <h1 className="titulo2">HOGAR</h1>
      </div> */}
    </div>
  );
};

export default Header;
