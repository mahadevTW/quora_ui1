import React from 'react'
import {Row, ProgressBar} from 'react-materialize'
import AppActions from '../actions/AppActions'

export default class Body extends React.Component {
  componentDidMount() {
    AppActions.loadFeeds();
  }

  render() {
    if (this.props.showLoader === true) {
      return <div className="body">
        <Row>
          <ProgressBar/>
        </Row>
      </div>
    }
    return <div className="body">
      Hello Body..
    </div>
  }
}