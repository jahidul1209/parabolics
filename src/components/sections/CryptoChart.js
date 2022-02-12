import React, { useEffect, useState, useRef  } from 'react';
import { Container ,Row, Col} from 'react-bootstrap'
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { Link } from 'react-router-dom';

function CryptoChart(props) {
     const [rowData, setRowData] = useState([])


    function fetchData(){
   
        fetch("https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=9f8bf374d13311bf6527af0ea58ebdb6")
          .then(res => res.json())
          .then(result => {
                   setRowData(result)
                }
            )
            .then( error => {
              console.log(error);
            }
          )
      }

      useEffect(() => {
          fetchData()
      }, []);

    return (
        <Container fluid> 
        <div className='stockChart  mt-5'>
           {   
            rowData.map((item, index)=> {
             
                  return(
                   index < 30 &&
                       <div className='cchart'>
                         <Link to = {`/chart/${item.symbol}`}>  
                                 <h6>{item.symbol}</h6>
                           </Link>
                           <TradingViewWidget  symbol={`${item.symbol}`} height = '280px' width = '450px' theme={Themes.DARK}  locale="en"  /> 
                                   {/* <img src = {`https://api.chart-img.com/v1/tradingview/advanced-chart?height=400&studies=EMA:12&studies=EMA:26&symbol=${item}&key=2bbd4ca4-96f7-4779-86e5-3633b4a2bcd0`} alt=''  width='100%'/> */}
                        
                           
                       </div>               
                 )
               })  
           }
       </div>
       </Container>
    );
}

export default CryptoChart;

