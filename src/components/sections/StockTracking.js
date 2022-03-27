import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom';
import SvgChart from './SvgChart';

function StockTracking(props) {

    const [rowData, setRowData] = useState([])


    function fetchData(){

        fetch("http://51.89.176.109/download/stock_signals.csv")
          .then(res => res.text())
          .then(
            (result) => {

                     
              const tableData = result.split('\n').slice(1)
              const gainData =   tableData.map(d => {
               const tData = d.split(',')

                return  {   
                    time:  tData[0],
                    signal: tData[1],
                    ticker: <Link to = {`/chart/${tData[2]}`}>{tData[2]}</Link>,
                    generalTime:tData[3],
                    close: tData[4],
                    indicator:tData[5],
                    type: tData[6],
                    max_gain: tData[7],
                    changesPercentage: <div>{ (tData[8]  > 0 ) ? <span style={{color:'#51ef98'}}>{tData[8]}</span> : <span style={{color:'#EE4758'}}>{tData[8]}</span>}</div>,
                   
                  
                    chart: <SvgChart svg = {tData[2]}/>
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

      // rowData.sort(function (a, b) {
      //   return b.price - a.price;
      // });
      
    const datatable = {
        columns: [
          {
            label: 'Date Time',
            field: 'time',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'time',
            },
          },
            {
              label: 'Ticker',
              field: 'ticker',
              width: 150,
            },
            {
                label: 'Signal',
                field: 'signal',
                width: 150,
              },
            {
              label: 'General Time',
              field: 'generalTime',
              width: 150,
              class:'red'
            },
            {
              label: 'Close',
              field: 'close',
              width: 200,
            },
            {
              label: 'Indicator',
              field: 'indicator',
            },
            {
              label: 'Type',
              field: 'type',
            },
            {
              label: 'Percentage',
              field: 'changesPercentage',
              sort: 'disabled',
              width: 150,
            },
            {
              label: 'Max Gain',
              field: 'max_gain',
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
                            {/* <p style = {{color:'#666666 '}}>Data includes pre-market & post-market movers as well. Stars are gappers.</p> */}
                        </div>
                      <MDBDataTableV5  hover  entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={datatable} />
                  </div>
              </div>
    );
}

export default StockTracking;