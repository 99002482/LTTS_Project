import React from "react";
import "../asset/css/App.css";

function Footer() {
  return (
    <div className="main-footer">
      <center>
        <p className="col-sm">
          &copy;{new Date().getFullYear()} Device Health Monitoring System | All
          rights reserved | Terms Of Service | Privacy
        </p>
      </center>
    </div>
  );
}

export default Footer;
