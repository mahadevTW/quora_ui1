import Reflux from 'reflux'
import Actions from '../actions/AppActions'

const store = Reflux.createStore({
  listenables: [Actions],
  onGoToHome() {
    console.log("Action came into AppStore...");
    //does some processing ...
    const triggerObj = {
      action: "goToHome",
      data: ""
    };
    this.trigger(triggerObj);
  },

  onUserClick() {
    console.log("User clicked...");
    const triggerObj = {
      action: "userClick",
      data: "Some data.."
    }
    this.trigger(triggerObj)
  }
});

export default store