import React from 'react';
import Button from '../Button';

const Home = () => {
  return (
    <div className="header">
      <Button
        className="home-close button"
        id="home-close"
        icon="fa fa-arrow-left icon-shadow"
        onClick={() => {
          console.log('home closed');
        }}
      />
    </div>
  );
};

export default Home;
