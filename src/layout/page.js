import React from "react";
// import { Container } from "../index.js"

const Page = props => {
  const { children, name, className, loading, footer } = props;
  let c = "Page page-" + name + " " + (className?className:'');
  if (footer) {
    c += " footer"
  }
  if (loading) {
    c += " loading"
  }
  return (
    <div className={c}>
    {children}
    <footer className="page-footer">{footer}</footer>
    </div>
  );
};

Page.defaultProps = {
  footer: undefined
};

export default Page;
