import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import Button from 'react-bootstrap/Button'

function InsiderTransactions(props) {
  const  today = new Date().toISOString().slice(0, 10);
    const [rowData, setRowData] = useState()
   var fdate
   if(props.calender === today){
        fdate = '2021-01-31'
   }else{
        fdate = props.calender
   }
    function fetchData() {
 
        fetch(`https://finnhub.io/api/v1/stock/insider-transactions?from=${fdate}&to=${today}&token=c7jrb0iad3i887nsjm60`) //https://finnhub.io/ API 
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result.data)
              const gainData =  result.data.map(d => {
                    return  {
                        filedat: d.filingDate,
                        ticker:  d.symbol.toUpperCase(),
                        buy_sell:<div>{ (d.change  > 0 ) ?   <Button variant="success" size="sm">Buy</Button> : <Button variant="danger" size="sm">Sell</Button>}</div> ,
                        shares:d.share,
                        change :d.change
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
              label: 'filedat',
              field: 'filedat',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'filedat',
              },
            },
            {
              label: 'ticker',
              field: 'ticker',
              width: 270,
            },
          
            {
              label: 'buy/sell',
              field: 'buy_sell',
              sort: 'disabled',
              width: 150,
            },
            {
                label: 'shares',
                field: 'shares',
                sort: 'disabled',
                width: 150,
              },
              {
                label: 'change',
                field: 'change',
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
                            <h3 style = {{marginBottom:'3px'}}> INSIDER TRANSACTIONS</h3>
                            <p style = {{color:'#666666 '}}>Large & latest insider transactions..</p>
                        </div>
                      <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />
                  </div>
              </div>
    );
}

export default InsiderTransactions;