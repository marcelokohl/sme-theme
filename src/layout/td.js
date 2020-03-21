import React from "react";
import { Text } from "../index.js"

const Td = props => {
  const { children, className, width, size, nowarp } = props;
  let w = (typeof width === 'number'?width+'%':width);
  let c = null;
  if (size) {
    c = 'size-'+size;
  }

  return (
    <td className={c} style={width?{width:w}:{}}>
      <span className={(className?className:null)}>
      {
        React.Children.map(children, (child, i) => {
          if(typeof child === "string" && nowarp) {
            return (<Text className="ellipsis" key={i} title={child}>{child}</Text>)
          } else {
            return (child)
          }
        })
      }
      </span>
    </td>
  );
};

Td.defaultProps = {
  width: null,
  nowarp: false,
  size: null
}

export default Td;
