import React, { useEffect, useState } from 'react';
import { Container , Tabs , Tab, Form ,Row, Col} from 'react-bootstrap'
import finviz from 'finviz-screener'
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
const finvizData = require('@stonksjs/finviz');


function Descriptive(props) {
 
    const [rowData, setRowData] = useState()
    const [count, setCount] = useState()

    const[exchange, setExchange] = useState('');
    const[country, setCountry] = useState('USA');
    const[industry, setIndustry] = useState('');
    const[sector, setSector] = useState('Technology');
    const[earningsDate, setEarningsDate] = useState('');
    const[dividendYield, setDividendYield] = useState('');
    const[analystRecom, setAnalystRecom] = useState('');
    const[averageVolume, setAverageVolume] = useState('');
    const[relativeVolume, setRelativeVolume] = useState('');
    const[currentVolume, setCurrentVolume] = useState('');
    const[price, setPrice] = useState('');
    const[targetPrice, setTargetPrice] = useState('');
    const[float, setFloat] = useState('');
    const[floatShort, setFloatShort] = useState('');
    const[optionShort, setOptionShort] = useState('');
    const[index, setIndex] = useState('');
    const[ipoDate, setIpoDate] = useState('');
    const[marketCap, setMarketCap] = useState('');
    const[sharesOutstanding, setSharesOutstanding] = useState('');
 
    let selectedOptionId = 0;
   
   async  function  fetchData(){

        const options = {
            pageLimit: 1,
            requestTimeout: 1000,
        }
        
        const tickers = await finviz(options)
                .analystRecom(analystRecom)
                .averageVolume(averageVolume)
                .currentVolume(currentVolume)
                .exchange(exchange)
                .sector(sector)
                .industry(industry)
                .country(country)
                .price(price)
                .targetPrice(targetPrice) 
                .marketCap(marketCap)
                .dividendYield(dividendYield)
                .float(float)
                .floatShort(floatShort)
                .optionShort(optionShort)
                .index(index)
                .ipoDate(ipoDate)
                .sharesOutstanding(sharesOutstanding)
                .earningsDate(earningsDate)
                .relativeVolume(relativeVolume)
                .scan()
         setCount(tickers.length)
         console.log(tickers)
        var gainData = []
        let sl = 0
        // tickers.forEach(async  key=>{

            for(var i = 0 ; i <= 5; i++){
                const data = await finvizData.quote(tickers[i]);
                  fetch(`https://financialmodelingprep.com/api/v3/profile/${tickers[i]}?apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
                  .then(res=>res.json())
                  .then((result)=> {
                    sl++
                    console.log(result)
                   const scrData = {
                                sl: sl,
                                symbol: result[0].symbol,
                                ticker: <Link to = {`/chart/${result[0].symbol}`}>{result[0].symbol}</Link>,
                                sector:result[0].sector,
                                earningDate:data.earnings,
                                exchange:result[0].exchange,
                                company:result[0].companyName,
                                targetPrice:data.targetPrice,
                                index:data.index,
                                industry:result[0].industry, 
                                country: result[0].country,
                                marketCap:nFormatter(data.marketCap),
                                avarageVolume:data.avgVolume, 
                                dividendYield:data.dividend,
                                volume:data.volume,
                                float: data.shsFloat,
                                optionShort:data.optionable, 
                                floatShort:data.shortFloat,
                                relativeVolume:data.elVolume,
                                sharesOutstanding:data.shsOutstand,
                                price:data.price,
                                analystRecom:data.recom,                                      
                   }
                   gainData.push(scrData)
                }) 
             
            }       
           setRowData(gainData)   
        } 
    useEffect(() => {
          fetchData()
      }, [
        analystRecom,
        averageVolume,
        currentVolume,
        exchange,
        sector,
        industry,
        country,
        price,
        targetPrice,
        marketCap,
        dividendYield,
        float,
        floatShort,
        optionShort,
        index,
        ipoDate,
        sharesOutstanding,
        earningsDate,
        relativeVolume,
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

    return (<div>
        
            <Container fluid className='screener'>
           
                     <Row>
                        <Col xs={12} md={3} className='positn'>
                            <Form>
                                <Form.Label>
                                 Exchange:
                                    <select className="screen-btn" onChange={(e)=>  setExchange(e.target.value)} defaultValue={selectedOptionId}>
                                                <option selected value='NASDAQ'>Any</option>
                                                <option value="NYSE">NYSE</option>
                                                <option value="NASD">NASDAQ</option>
                                                <option value="AMEX">AMEX</option>
                                    </select>
                                 </Form.Label>
                              </Form> 
                            <Form >
                                <Form.Label>
                                Sector:                
                                    <select className="screen-btn" onChange={(e)=>  setSector(e.target.value)} defaultValue={selectedOptionId}>
                                                <option selected value=''>Any</option>
                                                <option value="Basic Materials">Basic Materials</option>
                                                <option value="Communication Services">Communication Services</option>
                                                <option value="Consumer Cyclical">Consumer Cyclical</option>
                                                <option value="Consumer Defensive">Consumer Defensive</option>
                                                <option value="Energy">Energy</option>
                                                <option value="Financial">Financial</option>
                                                <option value="Healthcare">Healthcare</option>
                                                <option value="Industrials">Industrials</option>
                                                <option value="Real Estate">Real Estate</option>
                                                <option value="Technology">Technology</option>
                                                <option value="Utilities">Utilities</option>
                                    </select>
                                </Form.Label>
                            </Form>
                            <Form >
                                <Form.Label>
                                    Earning Date:
                                    <select className="screen-btn" onChange={(e)=>  setEarningsDate(e.target.value)} defaultValue={selectedOptionId}>
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
                                    </select>
                                </Form.Label>
                            </Form>
                            <Form >
                                     <Form.Label>
                                                Price:
                                                <select className="screen-btn" onChange={(e)=>  setPrice(e.target.value)} defaultValue={selectedOptionId}>                                   
                                                        <option selected value="">Any</option>
                                                        <option value="Under $1">Under $1</option>
                                                        <option value="Under $2">Under $2</option>
                                                        <option value="Under $5">Under $5</option>
                                                        <option value="Under $10">Under $10</option>
                                                        <option value="Under $15">Under $15</option>
                                                        <option value="Under $20">Under $20</option>
                                                        <option value=">Under $40">Under $40</option>
                                                        <option value="Under $50">Under $50</option>
                                                        <option value="Over $100">Over $100</option>
                                                        <option value="$1 to $5">$1 to $5</option>             
                                                        <option value="$1 to $10">$1 to $10</option>
                                                        <option value="$1 to $20">$1 to $20</option>
                                                        <option value="$5 to $10">$5 to $10</option>
                                                        <option value="$5 to $20">$5 to $20</option>
                                                        <option value="$5 to $50">$5 to $50</option>
                                                        <option value="$5 to $50">$5 to $50</option>
                                                        <option value="$20 to $50">$20 to $50</option>
                                                        <option value="$50 to $100">$50 to $100</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                     <Form >
                                <Form.Label>
                                Target Price:                
                                <select className="screen-btn" onChange={(e)=>  setTargetPrice(e.target.value)} defaultValue={selectedOptionId}>                                   
                                        <option selected="selected" value="">Any</option>
                                        <option value="50% Above Price">50% Above Price</option>
                                        <option value="40% Above Price">40% Above Price</option>
                                        <option value="30% Above Price">30% Above Price</option>
                                        <option value="20% Above Price">20% Above Price</option>
                                        <option value="10% Above Price">10% Above Price</option>
                                        <option value="5% Above Price">5% Above Price</option>
                                        <option value="Above Price">Above Price</option>
                                        <option value="Below Price">Below Price</option>
                                        <option value="5% Below Price">5% Below Price</option>
                                        <option value="10% Below Price">10% Below Price</option>
                                        <option value="20% Below Price">20% Below Price</option>
                                        <option value="30% Below Price">30% Below Price</option>
                                        <option value="40% Below Price">40% Below Price</option>
                                        <option value="50% Below Price">50% Below Price</option>
                                </select>
                                </Form.Label>
                            </Form>
                        </Col>
                        <Col xs={12} md={3} className='positn'>
                        <Form >
                                <Form.Label>
                                Index:
                                    <select className="screen-btn"  onChange={(e)=>  setIndex(e.target.value)} defaultValue={selectedOptionId}>
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
                                                <option selected value=''>Any</option>
                                                <option value="Advertising Agencies">Advertising Agencies</option>
                                                <option value="Aerospace & Defense">Aerospace & Defense</option>
                                                <option value="Agricultural Inputs">Agricultural Inputs</option>
                                                <option value="Airlines">Airlines</option>
                                                <option value="Airports & Air Services">Airports & Air Services</option>
                                                <option value="Aluminum">Aluminum</option>
                                                <option value="Apparel Manufacturing">Apparel Manufacturing</option>
                                                <option value="Apparel Retail">Apparel Retail</option>
                                                <option value="Asset Management">Asset Management</option>
                                                <option value="Banks - Diversified">Banks - Diversified</option>
                                                <option value="Banks - Regional">Banks - Regional</option>
                                                <option value="Beverages - Brewers">Beverages - Brewers</option>
                                                <option value="Beverages - Non-Alcoholic">Beverages - Non-Alcoholic</option>
                                                <option value="Biotechnology">Biotechnology</option>
                                                <option value="Broadcasting">Broadcasting</option>
                                                <option value="Building Materials">Building Materials</option>
                                                <option value="Building Products & Equipment">Building Products & Equipment</option>
                                    </select>
                                </Form.Label>
                            </Form> 
                            <Form >
                                <Form.Label>
                                Country:
                                    <select className="screen-btn" onChange={(e)=>  setCountry(e.target.value)} defaultValue={selectedOptionId}>
                                                <option selected value=''>Any</option>
                                                <option value="USA">United States </option>
                                                <option value="Asia">Asia</option>
                                                <option value="Europe">Europe</option>
                                                <option value="Latin America">Latin America</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="Canada">Canada</option>
                                                <option value="China & Hong Kong">China & Hong Kong</option>
                                                <option value="Finland">Finland</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Russia">Russia</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                    </select>

                                </Form.Label>
                            </Form>
                            <Form >
                                    <Form.Label>
                                    Market Cap:
                                            <select className="screen-btn" onChange={(e)=>  setMarketCap(e.target.value)} defaultValue={selectedOptionId}>
                                            <option value="">Any</option>
                                            <option value="mega">Mega ($200bln and more)</option>
                                            <option selected="selected" value="large">Large ($10bln to $200bln)</option>
                                            <option value="mid">Mid ($2bln to $10bln)</option>
                                            <option value="small">Small ($300mln to $2bln)</option>
                                            <option value="micro">Micro ($50mln to $300mln)</option>
                                            <option value="nano">Nano (under $50mln)</option>
                                            <option value="largeover">+Large (over $10bln)</option>
                                            <option value="midover">+Mid (over $2bln)</option>
                                            <option value="smallover">+Small (over $300mln)</option>
                                            <option value="microover">+Micro (over $50mln)</option>
                                            <option value="largeunder">-Large (under $200bln)</option>
                                            <option value="midunder">-Mid (under $10bln)</option>
                                            <option value="smallunder">-Small (under $2bln)</option>
                                            <option value="microunder">-Micro (under $300mln)</option>
                                            <option value="frange">Custom (Elite only)</option>
                                    </select>
                                </Form.Label>                
                            </Form>
                            <Form >
                                <Form.Label>
                                Avarage Volume:
                                <select className="screen-btn" onChange={(e)=>  setAverageVolume(e.target.value)} defaultValue={selectedOptionId}>
                                                <option selected value=''>Any</option>
                                                <option  value="Under 50K">Under 50K</option>
                                                <option value="Under 100K">Under 100K</option>
                                                <option value="Under 500K">Under 500K</option>
                                                <option value="Under 750K">Under 750K</option>
                                                <option value=">Under 1M">Under 1M</option>
                                                <option value="Over 50K">Over 50K</option>
                                                <option value="Over 100K">Over 100K</option>
                                                <option value="Over 200K">Over 200K</option>
                                                <option value="Over 300K">Over 300K</option>
                                                <option value="Over 400K">Over 400K</option>
                                                <option value="Over 500K">Over 500K</option>
                                                <option value="Over 750K">Over 750K</option>
                                                <option value="Over 1M">Over 1M</option>
                                                <option value="Over 2M">Over 2M</option>
                                                <option value="100K to 500K">100K to 500K</option>
                                                <option value="500K to 1M">500K to 1M</option>
                                                <option value="500K to 10M">500K to 10M</option>
                                    </select>
                                </Form.Label>
                            </Form>
                        </Col>
                     
                        <Col xs={12} md={3} className='positn'>
                                            <Form >
                                                <Form.Label>
                                                Dividend Yield:
                      
                                                    <select className="screen-btn" onChange={(e)=>  setDividendYield(e.target.value)} defaultValue={selectedOptionId}>
                                                            <option selected value="None (0%)">None (0%)</option>
                                                            <option value="Positive (>0%)">Positive (&gt;1%)</option>
                                                            <option value="High (>5%)">High (&gt;2%)</option>
                                                            <option value="Very High (>10%)">Very High (&gt;10%)</option>
                                                            <option value="Over 1%">Over 1%</option>
                                                            <option value="Over 2%">Over 2%</option>
                                                            <option value="Over 3%">Over 3%</option>
                                                            <option value="Over 4%">Over 4%</option>
                                                            <option value="Over 5%">Over 5%</option>
                                                            <option value="Over 6%">Over 6%</option>
                                                            <option value="Over 7%">Over 7%</option>
                                                            <option value="Over 10%">Over 10%</option>
                                                    </select>
                                                </Form.Label>  
                                            </Form> 
                                            <Form >
                                                <Form.Label>

                                                IPO Date:
                                                    <select className="screen-btn" onChange={(e)=>  setIpoDate(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value=''>Any</option>
                                                                <option  value="Today">Today</option>
                                                                <option value="In the last week">In the last week</option>
                                                                <option value="In the last month">In the last month</option>
                                                                <option value="In the last quarter">In the last quarter</option>
                                                                <option value="In the last year">In the last year</option>
                                                                <option value="In the last 2 years">In the last 2 years</option>
                                                                <option value="In the last 3 years">In the last 3 years</option>
                                                                <option value="In the last 5 years">In the last 5 years</option>
                                                                <option value="More than a year ago">More than a year ago</option>
                                                                <option value="More than 5 years ago">More than 5 years ago</option>
                                                                <option value="More than 10 years ago">More than 10 years ago</option>
                                                                <option value="More than 15 years ago">More than 15 years ago</option>
                                                                <option value="More than 20 years ago">More than 20 years ago</option>
                                                                <option value="More than 25 years ago">More than 25 years ago</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>

                                                Current Volume:
                                                    <select className="screen-btn" onChange={(e)=>  setCurrentVolume(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value=''>Any</option>
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
                                                    <select className="screen-btn" onChange={(e)=>  setFloat(e.target.value)} defaultValue={selectedOptionId}>
                                                             
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
                                                    </select>
                                                </Form.Label>
                                                
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                Option/Short:
                                                    <select className="screen-btn" onChange={(e)=>  setOptionShort(e.target.value)} defaultValue={selectedOptionId}>
                                                                <option selected value=''>Any</option>
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
                                                    <select className="screen-btn" onChange={(e)=>  setFloatShort(e.target.value)} defaultValue={selectedOptionId}>                                   
                                                        <option selected value="">Any</option>
                                                        <option value="Low (<5%)">Low (5%)</option>
                                                        <option value="High (>20%)">High (20%)</option>
                                                        <option value="Under 5%">Under 5%</option>
                                                        <option value="Under 10%">Under 10%</option>
                                                        <option value="Under 15%">Under 15%</option>
                                                        <option value="Under 25%">Under 25%</option>
                                                        <option value="Under 30%">Under 30%</option>
                                                        <option value="Over 5%">Over 5%</option>
                                                        <option value="Over 15%">Over 15%</option>
                                                        <option value="Over 20%">'Over 20%</option>
                                                        <option value="Over 25%">Over 25%</option>
                                                        <option value="Over 30%">'Over 30%</option>
                                                    </select>
                                                </Form.Label>
                                            </Form> 
                                            <Form >
                                                <Form.Label>
                                                Relative Volume:
                                                    <select className="screen-btn" onChange={(e)=>  setRelativeVolume(e.target.value)} defaultValue={selectedOptionId}>
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
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                Shares Outstanding:
                                                    <select className="screen-btn" onChange={(e)=>  setSharesOutstanding(e.target.value)} defaultValue={selectedOptionId}>                                                         
                                                                <option selected="selected" value="">Any</option>
                                                                <option value="Under 1M">Under 1M</option>
                                                                <option value="Under 5M">Under 5M</option>
                                                                <option value="Under 10M">Under 10M</option>
                                                                <option value="Under 20M">Under 20M</option>
                                                                <option value="Under 50M">Under 50M</option>
                                                                <option value="Under 100M">Under 100M</option>
                                                                <option value="Over 1M">Over 1M</option>
                                                                <option value="Over 2M">Over 2M</option>
                                                                <option value="Over 5M">Over 5M</option>
                                                                <option value="Over 10M">Over 10M</option>
                                                                <option value="Over 20M">Over 20M</option>
                                                                <option value="Over 50M">Over 50M</option>
                                                                <option value="Over 100M">Over 100M</option>
                                                                <option value="Over 200M">Over 200M</option>
                                                                <option value="Over 500M">Over 500M</option>
                                                                <option value="Over 1000M">Over 1000M</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                           
                                            <Form >
                                                <Form.Label>
                                                Analyst Recom:
                                                <select className="screen-btn" onChange={(e)=>   setAnalystRecom(e.target.value)} defaultValue={selectedOptionId}>                                   
                                                   
                                                        <option selected="selected" value="">Any</option>
                                                        <option value="strongbuy">Strong Buy</option>
                                                        <option value="buybetter">Buy or better</option>
                                                        <option value="buy">Buy</option>
                                                        <option value="holdbetter">Hold or better</option>
                                                        <option value="hold">Hold</option>
                                                        <option value="holdworse">Hold or worse</option>
                                                        <option value="sell">Sell</option>
                                                        <option value="sellworse">Sell or worse</option>
                                                        <option value="strongsell">Strong Sell (5)</option>
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
                                       count > 0  &&   <Overview  rowData = {rowData} count = {count} /> 
                                    } 
                                                             
                                    </Tab>
                                        
                                    <Tab eventKey="valuation" title="Valuation">
                                            { count > 0  &&  <Valuation rowData = {rowData} count = {count} /> }        
                                    </Tab>
                                    <Tab eventKey="finanacial" title="Finanacial">
                                            {  count > 0  &&  <Financial rowData = {rowData} count = {count} /> }      
                                    </Tab>
                                    <Tab eventKey="ownership" title="Ownership">
                                              { count > 0  && <Ownership rowData = {rowData} count = {count} />}   
                                    </Tab>
                                    <Tab eventKey="performance" title="Performance">
                                      
                                            { count > 0  &&  <Performance rowData = {rowData} count = {count} /> }  
                                    </Tab>
                                    <Tab eventKey="technical" title="Technical">
                                           {  count > 0  && <Technical rowData = {rowData} count = {count} /> }  
                                    </Tab>
                                    <Tab eventKey="custom" title="Custom">
                                         {   count > 0  && <Custom rowData = {rowData} count = {count} />   }
                                    </Tab>
                                    <Tab eventKey="charts" title="Charts">
                                            {  count > 0  && <Chart rowData = {rowData} count = {count} />}
                                    </Tab>
                                
                                    <Tab eventKey="basic" title="Basic">
                                         {   count > 0  &&  <Basic rowData = {rowData}/> }
                                    </Tab>
 
                                    <Tab eventKey="news" title="News">
                                          {   count > 0  &&   <NewsSub rowData = {rowData}/> }
                                    </Tab>
                                    <Tab eventKey="snapshot" title="Snapshot">
                                          {   count > 0  &&   <SnapShort rowData = {rowData} />}
                                    </Tab>
                                </Tabs>

                                </div>
    </div>
 );
}		
export default Descriptive;