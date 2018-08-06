import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import NavButton from './NavButton';

class NavBar extends Component {
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
              to="/main"
              className="navlink"
              id="map-button"
              icon="fa fa-map icon-shadow"
              dataIndex="4"
            />
          </ul>
        </div>
      </HashRouter>
    );
  }
}

export default NavBar;
