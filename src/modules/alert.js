import React from "react";
import { Grid, Cell, Icon, Template, Title } from "../../../../_temp/sme-theme/src/index.js"

const Alert = props => {
  const { children, className, title, iconName } = props;
  let c = "Alert " + (className?className:'');
  return (

    <div className={c}>
      <Grid>
        <Template condition={iconName != undefined}>
          <Cell className="flex-justify-center flex-column">
            <Icon className="w-full white lg" name={iconName} />
          </Cell>
        </Template>
        <Cell className="flex-justify-center flex-column">
          <Title>{title}</Title>
          {children}
        </Cell>
      </Grid>
    </div>
  );
};

export default Alert;
