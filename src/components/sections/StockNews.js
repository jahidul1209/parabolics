import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom';

function StockNews(props) {

    const [rowData, setRowData] = useState()
  
    function fetchData(){
        fetch("https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=9f8bf374d13311bf6527af0ea58ebdb6")
          .then(res => res.json())
          .then(
            (result) => {
              const gainData =  result.map(d => {
                return  {
                    ticker: <Link to = {`/chart/${d.symbol}`}>{d.symbol}</Link>,
                    date:  d.publishedDate,
                    title: <Link to = {d.url}>{ d.title}</Link>, 
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


    return (
         <div className ="col-md-12">
                    <div className ="card py-3 px-3">
                        <div className = 'pt-3 pb-2 py-2 px-2  '>
                            <h3 style = {{marginBottom:'3px'}}>MARKET NEWS</h3>
                            {/* <p style = {{color:'#666666 '}}>Data includes pre-market & post-market movers as well. Stars are gappers.</p> */}
                        </div>
                        <MDBDataTableV5 hover entriesOptions={[6, 20, 25]} entries={6} pagesAmount={4} data={datatable} />
                    </div>
         </div>
    );
}

export default StockNews;