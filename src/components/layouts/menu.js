import React from "react";
import axios from "axios";
import Config from "../../config";

class MenuComponent extends React.Component {
  render() {
    const { mainMenu, topMenu } = this.props;
    return <div className="main-header">Here will be menu</div>;
  }
}

export default MenuComponent;
