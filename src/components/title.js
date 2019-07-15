import React from "react";

const Title = props => {
  const { children, className, tag } = props;
  let c = "Title " + (className?className:'');
  const CustomTag = tag;
  return (
    <CustomTag className={c}>{children}</CustomTag>
  );
};

Title.defaultProps = {
  tag: 'div'
};

export default Title;
