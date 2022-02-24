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


function Descriptive(props) {
 
    const [rowData, setRowData] = useState('')
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
 
    let selectedOptionId = 0;
    
  function  fetchData(){
        axios.get(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=${marketCapMoreThan}&betaMoreThan=${betaMoreThan}&priceMoreThan=${priceMoreThan}&volumeMoreThan=${volumeMoreThan}&sector=${sector}&industry=${industry}&country=${country}&exchange=${exchange}&dividendMoreThan=${dividendMoreThan}&isActivelyTrading=${isActivelyTrading}&limit=${limit}&apikey=9f8bf374d13311bf6527af0ea58ebdb6`
           )
           .then((response) => {
             setCount(response.data.length);
            const gainData =  response.data.map((d, key) => {
                return  {
                    sl: key + 1,
                    symbol:d.symbol,
                    ticker: <Link to = {`/chart/${d.symbol}`}>{d.symbol}</Link>,
                    company:d.companyName,
                    sector:d.sector,
                    industry:d.industry,
                    country:d.country,
                    marketCap: nFormatter(d.marketCap),
                    price:  d.price,
                    beta: d.beta.toFixed(3),
                    volume:numberWithCommas(d.volume),
                  }
                });
               setRowData(gainData)
            })
            
            .catch(error => {
               alert(error);
            });
      }

    useEffect(() => {
          fetchData()
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
                                Exchange:
                                    <select className="screen-btn" onChange={(e)=>  setExchange(e.target.value)} defaultValue={selectedOptionId}>
                                                <option selected value='NASDAQ'>Any</option>
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
                                    Limit:
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
                                Sector:                
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
                                    Earning Date:
                                    <select className="screen-btn" onChange={(e)=>  setLimit(e.target.value)} defaultValue={selectedOptionId}>
                                        <option selected="selected" value="">Any</option>
                                        <option value="today">Today</option>
                                        <option value="todaybefore">Today Before Market Open</option>
                                        <option value="todayafter">Today After Market Close</option>
                                        <option value="tomorrow">Tomorrow</option>
                                        <option value="tomorrowbefore">Tomorrow Before Market Open</option>
                                        <option value="tomorrowafter">Tomorrow After Market Close</option>
                                        <option value="yesterday">Yesterday</option>
                                        <option value="yesterdaybefore">Yesterday Before Market Open</option>
                                        <option value="yesterdayafter">Yesterday After Market Close</option>
                                        <option value="nextdays5">Next 5 Days</option>
                                        <option value="prevdays5">Previous 5 Days</option>
                                        <option value="thisweek">This Week</option>
                                        <option value="nextweek">Next Week</option>
                                        <option value="prevweek">Previous Week</option>
                                        <option value="thismonth">This Month</option>
                                        <option value="modal">Custom (Elite only)</option>
                                    </select>
                                </Form.Label>
                            </Form>
                            <Form >
                                <Form.Label>
                                Target Price:                
                                <select className="screen-btn" onChange={(e)=>  setPriceMoreThan(e.target.value)} defaultValue={selectedOptionId}>                                   
                                        <option selected="selected" value="">Any</option>
                                        <option value="a50">50% Above Price</option>
                                        <option value="a40">40% Above Price</option>
                                        <option value="a30">30% Above Price</option>
                                        <option value="a20">20% Above Price</option>
                                        <option value="a10">10% Above Price</option>
                                        <option value="a5">5% Above Price</option>
                                        <option value="above">Above Price</option>
                                        <option value="below">Below Price</option>
                                        <option value="b5">5% Below Price</option>
                                        <option value="b10">10% Below Price</option>
                                        <option value="b20">20% Below Price</option>
                                        <option value="b30">30% Below Price</option>
                                        <option value="b40">40% Below Price</option>
                                        <option value="b50">50% Below Price</option>
                                </select>
                                </Form.Label>
                            </Form>
                        </Col>
                        <Col xs={12} md={3} className='positn'>
                        <Form >
                                <Form.Label>
                                Index:
                                    <select className="screen-btn">
                                                <option selected="selected" value="">Any</option>
                                                <option value="sp500">S&amp;P 500</option>
                                                <option value="dji">DJIA</option>
                                    </select>
                                </Form.Label>
                            </Form> 
                            <Form >
                                <Form.Label>
                                Industry:
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
                                Country:
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
                                    Market Cap:
                                            <select className="screen-btn" onChange={(e)=>  setMarketCapMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                <option selected value="10000000000">Any</option>
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
                                Avarage Volume:
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
                        </Col>
                        <Col xs={12} md={3} className='positn'>
                                            <Form >
                                                <Form.Label>
                                                Dividend Yield:
                      
                                                    <select className="screen-btn" onChange={(e)=>  setDividendMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                            <option selected value="0">None (0%)</option>
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

                                                IPO Date:
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

                                                Current Volume:
                                                    <select className="screen-btn" onChange={(e)=>  setVolumeMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='100000000'>Any</option>
                                                                <option selected="selected" value="">Any</option>
                                                                <option value="u50">Under 50K</option>
                                                                <option value="u100">Under 100K</option>
                                                                <option value="u500">Under 500K</option>
                                                                <option value="u750">Under 750K</option>
                                                                <option value="u1000">Under 1M</option>
                                                                <option value="o0">Over 0</option>
                                                                <option value="o50">Over 50K</option>
                                                                <option value="o100">Over 100K</option>
                                                                <option value="o200">Over 200K</option>
                                                                <option value="o300">Over 300K</option>
                                                                <option value="o400">Over 400K</option>
                                                                <option value="o500">Over 500K</option>
                                                                <option value="o750">Over 750K</option>
                                                                <option value="o1000">Over 1M</option>
                                                                <option value="o2000">Over 2M</option>
                                                                <option value="o5000">Over 5M</option>
                                                                <option value="o10000">Over 10M</option>
                                                                <option value="o20000">Over 20M</option>
                                                                <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>

                                                Float:
                                                    <select className="screen-btn" onChange={(e)=>  setVolumeMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='100000000'>Any</option>
                                                                <option selected="selected" value="">Any</option>
                                                                <option value="u1">Under 1M</option>
                                                                <option value="u5">Under 5M</option>
                                                                <option value="u10">Under 10M</option>
                                                                <option value="u20">Under 20M</option>
                                                                <option value="u50">Under 50M</option>
                                                                <option value="u100">Under 100M</option>
                                                                <option value="o1">Over 1M</option>
                                                                <option value="o2">Over 2M</option>
                                                                <option value="o5">Over 5M</option>
                                                                <option value="o10">Over 10M</option>
                                                                <option value="o20">Over 20M</option>
                                                                <option value="o50">Over 50M</option>
                                                                <option value="o100">Over 100M</option>
                                                                <option value="o200">Over 200M</option>
                                                                <option value="o500">Over 500M</option>
                                                                <option value="o1000">Over 1000M</option>
                                                                <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                Option/Short:
                                                    <select className="screen-btn" onChange={(e)=>  setIsActivelyTrading(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value='true'>Any</option>
                                                                <option value="optionable">Optionable</option>
                                                                <option value="shortable">Shortable</option>
                                                                <option value="optionable and shortable">Optionable and Shortable</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                        </Col>
                                        <Col xs={12} md={3} className='positn'>
                                            <Form >
                                                <Form.Label>
                                                Float Short:
                                                    <select className="screen-btn" onChange={(e)=>  setPriceMoreThan(e.target.value)} defaultValue={selectedOptionId}>                                   
                                                        <option selected value="500">Any</option>
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
                                                Relative Volume:
                                                    <select className="screen-btn" onChange={(e)=>  setBetaMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                    <option selected="selected" value="">Any</option>
                                                    <option value="o10">Over 10</option>
                                                    <option value="o5">Over 5</option>
                                                    <option value="o3">Over 3</option>
                                                    <option value="o2">Over 2</option>
                                                    <option value="o1.5">Over 1.5</option>
                                                    <option value="o1">Over 1</option>
                                                    <option value="o0.75">Over 0.75</option>
                                                    <option value="o0.5">Over 0.5</option>
                                                    <option value="o0.25">Over 0.25</option>
                                                    <option value="u2">Under 2</option>
                                                    <option value="u1.5">Under 1.5</option>
                                                    <option value="u1">Under 1</option>
                                                    <option value="u0.75">Under 0.75</option>
                                                    <option value="u0.5">Under 0.5</option>
                                                    <option value="u0.25">Under 0.25</option>
                                                    <option value="u0.1">Under 0.1</option>
                                                    <option value="frange">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                Shares Outstanding:
                                                    <select className="screen-btn" onChange={(e)=>  setBetaMoreThan(e.target.value)} defaultValue={selectedOptionId}>                                                         
                                                                <option selected="selected" value="">Any</option>
                                                                <option value="u1">Under 1M</option>
                                                                <option value="u5">Under 5M</option>
                                                                <option value="u10">Under 10M</option>
                                                                <option value="u20">Under 20M</option>
                                                                <option value="u50">Under 50M</option>
                                                                <option value="u100">Under 100M</option>
                                                                <option value="o1">Over 1M</option>
                                                                <option value="o2">Over 2M</option>
                                                                <option value="o5">Over 5M</option>
                                                                <option value="o10">Over 10M</option>
                                                                <option value="o20">Over 20M</option>
                                                                <option value="o50">Over 50M</option>
                                                                <option value="o100">Over 100M</option>
                                                                <option value="o200">Over 200M</option>
                                                                <option value="o500">Over 500M</option>
                                                                <option value="o1000">Over 1000M</option>
                                                                <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                Price:
                                                <select className="screen-btn" onChange={(e)=>  setPriceMoreThan(e.target.value)} defaultValue={selectedOptionId}>                                   
                                                        <option selected value="500">Any</option>
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
                                                Analyst Recom:
                                                <select className="screen-btn" onChange={(e)=>  setPriceMoreThan(e.target.value)} defaultValue={selectedOptionId}>                                   
                                                        <option selected value="500">Any</option>
                                                        <option selected="selected" value="">Any</option>
                                                        <option value="strongbuy">Strong Buy (1)</option>
                                                        <option value="buybetter">Buy or better</option>
                                                        <option value="buy">Buy</option>
                                                        <option value="holdbetter">Hold or better</option>
                                                        <option value="hold">Hold</option>
                                                        <option value="holdworse">Hold or worse</option>
                                                        <option value="sell">Sell</option>
                                                        <option value="sellworse">Sell or worse</option>
                                                        <option value="strongsell">Strong Sell (5)</option>
                                                        <option value="modal">Custom (Elite only)</option>
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
                                    {
                                       rowData  &&   <Overview  rowData = {rowData} count = {count} /> 
                                    } 
                                                             
                                    </Tab>
                                        
                                    <Tab eventKey="valuation" title="Valuation">
                                            {rowData  &&  <Valuation rowData = {rowData} count = {count} /> }        
                                    </Tab>
                                    <Tab eventKey="finanacial" title="Finanacial">
                                            { rowData  &&  <Financial rowData = {rowData} count = {count} /> }      
                                    </Tab>
                                    <Tab eventKey="ownership" title="Ownership">
                                              {rowData  && <Ownership rowData = {rowData} count = {count} />}   
                                    </Tab>
                                    <Tab eventKey="performance" title="Performance">
                                      
                                            {rowData  &&  <Performance rowData = {rowData} count = {count} /> }  
                                    </Tab>
                                    <Tab eventKey="technical" title="Technical">
                                           { rowData  && <Technical rowData = {rowData} count = {count} /> }  
                                    </Tab>
                                    <Tab eventKey="custom" title="Custom">
                                         {  rowData  &&<Custom rowData = {rowData} count = {count} />   }
                                    </Tab>
                                    <Tab eventKey="charts" title="Charts">
                                            { rowData  && <Chart rowData = {rowData} count = {count} />}
                                    </Tab>
                                
                                    <Tab eventKey="basic" title="Basic">
                                         {  rowData  &&  <Basic rowData = {rowData}/> }
                                    </Tab>
 
                                    <Tab eventKey="news" title="News">
                                          {  rowData  &&   <NewsSub rowData = {rowData}/> }
                                    </Tab>
                                    <Tab eventKey="snapshot" title="Snapshot">
                                          {  rowData  &&   <SnapShort rowData = {rowData} />}
                                    </Tab>
                                </Tabs>

                                </div>
    </div>
 );
}		
export default Descriptive;