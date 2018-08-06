import React, { Component } from 'react';
import Button from './Button';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      focus: false
    };

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.clearSearchInputField = this.clearSearchInputField.bind(this);
    this.closeSearchInputField = this.closeSearchInputField.bind(this);
  }

  // records characters typed in the searchbar
  onSearchInputChange(event) {
    event.preventDefault();
    this.setState({ input: event.target.value });
  }

  // sets the search term to empty string and keeps focus on it
  clearSearchInputField(event) {
    event.preventDefault();
    this.setState({ input: '' });
    this.searchInput.focus();
  }

  // clears the search field, unfocuses and closes it
  closeSearchInputField(event) {
    event.preventDefault();
    this.setState({ input: '' });
    this.searchInput.blur();
    this.state.focus = false;
    this.props.closeSearchBar();
  }

  render() {
    let searchInputClassName = 'search-input form-text input-field-border';
    if (!this.props.searchActive) {
      searchInputClassName += ' wrapper-hide';
    }
    if (this.state.input) {
      searchInputClassName += ' search-input-margin';
    }

    return (
      <div className="search-bar">
        <Button
          className={
            this.props.searchActive
              ? 'search-close button'
              : 'search-close button button-hide'
          }
          id="search-close"
          icon="fa fa-arrow-left icon-shadow"
          onClick={(event) => {
            this.closeSearchInputField(event);
          }}
        />
        <form
          className="search-form"
          id="search-form"
          role="search"
          action=""
          method="get"
        >
          <Button
            className="search-button button"
            id="search-button"
            role="button"
            type="submit"
            icon="fa fa-search icon-shadow"
            onClick={(event) => {
              event.preventDefault();
              if (!this.props.searchHandle(this.state.input)) {
                this.searchInput.placeholder = 'Please enter a search term';
              }
              if (!this.state.focus) {
                this.searchInput.focus();
                this.state.focus = true;
              }
            }}
          />
          <div
            className={
              this.props.searchActive
                ? 'search-input-wrapper'
                : 'search-input-wrapper wrapper-hide'
            }
            id="search-input-wrapper"
          >
            {/* remove wrapper-hide */}
            <input
              className={searchInputClassName}
              id="search-input"
              type="search"
              name="q"
              placeholder="Search.."
              autoComplete="on"
              spellCheck="false"
              dir="ltr"
              size="40"
              minLength="1"
              maxLength="111"
              aria-label="Search by name or hashtag"
              value={this.state.input}
              ref={(element) => (this.searchInput = element)}
              onChange={this.onSearchInputChange}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  this.searchInput.blur();
                  console.log('enter searching');
                }
              }}
            />
          </div>
          <Button
            className={
              this.state.input
                ? 'search-clear button'
                : 'search-clear button button-hide'
            }
            id="search-clear"
            type="reset"
            icon="fa fa-times icon-shadow"
            onClick={this.clearSearchInputField}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
