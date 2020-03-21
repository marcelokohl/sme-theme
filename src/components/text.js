import React from "react";

const Text = props => {
  const { children, className, tag, title } = props;
  let c = "Text " + (className?className:'');
  const CustomTag = tag;
  return (
    <CustomTag className={c} title={title?title:''}>{children}</CustomTag>
  );
};

Text.defaultProps = {
  tag: 'div'
};

export default Text;
