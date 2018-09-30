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
      showLoader: true
    }
      this.onAppStore = this.onAppStore.bind(this);
    listenermixin.listenTo(AppStore, this.onAppStore)
  }

  onAppStore(triggerObj) {
    if (triggerObj.action === "goToHome") {
      console.log("trigger received at parent component...", triggerObj.data);
    }
    if (triggerObj.action === "userClick") {
      console.log("User clicked...");
    }
    if (triggerObj.action === "loadFeeds") {
      //feeds has been loaded..
      const state = this.state
      state.showLoader = false
      this.setState(state);
    }
  }

  render() {
    return (
      <div className="App">
        <MyNavbar/>
        <Body showLoader={this.state.showLoader}/>
      </div>
    );
  }
}

export default App;
