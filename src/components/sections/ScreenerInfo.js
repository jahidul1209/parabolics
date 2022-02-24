import React, { useEffect, useState } from "react";
import { Container, Table} from 'react-bootstrap'

const ScreenerInfo = (props) => {
    const [netIncomePerEBTTTM , setnetIncomePerEBTTTM] = useState()
    const [daysOfSalesOutstandingTTM , setdaysOfSalesOutstandingTTM] = useState()
    const [priceBookValueRatioTTM , setpriceBookValueRatioTTM] = useState()
    const [operatingCashFlowPerShareTTM , setoperatingCashFlowPerShareTTM] = useState()
    const [dividendYielTTM , setdividendYielTTM] = useState()   
    const [dividendYielPercentageTTM , setdividendYielPercentageTTM] = useState()
    const [peRatioTTM , setpeRatioTTM] = useState()
    const [pegRatioTTM , setpegRatioTTM] = useState()
    const [priceSalesRatioTTM , setpriceSalesRatioTTM] = useState()  
    const [priceCashFlowRatioTTM , setpriceCashFlowRatioTTM] = useState()
    const [priceToBookRatioTTM , setpriceToBookRatioTTM] = useState()
    const [priceToFreeCashFlowsRatioTTM , setpriceToFreeCashFlowsRatioTTM] = useState()
    const [grossProfitMarginTTM , setgrossProfitMarginTTM] = useState()
    const [operatingProfitMarginTTM , setoperatingProfitMarginTTM] = useState()
    const [debtEquityRatioTTM , setdebtEquityRatioTTM] = useState()
    const [longTermDebtToCapitalizationTTM , setlongTermDebtToCapitalizationTTM] = useState()
    const [netProfitMarginTTM , setnetProfitMarginTTM] = useState()
    const [fixedAssetTurnoverTTM , setfixedAssetTurnoverTTM] = useState()
    const [payoutRatioTTM , setpayoutRatioTTM] = useState()
    const [currentRatioTTM , setcurrentRatioTTM] = useState()
    const [quickRatioTTM , setquickRatioTTM] = useState()
    const [dividendPerShareTTM , setdividendPerShareTTM] = useState()
    
    useEffect(() => {
  
        fetch(`https://financialmodelingprep.com/api/v3/ratios-ttm/${props.symbol}?apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
         .then(res => res.json())
          .then(
            (result) => {
                console.log(result[0])
                setnetIncomePerEBTTTM(result[0].netIncomePerEBTTTM.toFixed(4))
                setdaysOfSalesOutstandingTTM(result[0].daysOfSalesOutstandingTTM.toFixed(4)) 
                setpriceBookValueRatioTTM(result[0].priceBookValueRatioTTM.toFixed(4)) 
                setoperatingCashFlowPerShareTTM(result[0].operatingCashFlowPerShareTTM.toFixed(4)) 
                setdividendYielTTM(result[0].dividendYielTTM.toFixed(4))
                setdividendYielPercentageTTM(result[0].dividendYielPercentageTTM.toFixed(4)) 
                setpeRatioTTM(result[0].peRatioTTM.toFixed(4)) 
                setpegRatioTTM(result[0].pegRatioTTM.toFixed(4)) 
                setpriceSalesRatioTTM(result[0].priceSalesRatioTTM.toFixed(4))  
                setpriceCashFlowRatioTTM(result[0].priceCashFlowRatioTTM.toFixed(4)) 
                setpriceToBookRatioTTM(result[0].priceToBookRatioTTM.toFixed(4)) 
                setpriceToFreeCashFlowsRatioTTM(result[0].priceToFreeCashFlowsRatioTTM.toFixed(4)) 
                setgrossProfitMarginTTM(result[0].grossProfitMarginTTM.toFixed(4))
                setdebtEquityRatioTTM(result[0].debtEquityRatioTTM.toFixed(4))
                setlongTermDebtToCapitalizationTTM(result[0].longTermDebtToCapitalizationTTM.toFixed(4))
                setoperatingProfitMarginTTM(result[0].operatingProfitMarginTTM.toFixed(4))   
                setnetProfitMarginTTM(result[0].netProfitMarginTTM.toFixed(4))
                setpayoutRatioTTM(result[0].payoutRatioTTM.toFixed(4)) 
                setcurrentRatioTTM(result[0].currentRatioTTM.toFixed(4)) 
                setquickRatioTTM(result[0].quickRatioTTM.toFixed(4))    
                
                setdividendPerShareTTM(result[0].dividendPerShareTTM.toFixed(4))    
                setfixedAssetTurnoverTTM(result[0].fixedAssetTurnoverTTM.toFixed(4)) },
                
            (error) => { console.log(error) }
            )
 
      }, [props.symbol])
  return (<>

    <Container fluid className="mt-4">
       <div className="card">

            <Table className="sinfotbl table">
                    <tbody>
                        <tr>
                            <th>Index</th>
                            <td>{props.symbol}  </td>
                        </tr>
                        <tr>
                            <th>Market Cap</th>
                            <td>{props.mktCap}</td>
                        </tr>
                        <tr>
                            <th>Income</th>
                            <td>{netIncomePerEBTTTM}</td>
                        </tr>
                        <tr>
                            <th>Sales</th>
                            <td>{daysOfSalesOutstandingTTM}</td>
                        </tr>
                        <tr>  
                            <th>Book/sh</th>
                            <td>{priceBookValueRatioTTM}</td>
                        </tr>
                        <tr>
                            <th>Cash/sh</th>
                            <td>{operatingCashFlowPerShareTTM}</td>
                        </tr>
                        <tr>  
                            <th>Dividend</th>
                            <td>{dividendYielTTM}</td>
                        </tr>

                        <tr>
                            <th>Dividend %</th>
                            <td>{dividendYielPercentageTTM}</td>
                        </tr>
                        <tr>
                            <th>Employees</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Optionable</th>
                            <td>-</td>
                        </tr>
                        <tr> 
                            <th>Shortable</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Recom</th>
                            <td>-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>P/E</th>
                            <td>{peRatioTTM}</td>
                        </tr>
                        <tr>
                            <th>Forward P/E</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>PEG</th>
                            <td>{pegRatioTTM}</td>
                        </tr>
                        <tr>
                            <th>P/S</th>
                            <td>{priceSalesRatioTTM}</td>
                        </tr>
                        <tr>  
                            <th>P/B</th>
                            <td>{priceToBookRatioTTM}</td>
                        </tr>
                        <tr>
                            <th>P/C</th>
                            <td>{priceCashFlowRatioTTM}</td>
                        </tr>
                        <tr>  
                            <th>P/FCF</th>
                            <td>{priceToFreeCashFlowsRatioTTM}</td>
                        </tr>

                        <tr>
                            <th>Quick Ratio</th>
                            <td>{quickRatioTTM}</td>
                        </tr>
                        <tr>
                            <th>Current Ratio</th>
                            <td>{currentRatioTTM}</td>
                        </tr>
                        <tr>
                            <th>Debt/Eq</th>
                            <td>{debtEquityRatioTTM}</td>
                        </tr>
                        <tr> 
                            <th>LT Debt/Eq</th>
                            <td>{longTermDebtToCapitalizationTTM}</td>
                        </tr>
                        <tr>
                            <th>SMA20</th>
                            <td>-</td>
                        </tr>
                     </tbody>
                     <tbody>
                        <tr>
                            <th>EPS (ttm)</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>EPS next Y</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>EPS next Q</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>EPS this Y</th>
                            <td>-</td>
                        </tr>
                        <tr>  
                            <th>EPS next Y</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>EPS next 5Y</th>
                            <td>-</td>
                        </tr>
                        <tr>  
                            <th>EPS past 5Y</th>
                            <td>-</td>
                        </tr>

                        <tr>
                            <th>Sales past 5Y</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Sales Q/Q</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>EPS Q/Q</th>
                            <td>-</td>
                        </tr>
                        <tr> 
                            <th>Earnings</th>
                            <td>{((netIncomePerEBTTTM / dividendPerShareTTM) / props.price).toFixed(4)}</td>
                        </tr>
                        <tr>
                            <th>SMA50</th>
                            <td>-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>Insider Own</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Insider Trans</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Inst Own</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Inst Trans</th>
                            <td>-</td>
                        </tr>
                        <tr>  
                            <th>ROA</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>ROE</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>ROI</th>
                            <td>-</td>
                        </tr>
                        <tr>  
                            <th>Gross Margin</th>
                            <td>{grossProfitMarginTTM}</td>
                        </tr>

                        <tr>
                            <th>Oper. Margin</th>
                            <td>{operatingProfitMarginTTM}</td>
                        </tr>
                        <tr>
                            <th>Profit Margin</th>
                            <td>{netProfitMarginTTM}</td>
                        </tr>
                        <tr>
                            <th>Payout</th>
                            <td>{payoutRatioTTM}</td>
                        </tr>
                    
                        <tr>
                            <th>SMA200</th>
                            <td>-</td>
                        </tr>
                     </tbody>
                     <tbody>
                        <tr>
                            <th>Shs Outstand</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Insider Trans</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Shs Float</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Short Float</th>
                            <td>-</td>
                        </tr>
                        <tr>  
                            <th>Short Ratio</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Target Price</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>52W Range</th>
                            <td>-</td>
                        </tr>
                        <tr>  
                            <th>52W High</th>
                            <td>-</td>
                        </tr>

                        <tr>
                            <th>52W Low</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>RSI (14)</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Rel Volume</th>
                            <td>-</td>
                        </tr>
                    
                        <tr>
                            <th>Volume</th>
                            <td>-</td>
                        </tr>
                     </tbody>
                     <tbody>
                        <tr>
                            <th>Perf Week</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Perf Month</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Perf Quarter</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Perf Half Y</th>
                            <td>-</td>
                        </tr>
                        <tr>  
                            <th>Perf Year</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Perf YTD</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Beta</th>
                            <td>{props.beta}</td>
                        </tr>
                        <tr>  
                            <th>ATR</th>
                            <td>{fixedAssetTurnoverTTM}</td>
                        </tr>

                        <tr>
                            <th>Volatility</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Prev Close</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>{props.price}</td>
                        </tr>
                    
                        <tr>
                            <th>Change</th>
                            <td>{props.change}</td>
                        </tr>
                     </tbody>
              </Table>
       </div>        
    </Container>  

   </>   
   );
};
export default ScreenerInfo;
