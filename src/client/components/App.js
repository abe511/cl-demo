import React, { Component } from 'react';
import '../scss/style.scss';
import Header from './Header';
import Button from './Button';

const styles = {
  app: {
    // paddingTop: 40,
    // textAlign: "center"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    searchOn: false
  };

  // searchOn = this.state.searchOn;

  render() {
    let searchOn = this.state.searchOn;
    // console.log(this.state);
    // console.log(this.handleClick);
    return (
      <div style={styles.app}>
        {/* <div id="map" /> */}
        <div id="container">
          {/* <Header search={this.handleClick} searchOn={searchOn} /> */}
          <Header />
          <div id="top-bar">top bar</div>

          <aside id="sidebar">sidebar</aside>

          <article id="content">
            main content
            {/* <Icon image="11" /> */}
            <section className="section" />
            <section className="section" />
            <section className="section" />
          </article>

          <aside id="ads">ads</aside>

          <nav id="nav">
            {/* BOTTOM NAVIGATION BAR */}

            <hr id="navbar-slider" />
            <div id="navbar">
              <a href="#home" id="home-button" data-index="0" draggable="false">
                <i className="fa fa-home icon-shadow" aria-hidden="true" />
              </a>
              <a
                href="#messages"
                id="messages-button"
                data-index="1"
                draggable="false"
              >
                <i className="fa fa-comments icon-shadow" aria-hidden="true" />
              </a>
              <a
                href="#events"
                id="events-button"
                data-index="2"
                draggable="false"
              >
                <i className="fa fa-plus icon-shadow" aria-hidden="true" />
              </a>
              <a
                href="#friends"
                id="friends-button"
                data-index="3"
                draggable="false"
              >
                <i className="fa fa-users icon-shadow" aria-hidden="true" />
              </a>
              <a href="#map" id="map-button" data-index="4" draggable="false">
                <i className="fa fa-map icon-shadow" aria-hidden="true" />
              </a>
            </div>
          </nav>
          <footer id="footer">footer</footer>
          {/* <div className="content active">NEW PAGE</div> */}
        </div>

        {/* VIEWS */}

        <main>
          <div className="view active" id="search-settings-page">
            <div className="view-header-wrap">
              <a href="#" data-target="#map" className="back">
                <i className="fas fa-arrow-left" />
              </a>
              <h1>Search Settings</h1>
            </div>
            <div className="view-body-wrap">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                recusandae?
              </div>
            </div>
          </div>
          <div className="view" id="search-results">
            <h1>Search Results</h1>
            <a href="#" data-target="#map" className="back">
              Back
            </a>
          </div>
          <div className="view" id="home-page">
            <h1>Home</h1>
            <a href="#" data-target="#map" className="back">
              Back
            </a>
          </div>
          <div className="view" id="messages-page">
            <h1>Messages</h1>
            <a href="#" data-target="#map" className="back">
              Back
            </a>
          </div>
          <div className="view" id="friends-page">
            <h1>Friends</h1>
            <a href="#" data-target="#map" className="back">
              Back
            </a>
          </div>
          <div className="view" id="events-page">
            <h1>Events</h1>
            <a href="#" data-target="#map" className="back">
              Back
            </a>
          </div>
          <div className="view">
            <h1>Map</h1>
            <a href="#" data-target="#map" className="back">
              Back
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
