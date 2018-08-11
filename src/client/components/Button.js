import React from 'react';

const Button = ({ className, id, role, type, icon, onClick }) => {
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
