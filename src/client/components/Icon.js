import React, { Component } from 'react';

class Icon extends Component {
  render() {
    console.log(this.props);

    const { image } = this.props;
    const filename = {require('../../img/' + image + '.png')};
    // console.log(filename);
    return
   ( <img
      src={filename}
      alt="blabla"
      style={{ width: '50px', height: '50px' }}
    />);
  }
}

export default Icon;
