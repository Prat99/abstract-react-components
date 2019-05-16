import React, { Component } from "react";
import "./Sidebar.css";

const MENU_ITEM = [
  {
    name: "CRUD",
    path: "/"
  },
  {
    name: "Register",
    path: "/register"
  },
  {
    name: "Auth",
    path: "/auth"
  }
];

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: MENU_ITEM
    };
  }

  openNavHandler = () => {
    this.setState(prevState => {
      return {
        openNav: true
      };
    });
  };

  closeNavHandler = () => {
    this.setState(prevState => {
      return {
        openNav: false
      };
    });
  };

  render() {
  let sideClass = "sidenav";
  const menu = this.state.menu.map(m => {
    return (
      <a href={m.path} className="menu-item">
        {m.name}
      </a>
    );
  });
  sideClass = this.state.openNav ? sideClass + " sidenav-expand" : sideClass;
    return (
      <div>
        <div id="mySidenav" className={sideClass}>
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.closeNavHandler}
          >
            &times;
          </a>
          {menu}
        </div>
        <span className="nav-btn" onClick={this.openNavHandler}>
          &#9776;
        </span>
      </div>
    );
  }
}


