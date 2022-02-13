import React, { useEffect, useState  } from 'react';
import { Container ,Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const myStyle={
    backgroundImage: `linear-gradient( 352deg , rgb(24 210 110 / 36%) 0%, rgb(6 9 22 / 67%) 30%), url(image/pngaaa.com-3901018.png)`,
    height:'150px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

function ForexCards(props) {
     const [rowData, setRowData] = useState([])


        function fetchData() {
            fetch("https://financialmodelingprep.com/api/v3/quotes/forex?apikey=9f8bf374d13311bf6527af0ea58ebdb6")
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
                                      {   
                                     d.symbol === "JPYUSD" ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>JPY/USD</h4>
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
                                     d.symbol === 'SGDTHB' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>SGD/THB</h4>
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
                                     d.symbol === 'MDLUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>MDL/USD</h4>
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
                                     d.symbol === 'KRWCAD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>KRW/CAD</h4>
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
                                     d.symbol === 'IDRUSD' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>IDR/USD</h4>
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
                                     d.symbol === 'USDNGN' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>USD/NGN</h4>
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
                                     d.symbol === 'AUDPHP' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>AUD/PHP</h4>
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
                                     d.symbol === 'SEKDKK' ? 
                                     <Row className='cry-card' style={myStyle}>                             
                                        <Col xs={6} md={6} >
                                                <h4>SEK/DKK</h4>
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

export default ForexCards;






