import React from 'react'
import {Navbar, NavItem, Icon} from 'react-materialize'
import AppActions from './actions/AppActions'

export default class MyNavbar extends React.Component {
  onHomeCLicked() {
    console.log("Hello clicked on search....");
    AppActions.goToHome();
  }

  accountClicked() {
    AppActions.userClick();
  }

  render() {
    return <div>
      <Navbar brand='Mutex Quora' right>
        <NavItem onClick={this.onHomeCLicked}><Icon>home</Icon></NavItem>
        <NavItem onClick={this.accountClicked}><Icon>account_circle</Icon></NavItem>
    </Navbar>
  </div>
  }
}