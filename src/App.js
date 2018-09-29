import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Reflux from 'reflux'
import AppStore from './stores/AppStore'
import MyNavbar from './Navbar'

const listenermixin = Reflux.ListenerMixin;

class App extends Component {
  constructor() {
    super();
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
  }

  render() {
    return (
      <div className="App">
        <MyNavbar/>
      </div>
    );
  }
}

export default App;
