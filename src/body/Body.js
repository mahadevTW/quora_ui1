import React from 'react'
import {Row, ProgressBar, Button, Input, Modal} from 'react-materialize'
import AppActions from '../actions/AppActions'

export default class Body extends React.Component {
  constructor() {
    super();
    this.getBody = this.getBody.bind(this);
    this.getLoader = this.getLoader.bind(this);
    this.getLoginPopup = this.getLoginPopup.bind(this);
  }

  componentDidMount() {
    AppActions.loadFeeds();
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
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value;
    AppActions.login(email, pass)
  }

  getLoginPopup() {
    return <div className="body">
      <Modal open={this.props.showLogin}>
        <Row>
          <Input type="email" label="Email" s={12} id="email"/>
          <Input type="password" label="password" s={12} id="pass"/>
        </Row>
        <Row>
          <Button onClick={this.loginClicked}>Login</Button>
        </Row>
      </Modal>
    </div>;
  }

  render() {
    return <div>
      {this.getLoader()}
      {this.getBody()}
      {this.getLoginPopup()}
    </div>
  }
}