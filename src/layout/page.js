import React from "react";
import { Spinner, Text } from "../index.js"

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title : document.title}
  }
  componentDidMount() {
    document.title = this.state.title
    if (this.props.title) {
      document.title = this.props.title
    }
  }
  render() {
    if (this.props.hide) return null

    const { children, name, className, loading, footer, title, header, sidebar } = this.props
    let c = "Page"

    if (footer) c += " with-footer"
    if (header) c += " with-header"
    if (sidebar) c += " with-sidebar"
    if (className) c += " "+className
    if (loading) c += " loading"
    if (name) c += " page-"+name

    return (
      <div className={c}>
      {children}
      {header &&
        <header className="page-header">{header}</header>
      }
      {sidebar &&
        <nav className="page-sidebar">{sidebar}</nav>
      }
      {footer &&
        <footer className="page-footer">{footer}</footer>
      }
      {loading &&
        <div className="page-loading">
          <div className="page-loader"></div>
        </div>
      }
      </div>
    );

  }
};

Page.defaultProps = {
  footer: undefined,
  loading: false,
  title: undefined
};

export default Page;
