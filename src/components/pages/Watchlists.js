import React , {useEffect, useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Watchlists(props) {
    const [searchInput, setSearchInput] = useState(''); 
    const [APIData, setAPIData] = useState()
    const [watchlist, setWatchlist] = useState('0')
    const [storeData, setStoreData] = useState([])
    const [count, setCount] = useState('0')
    const [inExits, setinExits] = useState('0')
    const [maxValue, setMaxValue] = useState('0')
    const [minValue, setMinValue] = useState('0')

    function handleSearch(e) {
        e.preventDefault();
        setSearchInput(searchInput)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return (
                    item.symbol.toLowerCase() === searchInput.toLowerCase()
                  );              
            })

  
                for(var i = 0 ; i  < storeData.length ; i++){
                       if(storeData[i].symbol === searchInput){
                                return  inExits + 1    
                            }
                            setinExits (inExits)
                      }

              const maxChange =  Math.max.apply(Math, storeData.map(function(o) { return o.beta; }))
              const minChange =  Math.min.apply(Math, storeData.map(function(o) { return o.beta; }))

                    for(var k = 0 ; k  < storeData.length ; k++){
                        if(storeData[k].beta === maxChange){
                                  setMaxValue(storeData[k].symbol);
                        }

                        if(storeData[k].beta === minChange){
                              setMinValue(storeData[k].symbol)
                        }
                    }

                 if(inExits || localStorage.getItem("defaultWatch") == null){
                    let cart = JSON.parse(localStorage.getItem('defaultWatch'));
                    if(cart){
                        const arr =  Object.assign({}, ...filteredData)
                        cart.push(arr);
                        localStorage.setItem("defaultWatch", JSON.stringify(cart));    
                    }else{
                        localStorage.setItem("defaultWatch", JSON.stringify(filteredData));    
                    }
                 }
            }   
            }

     function  removeSelectedWatchlist() {
        localStorage.removeItem("defaultWatch");
        window.location.reload()
      }
      function  removeSingleItem(name) {  
            const products = storeData.filter(product => product.symbol !== name);
            localStorage.setItem("defaultWatch", JSON.stringify(products));
        }

        function fetchData(){
          axios.get(`https://financialmodelingprep.com/api/v3/stock-screener?apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
              .then((response) => {
                  setAPIData(response.data);
              })

              if ( (localStorage.getItem("defaultWatch"))) {
                 const storageValue = localStorage.getItem("defaultWatch")
                 var jsonV = JSON.parse(storageValue)
                  setCount(jsonV.length);
                  setStoreData(JSON.parse(storageValue)) 
              }
              setWatchlist(localStorage.length - 2)
       }
       
       useEffect(() => {
        const interval = setInterval(() => {
          fetchData()
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <>
               <div className="bg-dash-dark-2 py-4">
                    <div className="container-fluid">
                    <h2 className="h5 mb-0">Your Watchlists</h2>
                </div>
            </div>
            <Container fluid className='mt-3'>
                <Row >
                    <Col sm={6} md={6} className='rre'>
                        {/* <select   className='screen-btn2' >
                            <option>Select Watchlists</option>
                            <option value="1">Default</option>
                        </select> */}
                    <span > Current Watchlist: Default</span>
                    </Col>
                    <Col sm={6} md={6}>
                    <div class="mb-1 mr-5 trtr">
                        <button className="btn btn-danger p-2" type="button"  onClick={removeSelectedWatchlist}>
                            Remove Selected Watchlist
                        </button>

                        {/* <button className="btn btn-success p-2 mx-2"   data-bs-toggle="modal" data-bs-target="#watchlists" >
                          Create a new watchlist
                        </button> */}
                     </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='mt-3'>
                <Row className="gy-4">
                    <div className="col-md-3 col-sm-6">
                        <div className="card mb-0">
                            <div className="card-body">
                                <div className="d-flex align-items-end justify-content-between">
                                    <div className="me-2">
                                    <p className="text-uppercase text-gray-400 " style={{fontSize:'14px'}}>TOTAL WATCHLISTS</p>
                                    </div>
                                </div>
                                <h3 style={{ marginBottom: '0rem'}}>{watchlist}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="card mb-0">
                        <div className="card-body">
                        <div className="d-flex align-items-end justify-content-between ">
                            <div className="me-2">
                            <p className="text-uppercase text-gray-400" style={{fontSize:'14px'}}>TOTAL STOCKS</p>
                            </div>
                        </div>
                           <h3 style={{  marginBottom: '0rem'}}>{count}</h3>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="card mb-0">
                        <div className="card-body">
                        <div className="d-flex align-items-end justify-content-between">
                            <div className="me-2">
                            <p className="text-uppercase text-gray-400" style={{fontSize:'14px'}}>HIGHEST CHANGE</p>
                            </div>
                        </div>
                        <h3 style={{ marginBottom: '0rem'}}>{maxValue}</h3>

                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="card mb-0">
                        <div className="card-body">
                        <div className="d-flex align-items-end justify-content-between">
                            <div className="me-2">
                                <p className="text-uppercase text-gray-400" style={{fontSize:'14px'}}> LOWEST CHANGE </p>
                            </div>
                        </div>
                        <h3 style={{    marginBottom: '0rem'}}>{minValue}</h3>

                        </div>
                    </div>
                    </div>
                </Row>
              </Container> 

              <Container  fluid className='mt-5'>
                    <div className="input-group">
                    <input
                        className="form-control"
                        type="text"
                        name="searchInput"
                        placeholder="Search  Stocks"
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                    />                         
                        <div className="input-group-append">
                            <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Add </button>  
                        </div>
                    </div>
                   <div className='mt-3'>
                          <h3>WATCHLIST OVERVIEW</h3>
                          <p>An overview of the stocks in your watchlist along with their daily move.</p>
                   </div>
                   <div className='watchlist mt-3'>
                        {
                          storeData.map((item , key) => {
                                    return (
                                         <div className='ws-card'  key={key}>
                                               <div class = 'lcose'>
                                                  <h4>{item.symbol}</h4>
                                                  <button className="btnClass" value = {item.symbol} type="button"  onClick= {(e) => removeSingleItem(e.target.value)} >✖ </button>  
                                               
                                               </div>
                                                <div className='stockws'>
                                                        <p>{item.price}</p>
                                                        <p>{item.beta}%</p>
                                                </div>
                                                <div className='stockws'>
                                                <Link to = {`/chart/${item.symbol}`} class="btn btn-sm btn-outline-light"> Stocks </Link>
                                                    <button type="button" class="btn btn-sm btn-outline-light">Options</button>      
                                                </div>
                                        </div> 
                            )  
                        })
                      
                        } 
                </div>
            </Container>

            {/* <div className="modal fade" id="watchlists" tabindex="-1" aria-labelledby="watchlistsModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="watchlistsModalLabel">Add Watchlists</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="modal-body">
                            <input type = 'text' className='form-control' onChange={(e)=>setValWatch(e.target.value)}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                    </div>
                </div>
          </div> */}
       </>
    );
 }

export default Watchlists;