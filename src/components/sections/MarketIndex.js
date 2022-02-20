import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom';

function MarketIndex(props) {
  const  today = new Date().toISOString().slice(0, 10);
    const [rowData, setRowData] = useState()
 
    function fetchData(){
        fetch(`https://financialmodelingprep.com/api/v3/quotes/index?from=${props.calender}&to=${today}&apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
          .then(res => res.json())
          .then(
            (result) => {
              const gainData =  result.map(d => {
                if(d.symbol.slice(0 ,1) === '^' ){
                  const symbol = d.symbol.slice(1)
                  return  {
                    ticker: <Link to = {`/chart/${symbol}`}>{symbol}</Link>,
                    price:  d.price,
                    volChange:<div>{ (d.changesPercentage  > 0 ) ? <span style={{color:'#51ef98'}}>{d.changesPercentage.toFixed(3)}% </span> : <span style={{color:'#EE4758'}}>{(d.changesPercentage.toFixed(3))}% </span>}</div>,
                    pricechange:(d.change).toFixed(3),
                    avgVolume: d.avgVolume,
                  }
                }else {
                  const symbol = d.symbol
                  return  {
                    ticker:<Link to = {`/chart/${symbol}`}>{symbol}</Link>,
                    price:  d.price,
                    volChange:<div>{ (d.changesPercentage  > 0 ) ? <span style={{color:'#51ef98'}}>{d.changesPercentage.toFixed(3)}% </span> : <span style={{color:'#EE4758'}}>{(d.changesPercentage.toFixed(3))}% </span>}</div>,
                    pricechange:(d.change).toFixed(3),
                    avgVolume: d.avgVolume,
                  }
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
          fetchData()
      }, []);


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
                label: 'Avg Volume',
                field: 'avgVolume',
                sort: 'disabled',
                width: 150,
              },

            {
                label: 'Price Change',
                field: 'pricechange',
                width: 200,
              },
        
              {
                label: 'vol Change',
                field: 'volChange',
                sort: 'disabled',
                width: 150,
              },
          ],
          rows: rowData,
        }

    return (

        <div className="card py-3 px-3">
            <div className = 'pt-3 pb-2 py-2 px-2  '>
                    <h3 style = {{marginBottom:'3px'}}>MARKET INDEX</h3>
                    {/* <p style = {{color:'#666666 '}}>Data includes pre-market & post-market movers as well. Stars are gappers.</p> */}
                </div>
                <MDBDataTableV5 hover entriesOptions={[10, 20, 25, 50, 100]} entries={10} pagesAmount={4} data={datatable} />
            </div>
             
    );
}

export default MarketIndex;