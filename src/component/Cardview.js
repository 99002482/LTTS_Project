import React, { Component } from "react";
import * as fiicons from "react-icons/fc";
import { Card, CardText, CardBody, CardHeader } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../asset/css/App.css";

class Cardview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("loc_sites")), //Fetching sites from local storage
    };
  }

  componentDidMount() {
    this.setState({
      data: JSON.parse(localStorage.getItem("loc_sites")),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Card className="card-width">
              <CardHeader
                tag="h6"
                style={{
                  backgroundColor: "#333",
                  borderColor: "#333",
                  color: "white",
                }}
              >
                Site name
              </CardHeader>
              <CardBody className="card-box">
                <CardText>
                  <fiicons.FcElectroDevices size={30} />
                  &nbsp;&nbsp;<b>Devices : {6}</b>
                </CardText>
                <br />
                <br />

                <Button>View Details</Button>
              </CardBody>
            </Card>{" "}
            <br />
          </div>
         
        </div>{" "}
      </div>
    );
  }
}

export default Cardview;
