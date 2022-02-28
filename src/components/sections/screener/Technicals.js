import React, { useEffect, useState } from 'react';
import axios from "axios";    
import { Container , Tabs , Tab, Form ,Row, Col} from 'react-bootstrap'
import Overview from './sub-screener/Overview';
import Valuation from './sub-screener/Valuation';
import Financial from './sub-screener/Financial';
import Ownership from './sub-screener/Ownership';
import Performance from './sub-screener/Performance';
import Technical from './sub-screener/Technical';
import Custom from './sub-screener/Custom';
import Chart from './sub-screener/Chart';
import { Link } from 'react-router-dom';
import Basic from './sub-screener/Basic';
import NewsSub from './sub-screener/NewsSub';
import SnapShort from './sub-screener/SnapShort';



function Technicals(props) {
    
    const [rowData, setRowData] = useState()
    const [count, setCount] = useState()
    const[exchange, setExchange] = useState('NASDAQ');
    const[marketCapMoreThan, setMarketCapMoreThan] = useState('');
    const[priceMoreThan, setPriceMoreThan] = useState('');
    const[betaMoreThan, setBetaMoreThan] = useState('');
    const[volumeMoreThan, setVolumeMoreThan] = useState('');
    const[dividendMoreThan, setDividendMoreThan] = useState('');
    const[country, setCountry] = useState('');
    const[industry, setIndustry] = useState('');
    const[sector, setSector] = useState('');
    const[limit, setLimit] = useState('');
    const[isActivelyTrading, setIsActivelyTrading] = useState('');
    let selectedOptionId = 0
    
    function fetchData(){
        axios.get(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=${marketCapMoreThan}&betaMoreThan=${betaMoreThan}&priceMoreThan=${priceMoreThan}&volumeMoreThan=${volumeMoreThan}&sector=${sector}&industry=${industry}&country=${country}&exchange=${exchange}&dividendMoreThan=${dividendMoreThan}&isActivelyTrading=${isActivelyTrading}&limit=${limit}&apikey=9f8bf374d13311bf6527af0ea58ebdb6`
           )
           .then((response) => {
             setCount(response.data.length);
             const gainData =  response.data.map((d, key) => {
                return {
                    sl: key + 1,
                    ticker: <Link to = {`/chart/${d.symbol}`}>{d.symbol}</Link>,
                    company:d.companyName,
                    sector:d.sector,
                    industry:d.industry,
                    country:d.country,
                    marketCap:nFormatter(d.marketCap),
                    price:  d.price,
                    beta: d.beta.toFixed(3),
                    volume:numberWithCommas(d.volume),
                  }
                });
               setRowData(gainData)
            })
            
            .catch(error => {
                console.log(error);
            });
      }
      
    useEffect(() => {
        const interval = setInterval(() => {
          fetchData()
        }, 1000);
        return () => clearInterval(interval);
      }, [
        marketCapMoreThan,
        betaMoreThan,
        priceMoreThan,
        volumeMoreThan,
        sector,
        industry,
        country,
        exchange,
        dividendMoreThan,
        limit,
        isActivelyTrading,
       
      ]);

    function nFormatter(num) {
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(2).replace(/\.0$/, '') + 'B';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(2).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(2).replace(/\.0$/, '') + 'K';
        }
        return num;
   }
   function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }
  

    return (<div>
                          <Container fluid className='screener'>
                                    <Row>
                                        <Col xs={12} md={3} className='positn'>
                                        <Form >
                                                <Form.Label>
                                                Perfomance:
                                                    <select className="screen-btn" >
                                                                <option selected value='500'>Any</option>
                                                                <option value="20">Below 20</option>
                                                                <option value="50">Below 50</option>
                                                                <option value="100">Below 100</option>
                                                                <option value="50000">Above 100</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                20-Day Moving Avarage:
                                                    <select className="screen-btn" onChange={(e)=>  setExchange(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='0'>Any</option>
                                                                <option value="nyse">NYSE</option>
                                                                <option value="nasdaq">NASDAQ</option>
                                                                <option value="amex">AMEX</option>
                                                                <option value="euronext">EURO NEXT</option>
                                                                <option value="tsx">TSX</option>
                                                                <option value="etf">ETF</option>
                                                                <option value="mutual_fund">MUTUAl FUND</option>
                                                    </select>
                                                </Form.Label>
                                            </Form> 
                                            <Form >
                                                <Form.Label>
                                                20-Day High/Low:
                                                    <select className="screen-btn" onChange={(e)=>  setLimit(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='500'>Any</option>
                                                                <option value="20">Below 20</option>
                                                                <option value="50">Below 50</option>
                                                                <option value="100">Below 100</option>
                                                                <option value="50000">Above 100</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                Beta:                
                                                    <select className="screen-btn" onChange={(e)=>  setSector(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='Technology'>Any</option>
                                                                <option value="Consumer Cyclical">Consumer Cyclical</option>
                                                                <option value="Energy">Energy</option>
                                                                <option value="Technology">Technology</option>
                                                                <option value="Basic MaterialsO">Basic Materials</option>
                                                                <option value="Communication Services">Communication Services</option>
                                                                <option value="Consumer Defensive">Consumer Defensive</option>
                                                                <option value="Healthcare">Healthcare</option>
                                                                <option value="Real Estate">Real Estate</option>
                                                                <option value="Utilities">Utilities</option>
                                                                <option value="Healthcare">Healthcare</option>
                                                                <option value="Industrial Goods">Industrial Goods</option>
                                                                <option value="Financial">Financial</option>
                                                                <option value="Services">Services</option>
                                                                <option value="Conglomerates">Conglomerates</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                Gap:                
                                                    <select className="screen-btn" onChange={(e)=>  setSector(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='Technology'>Any</option>
                                                                <option value="Consumer Cyclical">Consumer Cyclical</option>
                                                                <option value="Energy">Energy</option>
                                                                <option value="Technology">Technology</option>
                                                                <option value="Basic MaterialsO">Basic Materials</option>
                                                                <option value="Communication Services">Communication Services</option>
                                                                <option value="Consumer Defensive">Consumer Defensive</option>
                                                                <option value="Healthcare">Healthcare</option>
                                                                <option value="Real Estate">Real Estate</option>
                                                                <option value="Utilities">Utilities</option>
                                                                <option value="Healthcare">Healthcare</option>
                                                                <option value="Industrial Goods">Industrial Goods</option>
                                                                <option value="Financial">Financial</option>
                                                                <option value="Services">Services</option>
                                                                <option value="Conglomerates">Conglomerates</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                        </Col>
                                        <Col xs={12} md={3} className='positn'>
                                        <Form >
                                                <Form.Label>
                                                Performence 2:
                                                    <select className="screen-btn" >
                                                                <option selected value='Software'>Any</option>
                                                                <option value="Autos">Autos</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                50-Day Moving Average:
                                                    <select className="screen-btn" onChange={(e)=>  setIndustry(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='Software'>Any</option>
                                                                <option value="Autos">Autos</option>
                                                                <option value="Banks">Banks</option>
                                                                <option value="Banks Diversified">Banks Diversified</option>
                                                                <option value="Software">Software</option>
                                                                <option value="Banks Regional">Banks Regional</option>
                                                                <option value="Beverages Alcoholic">Beverages Alcoholic</option>
                                                                <option value="Beverages Brewers">Beverages Brewers</option>
                                                                <option value="Beverages Non">Beverages Non</option>
                                                                <option value="Alcoholic">Alcoholic</option>
                                                    </select>
                                                </Form.Label>
                                            </Form> 
                                            <Form >
                                                <Form.Label>
                                                50-day High/Low:
                                                    <select className="screen-btn" onChange={(e)=>  setCountry(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='CA'>Any</option>
                                                                <option value="US">United States </option>
                                                                <option value="UK">United Kingdom</option>
                                                                <option value="MX">Mexico</option>
                                                                <option value="RU">Russia</option>
                                                                <option value="HK">Hong Kong</option>
                                                                <option value="CA">Canada</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
      
                                                <Form.Label>
                                                Average Tree Range:
                                                <select className="screen-btn" onChange={(e)=>  setMarketCapMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                    <option selected="selected" value="10000000000">Any</option>
                                                    <option value="10000000000">Mega ($200bln and more)</option>
                                                    <option value="1000000000">Large ($10bln to $200bln)</option>
                                                    <option value="100000000">Mid ($2bln to $10bln)</option>
                                                    <option value="10000000">Small ($300mln to $2bln)</option>
                                                    <option value="1000000">Micro ($50mln to $300mln)</option>
                                                    <option value="100000">Nano (under $50mln)</option
                                                    ><option value="10000">+Large (over $10bln)</option>
                                                    <option value="1000">+Mid (over $2bln)</option>
                                                    <option value="100">+Small (over $300mln)</option>
                                                </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
      
                                                <Form.Label>
                                                Change From Open:
                                                <select className="screen-btn" onChange={(e)=>  setMarketCapMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                    <option selected="selected" value="10000000000">Any</option>
                                                    <option value="10000000000">Mega ($200bln and more)</option>
                                                    <option value="1000000000">Large ($10bln to $200bln)</option>
                                                    <option value="100000000">Mid ($2bln to $10bln)</option>
                                                    <option value="10000000">Small ($300mln to $2bln)</option>
                                                    <option value="1000000">Micro ($50mln to $300mln)</option>
                                                    <option value="100000">Nano (under $50mln)</option
                                                    ><option value="10000">+Large (over $10bln)</option>
                                                    <option value="1000">+Mid (over $2bln)</option>
                                                    <option value="100">+Small (over $300mln)</option>
                                                </select>
                                                </Form.Label>
                                            </Form>
                                        </Col>
                                        <Col xs={12} md={3} className='positn'>
                                            <Form >
                                                <Form.Label> 
                                                Volatility:
                      
                                                    <select className="screen-btn" >
                                                            <option selected="selected" value="0">None</option>
                                                            <option value="1">Positive (&gt;1%)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form> 
                                            <Form >
                                                <Form.Label> 
                                                200-Day Maving Average:
                      
                                                    <select className="screen-btn" onChange={(e)=>  setDividendMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                            <option selected="selected" value="0">None (0%)</option>
                                                            <option value="1">Positive (&gt;1%)</option>
                                                            <option value="2">High (&gt;2%)</option>
                                                            <option value="3">Very High (&gt;10%)</option>
                                                            <option value="4">Over 20%</option>
                                                            <option value="5">Over 50%</option>
                                                            <option value="8">Over 75%</option>
                                                            <option value="10">Over 100%</option>
                                                    </select>
                                                </Form.Label>
                                            </Form> 
                                            <Form >
                                                <Form.Label>

                                                52-Week High/Low:
                                                    <select className="screen-btn" onChange={(e)=>  setVolumeMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='100000000'>Any</option>
                                                                <option  value="50000">Under 50K</option>
                                                                <option value="100000">Under 100K</option>
                                                                <option value="500000">Under 500K</option>
                                                                <option value="750000">Under 750K</option>
                                                                <option value="1000000">Under 1M</option>
                                                                <option value="5000000">Over 50K</option>
                                                                <option value="100000000">Over 100K</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                           
                                            <Form >
                                                <Form.Label>

                                                After-Hours close:
                                                    <select className="screen-btn" onChange={(e)=>  setVolumeMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='100000000'>Any</option>
                                                                <option  value="50000">Under 50K</option>
                                                                <option value="100000">Under 100K</option>
                                                                <option value="500000">Under 500K</option>
                                                                <option value="750000">Under 750K</option>
                                                                <option value="1000000">Under 1M</option>
                                                                <option value="5000000">Over 50K</option>
                                                                <option value="100000000">Over 100K</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                           
                                            <Form >
                                                <Form.Label>
                                                Candlestick:
                                                    <select className="screen-btn" onChange={(e)=>  setIsActivelyTrading(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='true'>Any</option>
                                                                <option value="true">True</option>
                                                                <option value="false">False</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                        </Col>
                                        <Col xs={12} md={3} className='positn'>
                                            <Form >
                                                <Form.Label>
                                                RST(14):
                                                    <select className="screen-btn" onChange={(e)=>  setPriceMoreThan(e.target.value)} defaultValue={selectedOptionId}>                                   
                                                        <option selected="selected" value="500">Any</option>
                                                        <option value="1">Under $1</option>
                                                        <option value="2">Under $2</option>
                                                        <option value="5">Under $5</option>
                                                        <option value="10">Under $10</option>
                                                        <option value="15">Under $15</option>
                                                        <option value="20">Under $20</option>
                                                        <option value="40">Under $40</option>
                                                        <option value="50">Under $50</option>
                                                        <option value="100">Over $100</option>
                                                        <option value="500">Over $500</option>
                                                    </select>
                                                </Form.Label>
                                            </Form> 
                                            <Form >
                                                <Form.Label>
                                                Change:
                                                    <select className="screen-btn" onChange={(e)=>  setBetaMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='100'>Any</option>
                                                                <option  value="1">Under One</option>
                                                                <option value="5">Under Five</option>
                                                                <option value="10">Under Ten</option>
                                                                <option value="50">Under Fifty</option>
                                                                <option value="100">Under Hundred </option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label> 

                                                Pattern:
                                                    <select className="screen-btn">
                                                                <option selected value='100000000'>Any</option>
                                                                <option  value="50000">Under 50K</option>
                                                                <option value="100000">Under 100K</option>
                                                                <option value="500000">Under 500K</option>
                                                                <option value="750000">Under 750K</option>
                                                                <option value="1000000">Under 1M</option>
                                                                <option value="5000000">Over 50K</option>
                                                                <option value="100000000">Over 100K</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label> 

                                                After-Hours Change:
                                                    <select className="screen-btn">
                                                                <option selected value='100000000'>Any</option>
                                                                <option  value="50000">Under 50K</option>
                                                                <option value="100000">Under 100K</option>
                                                                <option value="500000">Under 500K</option>
                                                                <option value="750000">Under 750K</option>
                                                                <option value="1000000">Under 1M</option>
                                                                <option value="5000000">Over 50K</option>
                                                                <option value="100000000">Over 100K</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                        </Col>
                                    </Row>
  
                                </Container>
                                <div className = 'sectioncls'>
                                 <Tabs
                                    defaultActiveKey="overview"
                                    transition={false}
                                    id="noanim-tab"
                                    >
                                    <Tab eventKey="overview" title="Overview">
                                     {/* { count > 0  &&   <Overview  rowData = {rowData} count = {count} />     }                    */}
                                    </Tab>
                                        
                                    <Tab eventKey="valuation" title="Valuation">
                                           { count > 0  &&   <Valuation rowData = {rowData} count = {count} />    }     
                                    </Tab>
                                    <Tab eventKey="finanacial" title="Finanacial">
                                             { count > 0  &&   <Financial rowData = {rowData} count = {count} />   }    
                                    </Tab>
                                    <Tab eventKey="ownership" title="Ownership">
                                           { count > 0  &&   <Ownership rowData = {rowData} count = {count} />   }
                                    </Tab>
                                    <Tab eventKey="performance" title="Performance">
                                      
                                      { count > 0  &&  <Performance rowData = {rowData} count = {count} />   }
                                    </Tab>
                                    <Tab eventKey="technical" title="Technical">
                                            { count > 0  &&   <Technical rowData = {rowData} count = {count} />  } 
                                    </Tab>
                                    <Tab eventKey="custom" title="Custom">
                                             { count > 0  &&  <Custom rowData = {rowData} count = {count} />   }
                                    </Tab>
                                    <Tab eventKey="charts" title="Charts">
                                           { count > 0  &&    <Chart rowData = {rowData} count = {count} />}
                                    </Tab>
                                
                                    <Tab eventKey="basic" title="Basic">
                                             { count > 0  &&  <Basic rowData = {rowData}/>}
                                    </Tab>
 
                                    <Tab eventKey="news" title="News">
                                          { count > 0  &&  <NewsSub rowData = {rowData}/> }
                                    </Tab>
                                    <Tab eventKey="snapshot" title="Snapshot">
                                             { count > 0  &&   <SnapShort rowData = {rowData} />       }
                                    </Tab>
                                </Tabs>

                                </div>
    </div>
 );
}		
export default Technicals;