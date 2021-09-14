import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";

import Photo from "../../Components/photo/photo";

const Layout = () => {
  return (
    <Router>
      <div className="Layout" id="layout">
        <div className="Layout_Container">
          <Header />
          <Photo />
        </div>
      </div>
    </Router>
  );
};

export default Layout;
