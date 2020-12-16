import { FormGroup, Label, Button } from "reactstrap";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../asset/css/App.css";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: "",
      //setting username and password state empty
    };
  }

  Username = (event) => {
    this.setState({ Username: event.target.value });
    //Setting username field to the user entered name
  };
  Password = (event) => {
    this.setState({ Password: event.target.value });
    //Setting Password field to the user entered password
  };

  Login = (event) => {
    if (this.state.Username.length === 0 || this.state.Password.length === 0) {
      alert("Username or Password field cannot be empty");
      // checking username and password fields are empty and alerting message
    } else {
      this.props.history.push("/Dashboard"); // Redirecting to dashboard page after succesful login
    }
  };

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem("Username", JSON.stringify(nextState.Username));
  }

  render() {
    return (
      <div className="container1">
        <div className="device-title">
          <p>DEVICE HEALTH MONITORING SYSTEM</p>
        </div>

        <form className="loginForm">
          <h1>
            <span className="title">Login</span>
          </h1>
          <div className="border">
            <FormGroup>
              <Label>
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp;Email Id
              </Label>
              <br />
              <input
                className="input"
                type="email"
                onChange={this.Username}
                placeholder="Email ID"
              />
            </FormGroup>
            <FormGroup>
              <br></br>
              <Label>
                <FontAwesomeIcon icon={faLock} />
                &nbsp;Password
              </Label>
              <br />
              <input
                className="input"
                type="password"
                onChange={this.Password}
                placeholder="Password"
              />
            </FormGroup>

            <Button className="button" onClick={this.Login}>
              Login
            </Button>
            <center>
              <p className="login-copyright">
                {" "}
                &copy;{new Date().getFullYear()} LTTS POC , ALL RIGHTS RESERVED{" "}
              </p>
            </center>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
