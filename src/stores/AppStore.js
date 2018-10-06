import Reflux from 'reflux'
import Actions from '../actions/AppActions'
import signup from '../services/Signup'

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
    };
    this.trigger(triggerObj);
  },
  onSignup(user) {
    const signUpPromise = signup(user);
    signUpPromise.then((obj) => {
      console.log("Response from network...", obj);
      const triggerObj = {
        action: "signup",
        data: {
          success: true,
        }
      };
      this.trigger(triggerObj);
    }).catch((error) => {
      console.log("Error from network cal..", error);
      const triggerObj = {
        action: "signup",
        data: {
          success: false,
        }
      };
      this.trigger(triggerObj);
    })
  }
});

export default store