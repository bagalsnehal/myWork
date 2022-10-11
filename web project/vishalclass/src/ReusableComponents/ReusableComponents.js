import React    from "react";
import template from "./ReusableComponents.jsx";

class ReusableComponents extends React.Component {
  render() {
    return template.call(this);
  }
}

export default ReusableComponents;
