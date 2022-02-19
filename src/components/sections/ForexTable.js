import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom';

function ForexTable(props) {
    const [rowData, setRowData] = useState()
    function fetchData() {
        fetch("https://financialmodelingprep.com/api/v3/quotes/forex?apikey=9f8bf374d13311bf6527af0ea58ebdb6")
          .then(res => res.json())
          .then(
            (result) => {
              const gainData =  result.map( d => {
                return  {
                    ticker: <Link to = {`/chart/${d.symbol}`}>{d.symbol}</Link>,
                    price:  d.price.toFixed(3),
                    changesPercentage:<div>{ (d.changesPercentage  > 0 ) ? <span style={{color:'#51ef98'}}>{d.changesPercentage.toFixed(3)}% </span> : <span style={{color:'#EE4758'}}>{(d.changesPercentage.toFixed(3))}% </span>}</div>,
                    change:(d.change).toFixed(3),
                    dayLow: d.dayLow.toFixed(3),
                    dayHigh:d.dayHigh.toFixed(3),
                    yearHigh:d.yearHigh.toFixed(3),
                    yearLow:d.yearLow.toFixed(3),
                    marketCap: nFormatter(d.marketCap),
                    priceAvg200:d.priceAvg200.toFixed(3),
                    volume:numberWithCommas(d.volume),
                    avgVolume:numberWithCommas(d.avgVolume),
                  }
          });
               setRowData(gainData)
             
            },
            (error) => {
              console.log(error);
            }
          )
      }

      useEffect(() => {
        const interval = setInterval(() => {
          fetchData()
        }, 1000);
        return () => clearInterval(interval);
      }, []);

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


    const datatable = {
        columns: [
            {
              label: 'Ticker',
              field: 'ticker',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'ticker',
              },
            },
            {
              label: 'Price',
              field: 'price',
              width: 270,
            },
            {
                label: 'Change',
                field: 'change',
                width: 270,
              },
             
            {
                label: 'changes Percentage',
                field: 'changesPercentage',
                sort: 'disabled',
                width: 150,
              },

            {
                label: 'Day Low',
                field: 'dayLow',
                width: 200,
              },
        
              {
                label: 'Day High',
                field: 'dayHigh',
                width: 150,
              },
              {
                label: 'Year High',
                field: 'yearHigh',
                width: 200,
              },
        
              {
                label: 'Year Low',
                field: 'yearLow',
                width: 150,
              },
              {
                label: 'Market Cap',
                field: 'marketCap',
                width: 200,
              },
        
              {
                label: 'PriceAvg 200',
                field: 'priceAvg200',
                width: 150,
              },
              {
                label: 'Volume',
                field: 'volume',
                width: 150,
              },
              {
                label: 'Avg Volume',
                field: 'avgVolume',
                width: 150,
              }
          ],
          rows: rowData,
        }

    return (
       <Container fluid>
        <div className="card py-3 px-3">
            <div className = 'pt-3 pb-2 py-2 px-2  '>
                    <h3 style = {{marginBottom:'3px', textTransform:'uppercase'}}>Digital and Forex</h3>
                    <p style = {{color:'#666666 '}}>Data includes pre-market & post-market movers as well. Stars are gappers.</p>
                </div>
                <MDBDataTableV5 hover entriesOptions={[20, 25, 50, 100]} entries={20} pagesAmount={4} data={datatable} />
            </div>
        </Container>     
    );
}

export default ForexTable;