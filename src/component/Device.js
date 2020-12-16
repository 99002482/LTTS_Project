import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../asset/css/App.css";
import { Button } from "react-bootstrap";

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      isLoaded: false,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Header />
        <div className="pageheading-device">
          <h2>Devices</h2>
        </div>
        <br></br>
        <br></br>
        <div className="device-table">
          <table border="1">
            <thead>
              <thead> ID</thead>
              <thead>Name</thead>
            </thead>
          </table>
        </div>
        <div className="sidebar-device">
          <br></br>
          <br></br>

          <div>
            <center>
              <br />

              <Button className="device-button">Device View Details</Button>
            </center>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Device;
