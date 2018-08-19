import React, { Component } from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import '../scss/style.scss';
import Header from './Header';
import NavBar from './NavBar';
import Ads from './views/Ads';
import ViewHeader from './views/ViewHeader';
import Home from './views/Home';
import Messages from './views/Messages';
import NewEvent from './views/NewEvent';
import Friends from './views/Friends';
import Main from './views/Main';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: ''
    };
  }

  render() {
    return (
      <Router>
        <div id="container">
          <div id="top-grid">
            <header>
              <Switch>
                <Route
                  path="/home"
                  render={() => <ViewHeader caption="Home" />}
                />
                <Route
                  path="/messages"
                  render={() => <ViewHeader caption="Messages" />}
                />
                <Route
                  path="/event"
                  render={() => <ViewHeader caption="New Event" />}
                />
                <Route
                  path="/friends"
                  render={() => <ViewHeader caption="Friends" />}
                />
                <Route
                  path="/"
                  render={() => <Header activeView="main" />}
                  exact
                />
              </Switch>
            </header>
          </div>
          {/* VIEWS */}
          <main>
            <div id="top-bar">top bar</div>
            <aside id="left-sidebar">left sidebar</aside>
            <article>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/messages" component={Messages} />
                <Route path="/event" component={NewEvent} />
                <Route path="/friends" component={Friends} />
                <Route path="/" component={Main} exact />
              </Switch>
            </article>
            <aside id="right-sidebar">
              <Ads />
            </aside>
          </main>
          <div id="bottom-grid">
            <footer id="footer">footer</footer>
            <nav id="nav">
              <NavBar />
            </nav>
          </div>
        </div>
      </Router>
    );
  }
}
