import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";
import "../asset/css/App.css";
import { Button } from "react-bootstrap";

class DeviceDetails extends Component {
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
          <h2>Device Details</h2>
        </div>
        <div className="device-details">
          <br />
          <br />
          <br />

          <div>
            <Card>
              <CardBody className="card-box">
                <CardTitle>
                  <b>Device Name</b>
                </CardTitle>
                <CardText> Device id </CardText>
                <br />
                <br />
                <CardText> Device Name </CardText>
                <br />
                <br />
                <CardText> Family </CardText>
                <br />
                <br />
                <CardText> Type </CardText>
                <br />
                <br />
                <CardText> Readings </CardText>
                <br />

                <br />
                <br />
              </CardBody>
            </Card>{" "}
            <br />
          </div>
        </div>

        <div className="sidebar-device">
          <br></br>
          <br></br>

          <center>
            <br />

            <Button className="device-button" variant="primary">
              Device View Details
            </Button>
          </center>
        </div>

        <Footer />
      </div>
    );
  }
}

export default DeviceDetails;
