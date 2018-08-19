import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Button from './Button';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchActive: false
    };

    this.searchHandle = this.searchHandle.bind(this);
    this.closeSearchBar = this.closeSearchBar.bind(this);
  }

  searchHandle(searchTerm) {
    if (!this.state.searchActive) {
      this.setState({ searchActive: true });
      return true;
    } else if (!searchTerm) {
      return false;
    } else {
      console.log('searching ' + searchTerm); //   perform search
    }
  }

  closeSearchBar() {
    if (this.state.searchActive) {
      this.setState({ searchActive: false });
    }
  }

  render() {
    return (
      <div
        className={
          this.props.activeView === 'main'
            ? 'top-wrapper'
            : 'top-wrapper wrapper-hide'
        }
      >
        <div
          className={
            this.state.searchActive
              ? 'header-wrapper wrapper-hide'
              : 'header-wrapper'
          }
          id="header-wrapper"
        >
          <Button
            className={
              this.state.searchActive
                ? 'profile button button-hide'
                : 'profile button'
            }
            id="profile-button"
            icon="fa fa-user icon-shadow"
          />
          <div
            className={
              this.state.searchActive
                ? 'header-title button-hide'
                : 'header-title'
            }
            id="header-title"
          >
            <p className="animate-header">
              531-501 N Catalina Ave, Redondo Beach, CA 90277
            </p>
          </div>
        </div>
        {/* SEARCH BAR */}
        <SearchBar
          searchHandle={this.searchHandle}
          closeSearchBar={this.closeSearchBar}
          searchActive={this.state.searchActive}
        />
        <div className="settings">
          <Button
            className={
              this.state.searchActive
                ? 'search-settings button'
                : 'search-settings button button-hide'
            }
            id="search-settings"
            icon="fa fa-sliders icon-shadow"
          />
          <Button
            className={
              this.state.searchActive
                ? 'main-settings button button-hide'
                : 'main-settings button'
            }
            id="main-settings"
            icon="fa fa-gear icon-shadow"
          />
        </div>
      </div>
    );
  }
}
