import React from "react";

require('./text.scss');

const Text = props => {
  const { children } = props;
  return (
    <div className="Text">{children}</div>
  );
};

export default Text;
