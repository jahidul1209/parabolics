import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logout } from './Logout';


function Sidebar() {

    return (
        <div>
        {/* <!-- Sidebar Navigation--> */}
        <nav id="sidebar">
            {/* <!-- Sidebar Header--> */}
            <div className="sidebar-header d-flex align-items-center p-4"><img className="avatar shadow-0 img-fluid rounded-circle" src="https://toppng.com/uploads/preview/male-user-filled-icon-man-icon-115533970576b3erfsss1.png" alt="..."/>
            <div className="ms-3 title">
                <h1 className="h5 mb-1">Mark Stephen</h1>
                <p className="text-sm text-gray-700 mb-0 lh-1">Web Designer</p>
            </div>
         </div>
        <span className="text-uppercase text-gray-400 text-xs mx-3 px-2 heading title mb-2"><span>MARKET DASHBOARD</span></span>
         <ul className="list-unstyled">
              <li className="sidebar-item">
                      <NavLink  to = '/stock' className="sidebar-link"> 
                        <span className="svg-icon svg-icon-sm svg-icon-heavy">
                                <i className="fas fa-home"></i>
                        </span>
                        <span>Stocks </span>
                      </NavLink>
              </li>
              <li className="sidebar-item ">
                      <NavLink  to = '/news' className="sidebar-link"> 
                        <span className="svg-icon svg-icon-sm svg-icon-heavy">
                                <i className="fas fa-newspaper"></i>
                        </span>
                        <span>News </span>
                      </NavLink>
              </li>
              <li className="sidebar-item ">
                  <NavLink  to = '/screener'className="sidebar-link"> 
                                <span className="svg-icon svg-icon-sm svg-icon-heavy">
                                        <i className="fas fa-tablet-alt"></i>
                                </span>
                                <span>Screener </span> 
                   </NavLink>
               </li>
               <li className="sidebar-item ">
                  <NavLink  to = '/heatmap'className="sidebar-link"> 
                                <span className="svg-icon svg-icon-sm svg-icon-heavy">
                                        <i className="fas fa-map"></i>
                                </span>
                                <span>HeatMap </span> 
                   </NavLink>
               </li>
              <li className="sidebar-item">
                  <NavLink  to = '/crypto'className="sidebar-link"> 
                        <span className="svg-icon svg-icon-sm svg-icon-heavy">
                                <i class="fab fa-bitcoin"></i>
                        </span>
                      <span>Crypto </span>
                   </NavLink>
              </li>
              <li className="sidebar-item">
                 <NavLink  to = '/forex'className="sidebar-link"> 
                      <span className="svg-icon svg-icon-sm svg-icon-heavy">
                           <i className="fas fa-funnel-dollar"></i>
                      </span>
                      <span>Forex </span> 
                  </NavLink>
              </li>
              <li className="sidebar-item">
                 <NavLink  to = '/insider'className="sidebar-link"> 
                      <span className="svg-icon svg-icon-sm svg-icon-heavy">
                                 <i class="fab fa-app-store-ios"></i>
                       </span>
                      <span>Insider </span> 
                  </NavLink>
              </li>
              <li className="sidebar-item">
                 <NavLink  to = '/watchlists'className="sidebar-link"> 
                      <span className="svg-icon svg-icon-sm svg-icon-heavy">
                                 <i class="fab fa-asymmetrik"></i>
                       </span>
                      <span>Watchlists </span> 
                  </NavLink>
              </li>
              <li className="sidebar-item">
                 <NavLink  to = '/portfolio'className="sidebar-link"> 
                      <span className="svg-icon svg-icon-sm svg-icon-heavy">
                              <i class="fas fa-portrait"></i>
                       </span>
                      <span>Portfolio </span> 
                  </NavLink>
              </li>
              <li className="sidebar-item">
                 <NavLink  to = '/Reddit'className="sidebar-link"> 
                      <span className="svg-icon svg-icon-sm svg-icon-heavy">
                            <i class="fab fa-accusoft"></i>
                       </span>
                      <span>Reddit </span> 
                  </NavLink>
              </li>
              <li className="sidebar-item">
                 <NavLink  to = '/livetrade'className="sidebar-link"> 
                      <span className="svg-icon svg-icon-sm svg-icon-heavy">
                             <i class="fab fa-artstation"></i>
                       </span>
                      <span>Live Trade </span> 
                  </NavLink>
              </li>
        </ul>

        <ul className="list-unstyled"> 
              <li className="sidebar-item logoutlay">
                  <a className="sidebar-link"  onClick={ Logout }> 
                      <span className="svg-icon svg-icon-sm svg-icon-heavy">
                          <i className="fas fa-sign-out-alt"></i>
                      </span>
                      <span >Logout </span></a>
              </li>
        </ul>

      </nav>
    </div>
  );
}

export default Sidebar;