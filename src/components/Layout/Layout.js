import React from "react";
import Sidebar from "../../container/Sidebar/Sidebar";
import Footer from "../../container/Footer/Footer";

const Layout = props => {
  return (
    <div>      
      <div className="container">
      <Sidebar />
      {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
