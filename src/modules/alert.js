import React from "react";
import { Grid, Cell, Icon, Template, Text } from "../index.js"

const Alert = props => {
  const { children, className, title, iconName } = props;
  let c = "Alert " + (className?className:'');
  return (

    <div className={c}>
      <Grid>
        <Template condition={iconName != undefined}>
          <Cell className="flex-justify-center flex-column">
            <Icon className="w-full lg" name={iconName} />
          </Cell>
        </Template>
        <Cell className="flex-justify-center flex-column">
          <Text>{title}</Text>
          {children}
        </Cell>
      </Grid>
    </div>
  );
};

export default Alert;
