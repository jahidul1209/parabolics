import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
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
      <div class="page-content">     
           <main>{children}</main>
    <Footer/>
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
