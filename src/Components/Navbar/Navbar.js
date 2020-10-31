import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQytOcSa454o6fDSsbn-OTF98y0qFXuz8BWhQ&usqp=CAU"
        alt="netflix-logo"
      />

      <img
        className="nav_avatar"
        src="https://www.pngkit.com/png/full/796-7963534_individuals-person-icon-circle-png.png"
        alt="nav_icon"
      />
    </div>
  );
}

export default Navbar;
