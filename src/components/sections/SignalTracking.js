import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom';
import SvgChart from './SvgChart';

function SignalTracking(props) {

    const [rowData, setRowData] = useState()


    function fetchData(){

        fetch("https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=9f8bf374d13311bf6527af0ea58ebdb6")
          .then(res => res.json())
          .then(
            (result) => {
              const gainData =  result.map(d => {
              
                return  {   
                
                    ticker: <Link to = {`/chart/${d.symbol}`}>{d.symbol}</Link>,
                    price:  d.price,
                    name:  d.name,
                    change: <span style = {{color:'#51ef98 '}}>{ d.change.toFixed(3)}%</span>,
                    changesPercentage:d.changesPercentage.toFixed(3),
                    chart: <SvgChart svg = {d.symbol}/>
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
                label: 'Name',
                field: 'name',
                width: 270,
              },
            {
              label: 'Price',
              field: 'price',
              width: 270,
            },
            {
              label: 'Change',
              field: 'change',
              width: 200,
            },
           
            {
              label: 'Percentage',
              field: 'changesPercentage',
              sort: 'disabled',
              width: 150,
            },
            {
                label: 'Chart',
                field: 'chart',
                sort: 'disabled',
                width: 150,
              },
          ],
          rows: rowData,
        }
      
    return (
              <div className ="col-md-12">
                  <div className ="card py-3 px-3">
                        <div className = 'pt-3 pb-2 py-2 px-2  '>
                            <h3 style = {{marginBottom:'3px'}}>RECENT TOP ALERTS</h3>
                            <p style = {{color:'#666666 '}}>Data includes pre-market & post-market movers as well. Stars are gappers.</p>
                        </div>
                      <MDBDataTableV5 hover entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={datatable} />
                  </div>
              </div>
    );
}

export default SignalTracking;