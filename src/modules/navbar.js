import React from "react";
import {withRouter} from 'react-router-dom';

const Navbar = props => {
  const { children, className } = props;
  let c = "Navbar" + (className?' '+className:'');
  return (
    <nav className={c}>{children}</nav>
  );
};

export default Navbar;
