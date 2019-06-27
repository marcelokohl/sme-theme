import React from "react";

require('./page.scss');

const Page = props => {
  const { children, name, className, loading } = props;
  let c = "Page page-" + name + " " + (className?className:'');
  return (
    <div className={c}>
    {children}
    </div>
  );
};

export default Page;
