import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import NavButton from './NavButton';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  render() {
    return (
      <HashRouter>
        <div id="navbar">
          <ul>
            <NavButton
              to="/home"
              className="navlink"
              id="home-button"
              icon="fa fa-home icon-shadow"
              dataIndex="0"
              onClick={this.changeView}
            />
            <NavButton
              to="/messages"
              className="navlink"
              id="messages-button"
              icon="fa fa-comments icon-shadow"
              dataIndex="1"
            />
            <NavButton
              to="/event"
              className="navlink"
              id="event-button"
              icon="fa fa-plus icon-shadow"
              dataIndex="2"
            />
            <NavButton
              to="/friends"
              className="navlink"
              id="friends-button"
              icon="fa fa-users icon-shadow"
              dataIndex="3"
            />
            <NavButton
              to="/"
              className="navlink"
              id="map-button"
              icon="fa fa-map icon-shadow"
              exact
              dataIndex="4"
            />
          </ul>
        </div>
      </HashRouter>
    );
  }
}
