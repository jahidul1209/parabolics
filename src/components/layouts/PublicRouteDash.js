import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"
import ScrollToTop from "../../fontend/Components/Presentational/ScrollToTopButton";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  const scroll = () => {
    window.scrollTo(0,0)
  }
  return (
    <>
    <Header/>
     <div className="d-flex align-items-stretch">
      <Sidebar/>
      <div className="page-content">     
           <main>{children}</main>
    </div>
    </div>
    <ScrollToTop scrollToTop={scroll}/>
    </>
  );
};
const PublicRouteDash = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};
export default PublicRouteDash;
