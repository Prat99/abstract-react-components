import React from "react";
import "./Sidebar.css";

const Sidebar = props => {
  let sideClass = "sidenav";
  const menu = [...props.menu].map(m => {
    return (
      <a href={m.path} className="menu-item">
        {m.name}
      </a>
    );
  });
  sideClass = props.navState ? sideClass + " sidenav-expand" : sideClass;
  return (
    <div id="mySidenav" className={sideClass}>
      <a
        href="javascript:void(0)"
        className="closebtn"
        onClick={() => props.closeNav()}
      >
        &times;
      </a>
      {/* <a href={menu.path} className="menu-item">
        Register
      </a> */}
      {menu}
    </div>
  );
};

export default Sidebar;
