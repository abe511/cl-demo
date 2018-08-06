import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const NavButton = (props) => {
  const { to, className, id, icon, dataIndex } = props;
  return (
    <li className={className} id={id} data-index={dataIndex} draggable="false">
      <NavLink to={to}>
        <Icon className={icon} />
      </NavLink>
    </li>
  );
};

export default NavButton;
