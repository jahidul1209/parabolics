import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function MarketSummary(props) {

    const [Energy, setEnergy] = useState(); 
    const [BasicMaterials, setBasicMaterials] = useState(); 
    const [Technology, setTechnology] = useState(); 
    const [Healthcare, setHealthcare] = useState(); 
    
    function fetchData(){
    
        fetch("https://financialmodelingprep.com/api/v3/sectors-performance?apikey=9f8bf374d13311bf6527af0ea58ebdb6")
          .then(res => res.json())
          .then(
            (result) => {
                result.map(item => {
                  if(item.sector === "Energy"){
                    setEnergy(item.changesPercentage.slice(0, -1))
                }else if(item.sector === "Technology"){
                    setTechnology(item.changesPercentage.slice(0, -1))
                }else if(item.sector ==="Basic Materials"){
                    setBasicMaterials(item.changesPercentage.slice(0, -1))
                }
                else if(item.sector ==="Healthcare"){
                    setHealthcare(item.changesPercentage.slice(0, -1))
                }
            })
            },
            (error) => {
              console.log(error);
            }
          )
      }

      useEffect(() => {
        const interval = setInterval(() => {
          fetchData()
        }, 1000);
        return () => clearInterval(interval);
      }, []);


    return (<div>

      {/* Stock Market Summary */}
            <Container fluid className='py-4'>
                <Row className="gy-4">
                    <div className="col-md-3 col-sm-6">
                    <div className="card mb-0">
                        <div className="card-body">
                        <div className="d-flex align-items-end justify-content-between">
                            <div className="me-2">
                            <p className="text-uppercase text-gray-400 " style={{fontSize:'14px'}}>MARKET DIRECTION</p>
                            </div>
                        </div>
                        <h3 style={{    marginBottom: '0rem'}}>Energy</h3>
                        <div className='market-sum'>
                            { Energy < 0 ? 
                            <div style={{color:'#fc6780'}}>{Energy}%<i class="fas fa-arrow-down" style={{color:'#fc6780' , fontSize: '14px'}}></i></div>
                                :
                                <div style={{color:'#51ef98'}}>{Energy}% <i class="fas fa-arrow-up" style={{color:'#51ef98', fontSize: '14px'}}></i></div> 
                                }
                        </div>

                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="card mb-0">
                        <div className="card-body">
                        <div className="d-flex align-items-end justify-content-between ">
                            <div className="me-2">
                            <p className="text-uppercase text-gray-400" style={{fontSize:'14px'}}>LEADER INDEX</p>
                            </div>
                        </div>
                        <h3 style={{    marginBottom: '0rem'}}>Technology</h3>
                        <div className='market-sum'>
                            { Technology < 0 ? 
                            <div style={{color:'#fc6780'}}>{Technology}% <i class="fas fa-arrow-down" style={{color:'#fc6780' , fontSize: '14px'}}></i></div>
                                :
                                <div style={{color:'#51ef98'}}>{Technology}% <i class="fas fa-arrow-up" style={{color:'#51ef98', fontSize: '14px'}}></i></div> 
                                }
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="card mb-0">
                        <div className="card-body">
                        <div className="d-flex align-items-end justify-content-between">
                            <div className="me-2">
                            <p className="text-uppercase text-gray-400" style={{fontSize:'14px'}}>MARKET MOMENTUM </p>
                            </div>
                        </div>
                        <h3 style={{ marginBottom: '0rem'}}> Basic Materials </h3>
                        <div className='market-sum'>
                            { BasicMaterials < 0 ? 
                            <div style={{color:'#fc6780'}}>{BasicMaterials}% <i class="fas fa-arrow-down" style={{color:'#fc6780' , fontSize: '14px'}}></i></div>
                                :
                                <div style={{color:'#51ef98'}}>{BasicMaterials}% <i class="fas fa-arrow-up" style={{color:'#51ef98', fontSize: '14px'}}></i></div> 
                                }
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="card mb-0">
                        <div className="card-body">
                        <div className="d-flex align-items-end justify-content-between">
                            <div className="me-2">
                                <p className="text-uppercase text-gray-400" style={{fontSize:'14px'}}>HOTTEST SECTOR</p>
                            </div>
                        </div>
                        <h3 style={{    marginBottom: '0rem'}}>Healthcare</h3>
                        <div className='market-sum'>
                            { Healthcare < 0 ? 
                            <div style={{color:'#fc6780'}}>{Healthcare}% <i class="fas fa-arrow-down" style={{color:'#fc6780' , fontSize: '14px'}}></i></div>
                                :
                                <div style={{color:'#51ef98'}}>{Healthcare}% <i class="fas fa-arrow-up" style={{color:'#51ef98', fontSize: '14px'}}></i></div> 
                                }
                        </div>
                        </div>
                    </div>
                    </div>
                </Row>
              </Container> 
        </div>
    );
}

export default MarketSummary;