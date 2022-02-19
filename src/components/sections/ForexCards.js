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


        rowData.sort(function (a, b) {
             return b.price - a.price;
        });

    return (
        <div>

         <Container fluid className='mt-3'>
            <div className='crypto-market'>
                  <div className='cryto-card'>
                  {         
                         rowData.map( ( d , key)=> { 

                            return(
                              key < 12 &&
                                 <Link to = {`/chart/${d.symbol}`}>
                                     <Row className='cry-card' style={myStyle}>                             
                                         <Col xs={6} md={6} >
                                                 <h4 style={{fontSize: '20px'}}>{d.symbol}</h4>
                                                 <h2 style= {{color:'#18d26e'}} >{d.price.toFixed(3)}</h2>
                                         </Col>
                                         <Col xs={6} md={6} className='crtpos'>
                                             <h6>{d.changesPercentage.toFixed(2)}%</h6>
                                             <p>H {d.dayHigh.toFixed(4)}</p>
                                             <p>L {d.dayLow.toFixed(4)}</p>                                      
                                         </Col>
                                     </Row>
                                 </Link>
                                )           
                            })
                        }
                  </div>
            </div>
         </Container>
        
        </div>
    );
}

export default ForexCards;






