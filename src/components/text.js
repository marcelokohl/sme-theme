import React from "react";

const Text = props => {
  const { children, className, tag } = props;
  let c = "Text " + (className?className:'');
  const CustomTag = tag;
  return (
    <CustomTag className={c}>{children}</CustomTag>
  );
};

Text.defaultProps = {
  tag: 'div'
};

export default Text;
