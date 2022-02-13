import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col ,Table} from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact';
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { useParams } from 'react-router-dom';

const TradingChart = () => {
  const {id} = useParams()
  const tradingRef = useRef(null);
  const [rowData, setRowData] = useState();
  const [symbol, setSymbol] = useState(`${id}`);
  const [price, setPrice] = useState();
  const [volAvg, setVolAvg] = useState();
  const [mktCap, setMktCap] = useState();
  const [change, setChange] = useState();
  const [companyName, setCompanyName] = useState();
  const [currency, setCurrency] = useState();
  const [website, setWebsite] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [ipoDate, setIpoDate] = useState();
  const [sector, setSector] = useState();
  const [image, setImage] = useState();
  const [industry, setIndustry] = useState();
  const [description, setDescription] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();


  useEffect(() => {
  
    fetch(`https://financialmodelingprep.com/api/v3/profile/${id}?apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
     .then(res => res.json())
      .then(
        (result) => {  
        setSymbol(result[0].symbol);
        setPrice(result[0].price);
        setVolAvg(result[0].volAvg);
         setMktCap(result[0].mktCap);
          setChange(result[0].change);
         setCompanyName(result[0].companyName);
         setCurrency(result[0].currency);
         setWebsite(result[0].website);
         setCity(result[0].city);
         setState(result[0].state);
         setZip(result[0].zip);
         setIpoDate(result[0].ipoDate);
         setSector(result[0].sector);
         setImage(result[0].image);
         setIndustry(result[0].industry);
         setDescription(result[0].description.slice(0, 350) + (result[0].length > 350 ? "" : "..."));
         setPhone(result[0].phone);
         setAddress(result[0].address);
         setCountry(result[0].country)

      },

        (error) => {
          console.log(error);
        }
        )

          fetch(`https://financialmodelingprep.com/api/v3/stock_news?tickers=${id}&limit=50&apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
            .then(res => res.json())
            .then(
              (result) => {
                console.log(result);
                const gainData =  result.map(d => {
                  return  {
                      ticker: d.symbol,
                      date:  d.publishedDate,
                      title: <a href  = {d.url} target="_blank" rel="noreferrer">{ d.title}</a>, 
                    }
            });
                 setRowData(gainData)
               
              },
              (error) => {
                console.log(error);
              }
            )
  }, [])
  const datatable = {
    columns: [
        {
          label: 'Date',
          field: 'date',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'date',
          },
        },
        {
          label: 'Ticker',
          field: 'ticker',
          width: 270,
        },
        {
          label: 'Title',
          field: 'title',
          width: 200,
        },  
      ],
      rows: rowData,
    }

  return (<>
    <Container fluid className="mt-4">
       <div class="card">
          <div className="company-info pt-3 pb-3" >
            {
              image ? <>
                  <div className="info-head">
                        <img className="me-2" src={ `${image}`} alt=" " width={100}/>
                  </div>

                  <div className="px-3">
                      <h2>{symbol}</h2>
                      <h4>{companyName}</h4>
                      <span> {industry} |  {sector} | {country} </span>
                  </div>
                </>
              :<>
                <div className="px-3">
                  <h2>{symbol}</h2>
               </div>
               </>
            }

            </div>

          <hr></hr>
          <Row className="mt-5">
            <Col xs={12} md={8}>
                <TradingViewWidget  symbol={`${id}`}  theme={Themes.DARK}  locale="en"  ref={tradingRef} />
            </Col>
            <Col xs={12} md={4}>
            <Table class="table">
                <tbody>
                  <tr>
                    <th>Symbol</th>
                    <td>{symbol}</td>
                  </tr>
                  <tr>
                    <th>Compamy Name</th>
                    <td>{companyName}</td>
                  </tr>
                  <tr>
                    <th>IPO Date</th>
                    <td>{ipoDate}</td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>{price}</td>
                  </tr>
                  <tr>  
                    <th>Change</th>
                    <td>{change}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{phone}</td>
                  </tr>
                  <tr>  
                    <th>Address</th>
                    <td>{address}</td>
                  </tr>

                  <tr>
                    <th>Average</th>
                    <td>{volAvg}</td>
                  </tr>
                  <tr>
                    <th>Market Cap</th>
                    <td>{mktCap}</td>
                  </tr>
                  <tr>
                    <th>Currency</th>
                    <td>{currency}</td>
                  </tr>
                  <tr> 
                    <th>City</th>
                    <td>{city}</td>
                  </tr>
                  <tr>
                    <th>Zip</th>
                    <td>{zip}</td>
                  </tr>
                  <tr>
                    <th>State</th>
                    <td>{state}</td>
                  </tr>
                  <tr>
                    <th>Website</th>
                    <td>{website}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>{description}</td>
                  </tr>
                </tbody>
              </Table>
              </Col>
          </Row>
       </div>
     
            
    </Container>  
            <Container fluid className='mt-3'>
            <div className ="col-md-12">
                   <div className ="card py-3 px-3">
                       <div className = 'pt-3 pb-2 py-2 px-2  '>
                           <h3 style = {{marginBottom:'3px'}}>NEWS</h3>
                           <p style = {{color:'#666666 '}}>Data includes pre-market & post-market movers as well. Stars are gappers.</p>
                       </div>
                       <MDBDataTableV5 hover entriesOptions={[20, 50, 100]} entries={20} pagesAmount={4} data={datatable} />
                   </div>
               </div>
       </Container>
   </>   
   );
};
export default TradingChart;
