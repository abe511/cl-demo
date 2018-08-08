import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const NavButton = (props) => {
  const { to, className, id, icon, exact, dataIndex } = props;
  return (
    <li className={className} id={id} data-index={dataIndex} draggable="false">
      <NavLink to={to} exact={exact}>
        <Icon className={icon} />
      </NavLink>
    </li>
  );
};

export default NavButton;
