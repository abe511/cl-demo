import React, { Component } from 'react';

class Button extends Component {
  state = {
    isOn: false
  };

  render() {
    // console.log(this.state);

    const { className, id, role, type, icon, onClick } = this.props;
    return (
      <button
        className={className}
        id={id}
        role={role}
        type={type}
        onClick={onClick}
      >
        <i className={icon} aria-hidden="true" />
      </button>
    );
    // console.log(this.state);
  }
}

export default Button;
