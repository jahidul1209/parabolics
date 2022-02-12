import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';



function Financial(props) {


    const datatable = {
        columns: [
            {
                label: 'No',
                field: 'sl',
                width: 50,
                attributes: {
                  'aria-controls': 'DataTable',
                  'aria-label': 'ticker',
                },
              },
            {
              label: 'Ticker',
              field: 'ticker',
              width: 150, 
            },
            {
              label: 'Market Cap',
              field: 'marketCap',
              width: 200,
            },
            {
              label: 'Dividend',
              field: 'dividend',
              width: 200,
            },
           
            {
              label: 'ROA',
              field: 'roa',
              width: 150,
            },
            {
                label: 'ROE',
                field: 'roe',
                width: 200,
              },
              {
                label: 'Curr R',
                field: 'currr',
                width: 200,
              },
              {
                label: 'Quick R',
                field: 'quickr',
                width: 200,
              },
              {
                label: 'LTDebit/Eq',
                field: 'debit',
                width: 200,
              },
              {
                label: 'Gross M',
                field: 'gross',
                width: 200,
              },
              {
                label: 'Oper M',
                field: 'oper',
                width: 200,
              },
              {
                label: 'Profit M',
                field: 'profit',
                width: 200,
              },
              {
                label: 'Earnings' ,
                field: 'earning',
                width: 200,
              },
              {
                label: 'Price',
                field: 'price',
                width: 200,
              },
              {
                label: 'Change',
                field: 'change',
                width: 200,
              },
              {
                label: 'Volume',
                field: 'volume',
                width: 200,
              },

              
          ],
          rows: props.rowData,
        }
      

    return (


        <div className = 'sectioncls'>
                <div className ="card py-3 px-3">
                        <div className = 'pt-3 py-2 px-2  '>
                            <h3 style = {{marginBottom:'3px'}}>Financial</h3>
                            <h6>Total: <span style = {{color:'#666666 '}}>{props.count}</span></h6>
                        </div>
                    <MDBDataTableV5 hover entriesOptions={[20, 20, 25]} entries={20} pagesAmount={4} data={datatable} />
                </div>
        </div>

 );
}		
export default Financial;