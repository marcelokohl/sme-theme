import React from "react";

const Td = props => {
  const { children, className, nowrap, width } = props;
  let c = (typeof children === "string" || nowrap?' nowrap':'');
  let sc = (className?className:'');
  let w = (typeof width === 'number'?width+'%':width);
  // c += (children === " string" || nowrap ? nowrap : "")
//   { typeof children === "string" || nowrap?
//   <span className="nowrap" title={children}>{children}</span> :
// }
  return (
    <td className={c} style={width?{width:w}:{}}>
      <span className={sc}>{children}</span>
    </td>
  );
};

Td.defaultProps = {
  width: false
}

export default Td;
