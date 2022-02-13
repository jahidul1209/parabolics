import React, { useEffect, useState } from 'react';
import axios from "axios";    
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom';

function InsiderTrading(props) {

    const [rowData, setRowData] = useState()
   function fetchData() {
        if(props.tradingSymbol){
            axios.get(`https://financialmodelingprep.com/api/v4/insider-trading?symbol=${props.tradingSymbol}&page=0&apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
            .then((response) => { 
            const gainData =  response.data.map((d, key) => {
                return  {
                    sl: key + 1,
                    symbol:d.symbol,
                    ticker: d.symbol,
                    transactionType:d.transactionType,
                    reportingName:d.reportingName,
                    transactionDate:d.transactionDate,
                    typeOfOwner:d.typeOfOwner,
                    securitiesTransacted: d.securitiesTransacted,
                    price:  d.price,
                  }
                });
               setRowData(gainData)
            })
            
            .catch(error => {
                console.log(error);
            });
        }else{
            axios.get(`https://financialmodelingprep.com/api/v4/insider-trading?transactionType=P-Purchase,S-Sale&page=0&apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
            .then((response) => { 
            const gainData =  response.data.map((d, key) => {
                return  {
                    sl: key + 1,
                    symbol:d.symbol,
                    ticker: <Link to = {`/chart/${d.symbol}`}>{d.symbol}</Link>,
                    transactionType:d.transactionType,
                    reportingName:d.reportingName,
                    transactionDate:d.transactionDate,
                    typeOfOwner:d.typeOfOwner,
                    securitiesTransacted: d.securitiesTransacted,
                    price:  d.price,
                  }
                });
               setRowData(gainData)
            })
            
            .catch(error => {
                console.log(error);
            });
        }
      }

      useEffect(() => {
        const interval = setInterval(() => {
          fetchData()
        }, 1000);
        return () => clearInterval(interval);
      }, []);

      const datatable = {
        columns: [
            {
                label: 'No',
                field: 'sl',
                width: 50,
                attributes: {
                  'aria-controls': 'DataTable',
                  'aria-label': 'sl',
                },
              },
            {
              label: 'Ticker',
              field: 'ticker',
              width: 150,
            },
            {
                label: 'Transaction Date',
                field: 'transactionDate',
                width: 150,
              },
            {
                label: 'Reporting Name',
                field: 'reportingName',
                width: 250,
              },
            {
              label: 'Price',
              field: 'price',
              width: 270,
            },

             
            {
                label: 'Transaction Type',
                field: 'transactionType',
                sort: 'disabled',
                width: 150,
              },

            {
                label: 'Type Of Owner',
                field: 'typeOfOwner',
                width: 200,
              },
        
              {
                label: 'Securities Transacted',
                field: 'securitiesTransacted',
                width: 150,
              },
          ],
          rows: rowData,
        }
    return (
        <div> 
            {
                (!props.tradingSymbol) ? 
                <MDBDataTableV5 hover entriesOptions={[20, 30, 35, 50, 100]} entries={20} pagesAmount={4} data={datatable} />
                :
                <MDBDataTableV5 hover entriesOptions={[5, 20, 25, 50, 100]} entries={5} pagesAmount={4} data={datatable} />
            }
             

        </div>
    );
}

export default InsiderTrading;