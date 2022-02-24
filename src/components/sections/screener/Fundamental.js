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




function Fundamental(props) {
    
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

    function fetchData() {
        axios.get(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=${marketCapMoreThan}&betaMoreThan=${betaMoreThan}&priceMoreThan=${priceMoreThan}&volumeMoreThan=${volumeMoreThan}&sector=${sector}&industry=${industry}&country=${country}&exchange=${exchange}&dividendMoreThan=${dividendMoreThan}&isActivelyTrading=${isActivelyTrading}&limit=${limit}&apikey=9f8bf374d13311bf6527af0ea58ebdb6`
           )
           .then((response) => {
             setCount(response.data.length);
             const gainData =  response.data.map((d, key) => {
                return  {
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
                                                P/E:
                                                    <select className="screen-btn" >
                                                    
                                                    <option selected="selected"  value="">Any</option>
                                                    <option  value="low">Low (&lt;15)</option>
                                                    <option value="profitable">Profitable (&gt;0)</option>
                                                    <option value="high">High (&gt;50)</option>
                                                    <option value="u5">Under 5</option>
                                                    <option value="u10">Under 10</option>
                                                    <option value="u15">Under 15</option>
                                                    <option value="u20">Under 20</option>
                                                    <option value="u25">Under 25</option>
                                                    <option value="u30">Under 30</option>
                                                    <option value="u35">Under 35</option>
                                                    <option value="u40">Under 40</option>
                                                    <option value="u45">Under 45</option>
                                                    <option value="u50">Under 50</option>
                                                    <option value="o5">Over 5</option>
                                                    <option value="o10">Over 10</option>
                                                    <option value="o15">Over 15</option>
                                                    <option value="o20">Over 20</option>
                                                    <option value="o25">Over 25</option>
                                                    <option value="o30">Over 30</option>
                                                    <option value="o35">Over 35</option>
                                                    <option value="o40">Over 40</option>
                                                    <option value="o45">Over 45</option>
                                                    <option value="o50">Over 50</option>
                                                    <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                Price/Cash:
                                                    <select className="screen-btn" onChange={(e)=>  setExchange(e.target.value)} defaultValue={selectedOptionId}>
                                                    <option selected="selected"  value="">Any</option>
                                                    <option value="low">Low (&lt;15)</option>
                                                    <option value="profitable">Profitable (&gt;0)</option>
                                                    <option value="high">High (&gt;50)</option>
                                                    <option value="u5">Under 5</option>
                                                    <option value="u10">Under 10</option>
                                                    <option value="u15">Under 15</option>
                                                    <option value="u20">Under 20</option>
                                                    <option value="u25">Under 25</option>
                                                    <option value="u30">Under 30</option>
                                                    <option value="u35">Under 35</option>
                                                    <option value="u40">Under 40</option>
                                                    <option value="u45">Under 45</option>
                                                    <option value="u50">Under 50</option>
                                                    <option value="o5">Over 5</option>
                                                    <option value="o10">Over 10</option>
                                                    <option value="o15">Over 15</option>
                                                    <option value="o20">Over 20</option>
                                                    <option value="o25">Over 25</option>
                                                    <option value="o30">Over 30</option>
                                                    <option value="o35">Over 35</option>
                                                    <option value="o40">Over 40</option>
                                                    <option value="o45">Over 45</option>
                                                    <option value="o50">Over 50</option>
                                                    <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form> 
                                            <Form >
                                                <Form.Label>
                                                EPS Growth next 5 year:
                                                    <select className="screen-btn" onChange={(e)=>  setLimit(e.target.value)} defaultValue={selectedOptionId}>
                                                        <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                Return on Equity:                
                                                    <select className="screen-btn" onChange={(e)=>  setSector(e.target.value)} defaultValue={selectedOptionId}>
                                                    <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                 Debt/Equity:                
                                                    <select className="screen-btn" onChange={(e)=>  setSector(e.target.value)} defaultValue={selectedOptionId}>
                                                    <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                             <Form >
                                                <Form.Label>
                                                 Insider Ownership:                
                                                    <select className="screen-btn" onChange={(e)=>  setSector(e.target.value)} defaultValue={selectedOptionId}>
                                                    <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                 P/B:                
                                                    <select className="screen-btn" onChange={(e)=>  setSector(e.target.value)} defaultValue={selectedOptionId}>
                                                    <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                        </Col>
                                        <Col xs={12} md={3} className='positn'>
                                        <Form >
                                                <Form.Label>
                                                Forward P/E:
                                                    <select className="screen-btn" >
                                                    <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                Price/Free Cash Flow:
                                                    <select className="screen-btn" onChange={(e)=>  setIndustry(e.target.value)} defaultValue={selectedOptionId}>
                                                    <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form> 
                                            <Form >
                                                <Form.Label>
                                                Sales Growth Past 5 year:
                                                    <select className="screen-btn" onChange={(e)=>  setCountry(e.target.value)} defaultValue={selectedOptionId}>
                                                    <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                     </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
      
                                                <Form.Label>
                                                Return on Investment:
                                                <select className="screen-btn" onChange={(e)=>  setMarketCapMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label> 
                                                Gross Margin:
                      
                                                    <select className="screen-btn" >
                                                    <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form> 
                                            <Form >
                                                <Form.Label> 
                                                Insider Transaction:
                      
                                                    <select className="screen-btn" onChange={(e)=>  setDividendMoreThan(e.target.value)} defaultValue={selectedOptionId}>
                                                    <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                 EPS Growth past 5 year:                
                                                    <select className="screen-btn" onChange={(e)=>  setSector(e.target.value)} defaultValue={selectedOptionId}>
                                                    <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                        </Col>
                                        <Col xs={12} md={3} className='positn'>
                                            <Form >
                                                <Form.Label> 
                                                PEG:
                      
                                                    <select className="screen-btn" >
                                                    <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form> 
                                            <Form >
                                                <Form.Label> 
                                                EPS Growth this year:
                      
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

                                                EPS Growth qtr over qtr:
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
                                               Current Ratio:
                                                    <select className="screen-btn" onChange={(e)=>  setIsActivelyTrading(e.target.value)} defaultValue={selectedOptionId}>
                                                                
                                                        <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                            <Form >
                                                <Form.Label>
                                                Operating Margin:
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
                                                Institutions Ownership:
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
                                                 LT Debt/Equity:                
                                                    <select className="screen-btn" onChange={(e)=>  setSector(e.target.value)} defaultValue={selectedOptionId}>
                                                       <option selected="selected" value="">Any</option>
                                                        <option value="neg">Negative (&lt;0%)</option>
                                                        <option value="pos">Positive (&gt;0%)</option>
                                                        <option value="poslow">Positive Low (&lt;10%)</option>
                                                        <option value="high">High (&gt;25%)</option>
                                                        <option value="u5">Under 5%</option>
                                                        <option value="u10">Under 10%</option>
                                                        <option value="u15">Under 15%</option>
                                                        <option value="u20">Under 20%</option>
                                                        <option value="u25">Under 25%</option>
                                                        <option value="u30">Under 30%</option>
                                                        <option value="o5">Over 5%</option>
                                                        <option value="o10">Over 10%</option>
                                                        <option value="o15">Over 15%</option>
                                                        <option value="o20">Over 20%</option>
                                                        <option value="o25">Over 25%</option>
                                                        <option value="o30">Over 30%</option>
                                                        <option value="range">Custom (Elite only)</option>
                                                    </select>
                                                </Form.Label>
                                            </Form>
                                        </Col>
                                        <Col xs={12} md={3} className='positn'>
                                            <Form >
                                                <Form.Label>
                                                P/S:
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
                                                EPS Growth next year:
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

                                                Sales Growth qtr over qtr:
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

                                                Quick Ratio:
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

                                                Net Profit Margin:
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

                                               Institutional Transactions:
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
                                                 Payout Ratio:                
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
                                    </Row>
  
                                </Container>
                                <div className = 'sectioncls'>
                                 <Tabs
                                    defaultActiveKey="overview"
                                    transition={false}
                                    id="noanim-tab"
                                    >
                                    <Tab eventKey="overview" title="Overview">
                                    { count > 0  &&  <Overview  rowData = {rowData} count = {count} />  }                      
                                    </Tab>
                                        
                                    <Tab eventKey="valuation" title="Valuation">
                                           { count > 0  &&    <Valuation rowData = {rowData} count = {count} />   }      
                                    </Tab>
                                    <Tab eventKey="finanacial" title="Finanacial">
                                            { count > 0  &&    <Financial rowData = {rowData} count = {count} />  }     
                                    </Tab>
                                    <Tab eventKey="ownership" title="Ownership">
                                           { count > 0  &&   <Ownership rowData = {rowData} count = {count} />  } 
                                    </Tab>
                                    <Tab eventKey="performance" title="Performance">
                                      
                                      { count > 0  &&  <Performance rowData = {rowData} count = {count} />  } 
                                    </Tab>
                                    <Tab eventKey="technical" title="Technical">
                                            { count > 0  &&   <Technical rowData = {rowData} count = {count} />  } 
                                    </Tab>
                                    <Tab eventKey="custom" title="Custom">
                                           { count > 0  &&    <Custom rowData = {rowData} count = {count} />   }
                                    </Tab>
                                    <Tab eventKey="charts" title="Charts">
                                           { count > 0  &&    <Chart rowData = {rowData} count = {count} />}
                                    </Tab>
                                
                                    <Tab eventKey="basic" title="Basic">
                                           { count > 0  &&    <Basic rowData = {rowData}/> }
                                    </Tab>
 
                                    <Tab eventKey="news" title="News">
                                         { count > 0  &&   <NewsSub rowData = {rowData}/> }
                                    </Tab>
                                    <Tab eventKey="snapshot" title="Snapshot">
                                          { count > 0  &&  <SnapShort rowData = {rowData} /> }
                                    </Tab>
                                </Tabs>

                                </div>
    </div>
 );
}		
export default Fundamental;