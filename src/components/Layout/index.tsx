import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
