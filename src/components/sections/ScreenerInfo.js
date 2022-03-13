import React, { useEffect, useState } from "react";
import { Container, Table} from 'react-bootstrap'
const finvizData = require('@stonksjs/finviz');

const ScreenerInfo = (props) => {
    const [index , setIndex] = useState()
    const [marketCap , setMarketCap] = useState()
    const [income , setIncome] = useState()
    const [sales , setSales] = useState()
    const [bookSh , setBookSh] = useState()   
    const [cashSh , setCashSh] = useState()
    const [dividend , setDividend] = useState()
    const [employees , setEmployees] = useState()
    const [optionable , setOptionable] = useState()  
    const [shortable , setShortable] = useState()
    const [recom , setRecom] = useState()
    const [pERatio , setpERatio] = useState()
    const [forwardPE , setforwardPE] = useState()
    const [pegRatio , setpegRatio] = useState()
    const [pSRatio , setpSRatio] = useState()
    const [pBRatio , setpBRatio] = useState()
    const [pCRatio , setpCRatio] = useState()
    const [pFcfRatio , setpFcfRatio] = useState()
    const [payout , setpayout] = useState()
    const [currentRatio , setCurrentRatio] = useState()
    const [quickRatio , setQuickRatio] = useState()
    const [ltDebtEqRatio , setltDebtEqRatio] = useState()

    const [debtEqRatio , setdebtEqRatio] = useState()
    const [sma20 , setsma20] = useState()
    const [epsTtm , setepsTtm] = useState()
    const [epsNextY , setepsNextY] = useState()
    const [epsNextQ , setepsNextQ] = useState()
    const [epsThisY , setepsThisY] = useState()
    const [epsNext5Y , setepsNext5Y] = useState()
    const [salesPast5Y , setsalesPast5Y] = useState()
    const [epsPast5Y , setepsPast5Y] = useState()

    const [salesQQRatio , setsalesQQRatio] = useState()
    const [epsQQRatio , setepsQQRatio] = useState()
    const [earnings , setEarnings] = useState()
    const [sma50 , setsma50] = useState()
    const [insiderOwn , setinsiderOwn] = useState()
    const [insiderTrans , setinsiderTrans] = useState()
    const [instOwn , setinstOwn] = useState()

    const [instTrans , setinstTrans] = useState()
    const [ROA , setROA] = useState()
    const [ROE , setROE] = useState()
    const [ROI , setROI] = useState()
    const [grossMargin , setgrossMargin] = useState()
    const [operMargin , setoperMargin] = useState()
    const [profitMargin , setprofitMargin] = useState()

    const [sma200 , setsma200] = useState()
    const [shsOutstand , setshsOutstand] = useState()
    const [shsFloat , setshsFloat] = useState()
    const [shortFloat , setshortFloat] = useState()
    const [shortRatio , setshortRatio] = useState()
    const [targetPrice , settargetPrice] = useState()
    const [rsi14 , setrsi14] = useState()
    const [relVolume , setrelVolume] = useState()
    const [avgVolume , setavgVolume] = useState()
    const [volume , setvolume] = useState()
    
    const [perfHalfY , setperfHalfY] = useState()
    const [perfMonth , setperfMonth] = useState()
    const [perfQuarter , setperfQuarter] = useState()
    const [perfWeek , setperfWeek] = useState()
    const [perfYear , setperfYear] = useState()
    const [perfYtd , setperfYtd] = useState()
    const [ATR , setATR] = useState()
    const [beta , setBeta] = useState()
    const [volatility , setvolatility] = useState()
    const [prevClose , setprevClose] = useState()
    const [price , setPrice] = useState()
    const [change , setChange] = useState()

    useEffect(() => {
        async function screenData(){
            const data = await finvizData.quote(props.symbol);
            setIndex(data.index)
            setMarketCap(data.marketCap)
            setIncome(data.income)
            setSales(data.sales)
            setBookSh(data.bookSh)
            setCashSh(data.cashSh)
            setDividend(data.dividend)
            setEmployees(data.employees)
            setOptionable(data.optionable)
            setShortable(data.shortable)
            setRecom(data.recom)
            setpERatio(data.pE)
            setforwardPE(data.forwardPE)
            setpegRatio(data.peg)
            setpSRatio(data.pS)
            setpBRatio(data.pB)
            setpCRatio(data.pC)
            setpFcfRatio(data.pFcf)
            setQuickRatio(data.quickRatio)
            setCurrentRatio(data.currentRatio)
            setltDebtEqRatio(data.ltDebtEq)
            setdebtEqRatio(data.debtEq)
            setsma20(data.sma20)
            setepsTtm(data.epsTtm)
            setepsNextY(data.epsNextY)
            setepsNextQ(data.epsNextQ)
            setepsThisY(data.epsThisY)
            setepsNext5Y(data.epsNext5Y)
            setepsPast5Y(data.epsPast5Y)
            setsalesPast5Y(data.salesPast5Y)
            setsalesQQRatio(data.salesQQ)
            setepsQQRatio(data.epsQQ)
            setEarnings(data.earnings)
            setsma50(data.sma50)
            setinsiderOwn(data.insiderOwn)
            setinsiderTrans(data.insiderTrans)
            setinstOwn(data.instOwn)
            setinstTrans(data.instTrans)
            setROA(data.roa)
            setROE(data.roe)
            setROI(data.roi)
            setgrossMargin(data.grossMargin)
            setoperMargin(data.operMargin)
            setprofitMargin(data.profitMargin)
            setpayout(data.payout)
            setsma200(data.sma200)
            setshsOutstand(data.shsOutstand)
            setshsFloat(data.shsFloat)
            setshortFloat(data.shortFloat)
            setshortRatio(data.shortRatio)
            settargetPrice(data.targetPrice)
            setrsi14(data.rsi14)
            setrelVolume(data.relVolume)
            setavgVolume(data.avgVolume)
            setvolume(data.volume)
            setperfWeek(data.perfWeek)
            setperfMonth(data.perfMonth)
            setperfQuarter(data.perfQuarter)
            setperfHalfY(data.perfHalfY)
            setperfYear(data.perfYear)
            setperfYtd(data.perfYtd)
            setBeta(data.beta)
            setATR(data.atr)
            setvolatility(data.volatility)
            setprevClose(data.prevClose)
            setPrice(data.price)
            setChange(data.change)

           

            }     
                screenData()
 
      }, [props.symbol])
  return (<>

    <Container fluid className="mt-4">
       <div className="card">

            <Table className="sinfotbl table">
                    <tbody>
                        <tr>
                            <th>Index</th>
                            <td>{ index}  </td>
                        </tr>
                        <tr>
                            <th>Market Cap</th>
                            <td>{marketCap}</td>
                        </tr>
                        <tr>
                            <th>Income</th>
                            <td>{income}</td>
                        </tr>
                        <tr>
                            <th>Sales</th>
                            <td>{sales}</td>
                        </tr>
                        <tr>  
                            <th>Book/sh</th>
                            <td>{bookSh}</td>
                        </tr>
                        <tr>
                            <th>Cash/sh</th>
                            <td>{cashSh}</td>
                        </tr>
                        <tr>  
                            <th>Dividend</th>
                            <td>{dividend}</td>
                        </tr>

                        <tr>
                            <th>Dividend %</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>Employees</th>
                            <td>{employees}</td>
                        </tr>
                        <tr>
                            <th>Optionable</th>
                            <td>{optionable}</td>
                        </tr>
                        <tr> 
                            <th>Shortable</th>
                            <td>{shortable}</td>
                        </tr>
                        <tr>
                            <th>Recom</th>
                            <td>{recom}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>P/E</th>
                            <td>{pERatio}</td>
                        </tr>
                        <tr>
                            <th>Forward P/E</th>
                            <td>{forwardPE}</td>
                        </tr>
                        <tr>
                            <th>PEG</th>
                            <td>{pegRatio}</td>
                        </tr>
                        <tr>
                            <th>P/S</th>
                            <td>{pSRatio}</td>
                        </tr>
                        <tr>  
                            <th>P/B</th>
                            <td>{pBRatio}</td>
                        </tr>
                        <tr>
                            <th>P/C</th>
                            <td>{pCRatio}</td>
                        </tr>
                        <tr>  
                            <th>P/FCF</th>
                            <td>{pFcfRatio}</td>
                        </tr>

                        <tr>
                            <th>Quick Ratio</th>
                            <td>{quickRatio}</td>
                        </tr>
                        <tr>
                            <th>Current Ratio</th>
                            <td>{currentRatio}</td>
                        </tr>
                        <tr>
                            <th>Debt/Eq</th>
                            <td>{debtEqRatio}</td>
                        </tr>
                        <tr> 
                            <th>LT Debt/Eq</th>
                            <td>{ltDebtEqRatio}</td>
                        </tr>
                        <tr>
                            <th>SMA20</th>
                            <td>{sma20}</td>
                        </tr>
                     </tbody>
                     <tbody>
                        <tr>
                            <th>EPS (ttm)</th>
                            <td>{epsTtm}</td>
                        </tr>
                        <tr>
                            <th>EPS next Y</th>
                            <td>{epsNextY}</td>
                        </tr>
                        <tr>
                            <th>EPS next Q</th>
                            <td>{epsNextQ}</td>
                        </tr>
                        <tr>
                            <th>EPS this Y</th>
                            <td>{epsThisY}</td>
                        </tr>
                        <tr>  
                            <th>EPS next Y</th>
                            <td>{epsNextY}</td>
                        </tr>
                        <tr>
                            <th>EPS next 5Y</th>
                            <td>{epsNext5Y}</td>
                        </tr>
                        <tr>  
                            <th>EPS past 5Y</th>
                            <td>{epsPast5Y}</td>
                        </tr>

                        <tr>
                            <th>Sales past 5Y</th>
                            <td>{salesPast5Y}</td>
                        </tr>
                        <tr>
                            <th>Sales Q/Q</th>
                            <td>{salesQQRatio}</td>
                        </tr>
                        <tr>
                            <th>EPS Q/Q</th>
                            <td>{epsQQRatio}</td>
                        </tr>
                        <tr> 
                            <th>Earnings</th>
                            <td>{earnings}</td>
                        </tr>
                        <tr>
                            <th>SMA50</th>
                            <td>{sma50}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>Insider Own</th>
                            <td>{insiderOwn}</td>
                        </tr>
                        <tr>
                            <th>Insider Trans</th>
                            <td>{insiderTrans}</td>
                        </tr>
                        <tr>
                            <th>Inst Own</th>
                            <td>{instOwn}</td>
                        </tr>
                        <tr>
                            <th>Inst Trans</th>
                            <td>{instTrans}</td>
                        </tr>
                        <tr>  
                            <th>ROA</th>
                            <td>{ROA}</td>
                        </tr>
                        <tr>
                            <th>ROE</th>
                            <td>{ROE}</td>
                        </tr>
                        <tr>
                            <th>ROI</th>
                            <td>{ROI}</td>
                        </tr>
                        <tr>  
                            <th>Gross Margin</th>
                            <td>{grossMargin}</td>
                        </tr>

                        <tr>
                            <th>Oper. Margin</th>
                            <td>{operMargin}</td>
                        </tr>
                        <tr>
                            <th>Profit Margin</th>
                            <td>{profitMargin}</td>
                        </tr>
                        <tr>
                            <th>Payout</th>
                            <td>{payout}</td>
                        </tr>
                    
                        <tr>
                            <th>SMA200</th>
                            <td>{sma200}</td>
                        </tr>
                     </tbody>
                     <tbody>
                        <tr>
                            <th>Shs Outstand</th>
                            <td>{shsOutstand}</td>
                        </tr>
                        <tr>
                            <th>Insider Trans</th>
                            <td>{insiderTrans}</td>
                        </tr>
                        <tr>
                            <th>Shs Float</th>
                            <td>{shsFloat}</td>
                        </tr>
                        <tr>
                            <th>Short Float</th>
                            <td>{shortFloat}</td>
                        </tr>
                        <tr>  
                            <th>Short Ratio</th>
                            <td>{shortRatio}</td>
                        </tr>
                        <tr>
                            <th>Target Price</th>
                            <td>{targetPrice}</td>
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
                            <td>{rsi14}</td>
                        </tr>
                        <tr>
                            <th>Rel Volume</th>
                            <td>{relVolume}</td>
                        </tr>
                    
                        <tr>
                            <th>Volume</th>
                            <td>{volume}</td>
                        </tr>
                     </tbody>
                     <tbody>
                        <tr>
                            <th>Perf Week</th>
                            <td>{perfWeek}</td>
                        </tr>
                        <tr>
                            <th>Perf Month</th>
                            <td>{perfMonth}</td>
                        </tr>
                        <tr>
                            <th>Perf Quarter</th>
                            <td>{perfQuarter}</td>
                        </tr>
                        <tr>
                            <th>Perf Half Y</th>
                            <td>{perfHalfY}</td>
                        </tr>
                        <tr>  
                            <th>Perf Year</th>
                            <td>{perfYear}</td>
                        </tr>
                        <tr>
                            <th>Perf YTD</th>
                            <td>{perfYtd}</td>
                        </tr>
                        <tr>
                            <th>Beta</th>
                            <td>{beta}</td>
                        </tr>
                        <tr>  
                            <th>ATR</th>
                            <td>{ATR}</td>
                        </tr>

                        <tr>
                            <th>Volatility</th>
                            <td>{volatility}</td>
                        </tr>
                        <tr>
                            <th>Prev Close</th>
                            <td>{prevClose}</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>{price}</td>
                        </tr>
                    
                        <tr>
                            <th>Change</th>
                            <td>{change}</td>
                        </tr>
                     </tbody>
              </Table>
       </div>        
    </Container>  

   </>   
   );
};
export default ScreenerInfo;
