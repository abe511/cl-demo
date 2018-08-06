import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import '../scss/style.scss';
import Header from './Header';
import NavBar from './NavBar';
import Home from './views/Home';
import Messages from './views/Messages';
import NewEvent from './views/NewEvent';
import Friends from './views/Friends';
import Main from './views/Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null
    };
  }

  render() {
    return (
      <div>
        <div id="container">
          <header id="header">
            <Header />
          </header>
          <div id="top-bar">top bar</div>
          {/* VIEWS */}
          <aside id="sidebar">sidebar</aside>
          <article id="content">
            <main>
              main content
              <HashRouter>
                <div>
                  <Route path="/home" component={Home} />
                  <Route path="/messages" component={Messages} />
                  <Route path="/event" component={NewEvent} />
                  <Route path="/friends" component={Friends} />
                  <Route path="/main" component={Main} />
                </div>
              </HashRouter>
              <section className="section" />
              <section className="section" />
              <section className="section" />
            </main>
          </article>

          <aside id="ads">ads</aside>

          <nav id="nav">
            <NavBar />
          </nav>
          <footer id="footer">footer</footer>
        </div>
      </div>
    );
  }
}

export default App;
