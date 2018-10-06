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
  },
  onCloseModal() {
    const triggerObj = {
      action: "closeModal",
    }
    this.trigger(triggerObj)
  },
  onLoadFeeds() {
    const triggerObj = {
      action: "loadFeeds",
      data: []
    }
    console.log("Action received at store...");
    setTimeout(() => {
      this.trigger(triggerObj)
    }, 3000)
  },

  onLogin(email, password) {
    console.log("Logging in for user... ", email, password);

    const triggerObj = {
      action: "login",
      data: {
        success: true,
        user: {
          name: "Mahesh",
          surname: "Vyavahare"
        }
      }
    }
    this.trigger(triggerObj);
  }
});

export default store