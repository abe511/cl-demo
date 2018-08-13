import React, { Component } from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import '../scss/style.scss';
import Header from './Header';
import NavBar from './NavBar';
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
          <header id="header">
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
          <div id="top-bar">top bar</div>
          {/* VIEWS */}
          <aside id="sidebar">sidebar</aside>
          <main id="content">
            <article>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/messages" component={Messages} />
                <Route path="/event" component={NewEvent} />
                <Route path="/friends" component={Friends} />
                <Route path="/" component={Main} exact />
              </Switch>
            </article>
          </main>

          <aside id="ads">ads</aside>

          <nav id="nav">
            <NavBar />
          </nav>
          <footer id="footer">footer</footer>
        </div>
      </Router>
    );
  }
}
