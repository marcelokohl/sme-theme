import React from "react";
import { Grid, Cell, Icon, Template, Text } from "../index.js"

const Alert = props => {
  const { children, className, title, type, iconName } = props;
  let c = "Alert " + (className?className:'');
  let icon = iconName
  if (type) {
    c += " " + type

    if (type === 'error') {
      icon = 'attention-circle-o'
    }
    else if (type === 'success') {
      icon = 'check-circle-o'
    }
  }
  return (

    <div className={c}>
      <Grid>
        <Template condition={icon != undefined}>
          <Cell size={'auto'} className="flex-justify-center flex-column">
            <Icon className="w-full lg" name={icon} />
          </Cell>
        </Template>
        <Cell size={10} className="flex-justify-center flex-column">
          {title &&
            <Text>{title}</Text>
          }
          {children}
        </Cell>
      </Grid>
    </div>
  );
};

Alert.defaultProps = {
  iconName: undefined
}

export default Alert;
