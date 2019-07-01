import React from "react";
// import {withRouter} from 'react-router-dom';
import { Image, Button, Container } from "../../../../_temp/sme-theme/src/index.js"

const Titlebar = props => {
  const { children, className } = props;
  let c = 'Titlebar' + (className?' '+className:'');
  return (
    <nav className={c}>
      {children}
    </nav>
  );
};

export default Titlebar;
