import React, { Component } from "react";
import { Button } from "reactstrap";
import "../asset/css/App.css";
import Header from "./Header";
import Footer from "./Footer";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="profile">
          <h2>Profile Details</h2>
        </div>
        <div>
          <br />
          <br />
          <br />

          <center>
            {" "}
            <div className="profile-data">
              Name: &nbsp;&nbsp;<p>Username</p> <br />
              <br />
              <br />
              &nbsp;&nbsp;&nbsp; Email: &nbsp;&nbsp;&nbsp;
              <p>User Email</p>
              <br />
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Phone:&nbsp;&nbsp; <input
                type="text"
                defaultValue="User Phone"
              />{" "}
              <br />
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Address: <input type="text" defaultValue="User Addresss" />
            </div>
          </center>

          <br />
          <br />
          <center>
            <Button className="button">update</Button>
          </center>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Profile;
