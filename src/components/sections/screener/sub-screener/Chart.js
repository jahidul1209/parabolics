import React from 'react';
import { Link } from 'react-router-dom';
import { Container} from 'react-bootstrap'
import TradingViewWidget, { Themes } from "react-tradingview-widget";

//const array = [ 'AAPL','MSFT','GOOG','GOOOGL', 'AMZN','TSLA','VTSAX','FB','NVDA','ASML','ADGO','AVGO','INTC','QCOM','PYPL']

function Chart(props) {
    return (
        <Container fluid>
         
         <div className='stockChart  mt-5'>
            {   
           ( props.rowData  ) ?
               props.rowData.map((item, index)=> {
              
                   return(
                    index < 4 &&
                        <div className='cchart'>
                      
                            <Link to = {`/chart/${item.symbol}`}> <h6>{item.symbol}</h6>    </Link>
                            <TradingViewWidget  symbol={`${item.symbol}`}  theme={Themes.DARK}  locale="en"  className = 'charttrade' /> 
                                    {/* <img src = {`https://api.chart-img.com/v1/tradingview/advanced-chart?height=400&studies=EMA:12&studies=EMA:26&symbol=${item}&key=2bbd4ca4-96f7-4779-86e5-3633b4a2bcd0`} alt=''  width='100%'/> */}              
                        </div>               
                  )
                })  
                :
                null 
            }
        </div>
        </Container>

    );
}

export default Chart;