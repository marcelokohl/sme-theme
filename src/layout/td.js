import React from "react";

const Td = props => {
  const { children, className, nowrap, width } = props;
  let c = (className?className:'') + (nowrap?' nowrap':'');
  let w = (typeof width === 'number'?width+'%':width);
  return (
    <td className={(c?c:false)} style={width?{width:w}:{}}>
    { typeof children === "string" || nowrap?
      <span title={children}>{children}</span> :
      children
    }
    </td>
  );
};

Td.defaultProps = {
  width: false
}

export default Td;
