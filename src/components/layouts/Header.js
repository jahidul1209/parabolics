import React , {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Scroll from '../sections/Scroll';
import SearchList from '../sections/SearchList';
import Marquee from "react-fast-marquee";
import { Logout } from './Logout';
const axios = require('axios');


function Header() {
    const [searchInput, setSearchInput] = useState(''); 
    const [APIData, setAPIData] = useState()
    const [dataActive, setDataActive] = useState()

    // search Option
        var filteredData
        if (searchInput !== '') {
                filteredData = APIData.filter((item) => {
                    return (
                    item.symbol.toLowerCase().includes(searchInput.toLowerCase())
                        // item.symbol.toLowerCase() === searchInput.toLowerCase()
                    );              
                })   
            }
        const  searchList = ()=> {
            return (
            <Scroll>
                <SearchList filteredProduct = {filteredData} />
            </Scroll>
            );
        }


    useEffect(()=>{
        axios.get(`https://financialmodelingprep.com/api/v3/stock-screener?apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
            .then((response) => {
                setAPIData(response.data);
            })
    },[])

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
            .then((response) => {
                setDataActive(response.data);
            })
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
     <div>
      <header className="header">

        <Marquee  pauseOnHover={true} gradient={false} speed={50}> 
        {
                   dataActive &&
                     dataActive.map((d, key) =>{
                            return(
                                    <p key={key}>
                                         <Link to = {`/chart/${d.symbol}`} >
                                                <span style={{marginRight:'10px',marginLeft:'10px',color:'#4a4e54',fontSize: '14px'}}>|</span>
                                                    <span style={{marginRight:'5px',color:'white'}}>
                                                    {d.symbol}
                                                    </span>  
                                                    <span>
                                                        { 
                                                            (d.changesPercentage  > 0 ) ? 
                                                                <span style={{color:'#51ef98' ,fontSize: '13px'}}>+{d.change.toFixed(3)}  {d.changesPercentage.toFixed(3)}% </span> 
                                                                : 
                                                                <span style={{color:'#EE4758',fontSize: '13px'}}>{d.change.toFixed(3)} {(d.changesPercentage.toFixed(3))}% 
                                                            </span>
                                                        }
                                
                                                </span>
                                         </Link>

                                    </p>
                            )
                           
                        })
                    }
        </Marquee>
       <nav className="navbar navbar-expand-lg py-3 bg-dash-dark-2 border-bottom border-dash-dark-1 z-index-10">
        <div className="search-panel">
          <div className="search-inner d-flex align-items-center justify-content-center">
            <div className="close-btn d-flex align-items-center position-absolute top-0 end-0 me-4 mt-2 cursor-pointer"><span> <i className="fas fa-times"></i> Close </span>
            </div>
            <div className="row w-100">
              <div className="col-lg-8 mx-auto">
                <form className="px-4" id="searchForm" action="#">
                <div className="input-group position-relative flex-column flex-lg-row flex-nowrap">
                  
                       <input 
                           type = "search"
                           className="form-control shadow-0 bg-none px-0 w-100"
                           placeholder="Search Stock Market...."
                           value={searchInput}
                           onChange={e => setSearchInput(e.target.value)}
                        /> 
                          
                          {
                            searchInput  ?
                               searchList()
                             : null
                          }
                   <button className="btn btn-link text-gray-400 px-0 text-decoration-none fw-bold cursor-pointer text-center" type="button">Search</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex align-items-center justify-content-between py-1">
          <div className="navbar-header d-flex align-items-center"><a className="navbar-brand text-uppercase text-reset" href="/">
              <div className="brand-text brand-big">
              <img className="me-2" src={process.env.PUBLIC_URL + '/image/logo.png'} alt="img" width={45}/>
                  <strong className="text-primary">para</strong><strong>bolics</strong>
              </div>
              <div className="brand-text brand-sm"><strong className="text-primary">P</strong><strong>B</strong></div></a>
            <button className="sidebar-toggle">
               <span className="svg-icon svg-icon-sm svg-icon-heavy transform-none">
                    <i className="fas fa-arrow-left"></i>
              </span> 
            </button>
          </div>
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
                <Link to = '#'  className="search-open nav-link px-0">
                    <span className="svg-icon svg-icon-xs svg-icon-heavy text-gray-700">
                        <i className="fas fa-search"></i>
                    </span> 
                 </Link>
            </li>
            <li  className="list-inline-item dropdown px-lg-2 pt-2">
                <img src={process.env.PUBLIC_URL + '/image/flags/AU.png'} alt="alt"/>
                <span className="d-none d-sm-inline-block ms-2">English</span>
            </li>
            {/* <!-- Languages dropdown    --> */}
            <li className="list-inline-item dropdown">
                <a href= '#' className="nav-link  text-sm text-reset px-1 px-lg-0" id="languages" rel="nofollow" data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-user-circle" style = {{fontSize:'25px'}}></i>
                </a>
               <ul className="dropdown-menu dropdown-menu-end mt-sm-3 dropdown-menu-dark" aria-labelledby="languages">
                   <div className='profile text-center pt-3 pb-3'>
                       <img className="me-2" src={process.env.PUBLIC_URL + '/image/logo.png'} alt="img"/>
                   </div>
                  <li>
                      <Link to='#' className="dropdown-item" > 
                        <i className="fa fa-gem" style = {{fontSize:'16px' , marginRight:'10px'}}></i>
                        <span>Discord</span>
                      </Link>
                  </li>
                  <li>
                      <Link to = 'watchlists' className="dropdown-item" > 
                         <i className="far fa-address-book" style = {{fontSize:'20px' , marginRight:'10px'}}></i>
                          <span> Watchlist </span>
                      </Link>
                  </li>
                  <li>
                      <Link to = '#' className="dropdown-item" id="logout" onClick={Logout}> 
                      <i className="fas fa-sign-out-alt" style = {{fontSize:'20px' , marginRight:'10px'}}></i>
                          <span>Logout </span>
                      </Link>
                  </li>
              </ul>
            </li>
          </ul>
         </div>
        </nav>
      </header> 
    </div>
    );
}

export default Header;