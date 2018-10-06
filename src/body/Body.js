import React from 'react'
import {Row, ProgressBar, Button, Input, Modal, Icon, T, Tabs, Tab} from 'react-materialize'
import AppActions from '../actions/AppActions'

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      popupError: {
        show: false,
        message: "",
      }
    };
    this.getBody = this.getBody.bind(this);
    this.getLoader = this.getLoader.bind(this);
    this.getUserPopup = this.getUserPopup.bind(this);
    this.getErrorMessage = this.getErrorMessage.bind(this);
    this.signUpClicked = this.signUpClicked.bind(this);
  }

  componentDidMount() {
    // AppActions.loadFeeds();
  }

  getBody() {
    if (!this.props.showLoader) {
      return <div className="body">
        Hello Body..
      </div>
    } else {
      return null
    }
  }

  getLoader() {
    if (this.props.showLoader) {
      return <div className="body">
        <Row>
          <ProgressBar/>
        </Row>
      </div>
    }
  }

  loginClicked() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    AppActions.login(email, pass)
  }

  getErrorMessage() {
    const error = this.state.popupError;
    if (error.show) {
      return <font color="red">{this.state.popupError.message}!</font>
    } else {
      return null
    }
  }

  signUpClicked() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const maleGender = document.getElementById("male").checked;
    const gender = maleGender ? "male" : "female";
    if (password !== confirmPassword) {
      const state = this.state;
      state.popupError.show = true;
      state.popupError.message = "Password and Confirm password does not match";
      this.setState(state);
      return;
    }
    const user = {
      username,
      password,
      firstName,
      lastName,
      gender,
    };
    AppActions.signup(user)

  }

  onModalClose() {
    AppActions.closeModal()
  }

  getUserPopup() {
    return <div className="body">
      <Modal open={this.props.showLogin}
             actions={
               <div>
                 <Button waves="light" className="red darken-2" onClick={this.onModalClose}>Close</Button>
               </div>
             }>
        {
          this.getErrorMessage()
        }
        <Tabs className='tab-demo z-depth-1'>
          <Tab title="Login" active>
            <Row>
              <Input type="email" label="Email" s={12} id="email"/>
              <Input type="password" label="password" s={12} id="pass"/>
            </Row>
            <Row>
              <Button onClick={this.loginClicked}>Login</Button>
            </Row>
          </Tab>
          <Tab title="Sign Up">
            <Row>
              <Input type="text" label="Username" s={12} id="username"/>
              <Input type="text" label="password" s={12} id="password"/>
              <Input type="text" label="confirm_password" s={12} id="confirm_password"/>
              <Input type="text" label="First name" s={12} id="first_name"/>
              <Input type="text" label="Last Name" s={12} id="last_name"/>
              <Input type="radio" name="gender" id="male" label="Male"/>
              <Input type="radio" name="gender" id="female" label="Female" checked/>
            </Row>
            <Row>
              <Button onClick={this.signUpClicked}>Sign Up</Button>
            </Row>
          </Tab>
        </Tabs>
      </Modal>
    </div>;
  }

  render() {
    return <div>
      {this.getLoader()}
      {this.getBody()}
      {this.getUserPopup()}
    </div>
  }
}