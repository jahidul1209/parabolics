import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom';

function UpcommingEarn(props) {
    const  today = new Date().toISOString().slice(0, 10);
    const [rowData, setRowData] = useState()
    const previus = new Date();
    previus.setDate(previus.getDate() - 3);
    const last3days = previus.toISOString().slice(0, 10)

    var fdate
    if(props.calender === today){
         fdate = last3days
    }else{
         fdate = props.calender
    } 

function fetchData(){
        fetch(`https://financialmodelingprep.com/api/v3/earning_calendar?from=${fdate}&to=${today}&apikey=9f8bf374d13311bf6527af0ea58ebdb6`) //https://finnhub.io/ API  https://finnhub.io/api/v1/calendar/earnings?from=${today}&to=${props.calender}&token=c7jrb0iad3i887nsjm60
          .then(res => res.json())
          .then(
            (result) => {
              const gainData =  result.map( d => {
                  if(d.epsEstimated){
                    return  {
                        symbol:<Link to = {`/chart/${d.symbol}`}>{d.symbol}</Link>,
                        date:  d.date,
                        epsEstimate:<div>{ (d.epsEstimated  > 0 ) ? <span style={{color:'#51ef98'}}>{d.epsEstimated}</span> : <span style={{color:'#EE4758'}}>{d.epsEstimated}</span>}</div> ,
                        time:d.time.toUpperCase(),
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

    }, [fdate]);


    const datatable = {
        columns: [
            {
              label: 'Symbol',
              field: 'symbol',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'symbol',
              },
            },
            {
              label: 'Date',
              field: 'date',
              width: 270,
            },
            {
              label: 'Time',
              field: 'time',
              width: 200,
            },
           
            {
              label: 'Eps Estimate',
              field: 'epsEstimate',
              sort: 'disabled',
              width: 150,
            },
          ],
          rows: rowData,
        }
      
        return (
              <div className="col-md-6">
                  <div className="card py-3 px-3">
                        <div className = 'pt-3 pb-2 py-2 px-2  '>
                            <h3 style = {{marginBottom:'3px'}}> UPCOMING EARNINGS</h3>
                            <p style = {{color:'#666666 '}}>Earnings coming in the next 3 days.</p>
                        </div>
                      <MDBDataTableV5 hover entriesOptions={[6, 20, 25]} entries={6} pagesAmount={4} data={datatable} />
                  </div>
              </div>
    );
}

export default UpcommingEarn;