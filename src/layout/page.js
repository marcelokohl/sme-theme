import React from "react";

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

    const { children, name, className, loading, footer, title } = this.props
    let c = "Page"

    if (footer) c += " footer"
    if (className) c += " "+className
    if (loading) c += " loading"
    if (name) c += " page-"+name

    return (
      <div className={c}>
      {children}
      {footer &&
        <footer className="page-footer">{footer}</footer>
      }
      </div>
    );

  }
};

Page.defaultProps = {
  footer: undefined,
  title: undefined
};

export default Page;
