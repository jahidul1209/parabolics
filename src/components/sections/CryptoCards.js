import React, { useEffect, useState, useRef  } from 'react';
import { Container ,Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const myStyle={
    backgroundImage: `linear-gradient( 352deg , rgb(24 210 110 / 36%) 0%, rgb(6 9 22 / 67%) 30%), url(image/pngaaa.com-3901018.png)`,
    height:'150px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

function CryptoCards(props) {
     const [rowData, setRowData] = useState([])


        function fetchData(){
            fetch("https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=9f8bf374d13311bf6527af0ea58ebdb6")
            .then(response => response.json())
            .then(results =>  
                 setRowData(results))
            .catch(error => {
                        console.log(error);
                    });
   
         }
        useEffect(() => {
        const interval = setInterval(() => {
            fetchData()
        }, 1000);
        return () => clearInterval(interval);
        }, []);


    return (
        <div>

         <Container fluid className='mt-3'>
            <div className='crypto-market'>
                  <div className='cryto-card'>
                      <Row>
                       <Col xs={6} md={3} className='crtps'>
                           {
                            
                               rowData.map( ( d )=> {      
                                   return(
                                    <Link to = {`/chart/${d.symbol}`}>
                                      {  d.symbol == 'BTCUSD' ? 
                                        <Row className='cry-card' style={myStyle}>                             
                                            <Col xs={6} md={6} >
                                                    <h4>BTC/USD</h4>
                                                    <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                            </Col>
                                            <Col xs={6} md={6} className='crtpos'>
                                                <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                                <p>H {d.dayHigh.toFixed(4)}</p>
                                                <p>L {d.dayLow.toFixed(4)}</p>                                      
                                            </Col>
                                        </Row>
                                        : null
                                     }
                                    </Link>
                                   )           
                               })
                           }
                       
                      </Col>
                      <Col xs={6} md={3} className='crtps'>
                           {
                               rowData.map( ( d )=> {      
                                   return(
                                    <Link to = {`/chart/${d.symbol}`}>
                                    {
                                     d.symbol == 'ETHUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>ETH/USD</h4>
                                                <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                        </Col>
                                        <Col xs={6} md={6} className='crtpos'>
                                            <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                            <p>H {d.dayHigh.toFixed(4)}</p>
                                            <p>L {d.dayLow.toFixed(4)}</p>                                      
                                        </Col>
                                      </Row>
                                    : null
                                }
                                </Link>
                                   )           
                               })
                           }
                       
                      </Col>
                     
                     <Col xs={6} md={3} className='crtps'>
                         {
                               rowData.map( ( d )=> {      
                                   return(
                                    <Link to = {`/chart/${d.symbol}`}>
                                    {
                                     d.symbol == 'LTCUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>LTC/USD</h4>
                                                <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                        </Col>
                                        <Col xs={6} md={6} className='crtpos'>
                                            <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                            <p>H {d.dayHigh.toFixed(4)}</p>
                                            <p>L {d.dayLow.toFixed(4)}</p>                                      
                                        </Col>
                                      </Row>
                                    : null
                                }
                                </Link>
                                   )           
                               })
                           }
                     </Col>
                     <Col xs={6} md={3} className='crtps'>
                     {
                               rowData.map( ( d )=> {      
                                   return(
                                    <Link to = {`/chart/${d.symbol}`}>
                                    {
                                     d.symbol == 'XRPUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>XRP/USD</h4>
                                                <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                        </Col>
                                        <Col xs={6} md={6} className='crtpos'>
                                            <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                            <p>H {d.dayHigh.toFixed(4)}</p>
                                            <p>L {d.dayLow.toFixed(4)}</p>                                      
                                        </Col>
                                      </Row>
                                    : null
                                }
                                </Link>
                                   )           
                               })
                           }
                       </Col>
                      </Row>
                      <Row>
                       <Col xs={6} md={3} className='crtps'>
                           {
                               rowData.map( ( d )=> {      
                                   return(
                                    <Link to = {`/chart/${d.symbol}`}>
                                    {
                                     d.symbol == 'BCHUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>BCH/USD</h4>
                                                <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                        </Col>
                                        <Col xs={6} md={6} className='crtpos'>
                                            <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                            <p>H {d.dayHigh.toFixed(4)}</p>
                                            <p>L {d.dayLow.toFixed(4)}</p>                                      
                                        </Col>
                                      </Row>
                                    : null
                                }
                                </Link>
                                   )           
                               })
                           }
                       
                      </Col>
                      <Col xs={6} md={3} className='crtps'>
                           {
                               rowData.map( ( d )=> {      
                                   return(
                                    <Link to = {`/chart/${d.symbol}`}>
                                    {
                                     d.symbol == 'XYOUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>XYO/USD</h4>
                                                <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                        </Col>
                                        <Col xs={6} md={6} className='crtpos'>
                                            <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                            <p>H {d.dayHigh.toFixed(4)}</p>
                                            <p>L {d.dayLow.toFixed(4)}</p>                                      
                                        </Col>
                                      </Row>
                                    : null
                                }
                                </Link>
                                   )           
                               })
                           }
                       
                      </Col>
                     
                     <Col xs={6} md={3} className='crtps'>
                         {
                               rowData.map( ( d )=> {      
                                   return(
                                    <Link to = {`/chart/${d.symbol}`}>
                                    {
                                     d.symbol == 'CFGUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>CFG/USD</h4>
                                                <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                        </Col>
                                        <Col xs={6} md={6} className='crtpos'>
                                            <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                            <p>H {d.dayHigh.toFixed(4)}</p>
                                            <p>L {d.dayLow.toFixed(4)}</p>                                      
                                        </Col>
                                      </Row>
                                    : null
                                }
                                </Link>
                                   )           
                               })
                           }
                     </Col>
                     <Col xs={6} md={3} className='crtps'>
                     {
                               rowData.map( ( d )=> {      
                                   return(
                                    <Link to = {`/chart/${d.symbol}`}>
                                    {
                                     d.symbol == 'LTOUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>LTO/USD</h4>
                                                <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                        </Col>
                                        <Col xs={6} md={6} className='crtpos'>
                                            <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                            <p>H {d.dayHigh.toFixed(4)}</p>
                                            <p>L {d.dayLow.toFixed(4)}</p>                                      
                                        </Col>
                                      </Row>
                                    : null
                                }
                                </Link>
                                   )           
                               })
                           }
                       </Col>
                      </Row>
                      <Row>
                       <Col xs={6} md={3} className='crtps'>
                           {
                               rowData.map( ( d )=> {      
                                   return(
                                    <Link to = {`/chart/${d.symbol}`}>
                                    {
                                     d.symbol == 'TLMUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>TLM/USD</h4>
                                                <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                        </Col>
                                        <Col xs={6} md={6} className='crtpos'>
                                            <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                            <p>H {d.dayHigh.toFixed(4)}</p>
                                            <p>L {d.dayLow.toFixed(4)}</p>                                      
                                        </Col>
                                      </Row>
                                    : null
                                }
                                </Link>
                                   )           
                               })
                           }
                       
                      </Col>
                      <Col xs={6} md={3} className='crtps'>
                           {
                               rowData.map( ( d )=> {      
                                   return(
                                    <Link to = {`/chart/${d.symbol}`}>
                                    {
                                     d.symbol == 'STRKUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>STRK/USD</h4>
                                                <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                        </Col>
                                        <Col xs={6} md={6} className='crtpos'>
                                            <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                            <p>H {d.dayHigh.toFixed(4)}</p>
                                            <p>L {d.dayLow.toFixed(4)}</p>                                      
                                        </Col>
                                      </Row>
                                    : null
                                }
                                </Link>
                                   )           
                               })
                           }
                       
                      </Col>
                     
                     <Col xs={6} md={3} className='crtps'>
                         {
                               rowData.map( ( d )=> {      
                                   return(
                                    <Link to = {`/chart/${d.symbol}`}>
                                    {
                                     d.symbol == 'GTNUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>GTN/USD</h4>
                                                <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                        </Col>
                                        <Col xs={6} md={6} className='crtpos'>
                                            <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                            <p>H {d.dayHigh.toFixed(4)}</p>
                                            <p>L {d.dayLow.toFixed(4)}</p>                                      
                                        </Col>
                                      </Row>
                                    : null
                                }
                                </Link>
                                   )           
                               })
                           }
                     </Col>
                     <Col xs={6} md={3} className='crtps'>
                     {
                               rowData.map( ( d )=> {      
                                   return(
                                    <Link to = {`/chart/${d.symbol}`}>
                                    {
                                     d.symbol == 'QRKUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>QRK/USD</h4>
                                                <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                        </Col>
                                        <Col xs={6} md={6} className='crtpos'>
                                            <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                            <p>H {d.dayHigh.toFixed(4)}</p>
                                            <p>L {d.dayLow.toFixed(4)}</p>                                      
                                        </Col>
                                      </Row>
                                    : null
                                }
                                </Link>
                                   )           
                               })
                           }
                       </Col>
                      </Row>
                  </div>
            </div>
         </Container>
        
        </div>
    );
}

export default CryptoCards;