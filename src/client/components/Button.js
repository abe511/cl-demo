import React from 'react';

const Button = (props) => {
  const { className, id, role, type, icon, onClick } = props;
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
};

export default Button;
