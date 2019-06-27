import React from "react";
import { Grid } from "../../../../_temp/sme-theme/src/index.js"

require('./card.scss');

const Card = props => {
  const { children, className } = props;
  let c = "Card " + (className?className:'');
  return (
    <div className={c}>
      <Grid>
        {children}
      </Grid>
    </div>
  );
};

export default Card;
