import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Reflux from 'reflux'
import AppStore from './stores/AppStore'
import MyNavbar from './Navbar'
import Body from './body/Body'

const listenermixin = Reflux.ListenerMixin;

class App extends Component {
  constructor() {
    super();
    this.state = {
      showLoader: true,
      showLogin: false,
      isUserLoggedIn: false,
      currentUser: {}

    }
    this.onAppStore = this.onAppStore.bind(this);
    listenermixin.listenTo(AppStore, this.onAppStore)
  }

  onAppStore(triggerObj) {
    if (triggerObj.action === "goToHome") {
      console.log("trigger received at parent component...", triggerObj.data);
    }
    if (triggerObj.action === "userClick") {
      const newState = this.state;
      newState.showLogin = true;
      this.setState(newState)
    }
    if (triggerObj.action === "loadFeeds") {
      const state = this.state
      state.showLoader = false
      this.setState(state);
    }
    if (triggerObj.action === "login") {
      if (triggerObj.data.success === true) {
        alert("Login successful.." + triggerObj.data.user.name);
        console.log(triggerObj.data)
        const newState = this.state;
        newState.showLogin = false;
        newState.isUserLoggedIn = true;
        newState.currentUser = triggerObj.data.user;
        this.setState(newState);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <MyNavbar isUserLoggedIn={this.state.isUserLoggedIn} currentUser={this.state.currentUser}/>
        <Body showLoader={this.state.showLoader} showLogin={this.state.showLogin}/>
      </div>
    );
  }
}

export default App;
