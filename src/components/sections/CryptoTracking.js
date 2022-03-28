import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom';

function CryptoTracking(props) {

    const [rowData, setRowData] = useState([])


    function fetchData(){

        fetch("http://51.89.176.109/download/crypto_signals.csv")
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
                  close: parseFloat(tData[4]).toFixed(3),
                  indicator:tData[5],
                  type: tData[6],
                  max_gain: parseFloat(tData[7]).toFixed(3),
                  changesPercentage: <div>{ (tData[8]  > 0 ) ? <span style={{color:'#51ef98'}}>{parseFloat(tData[8]).toFixed(3)}</span> : <span style={{color:'#EE4758'}}>{parseFloat(tData[8]).toFixed(3)}</span>}</div>,
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

      rowData.sort(function (a, b) {
        return b.max_gain - a.max_gain;
      });
      
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
              sort: 'disabled',
              width: 150,
            },
            {
              label: 'Type',
              field: 'type',
              sort: 'disabled',
              width: 150,
            },
            {
              label: 'Change %',
              field: 'changesPercentage',
              sort: 'disabled',
              width: 150,
            },
            {
              label: 'Max Gain',
              field: 'max_gain',
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
                      
                             { rowData && <MDBDataTableV5  hover  entriesOptions={[15, 20, 25]} entries={15} pagesAmount={5} data={datatable} />}
                      
                      
                  </div>
              </div>
    );
}

export default CryptoTracking;