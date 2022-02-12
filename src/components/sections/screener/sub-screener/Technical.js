import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';



function Technical(props) {


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
              label: 'Beta',
              field: 'beta',
              width: 200,
            },
            {
              label: 'ATR',
              field: 'atr',
              width: 200,
            },
           
            {
              label: 'SMA20',
              field: 'sma20',
              width: 150,
            },
            {
                label: 'SMA50',
                field: 'sma50',
                width: 200,
              },
              {
                label: 'SMA200',
                field: 'sma200',
                width: 200,
              },
              {
                label: '52W High',
                field: '52wHigh',
                width: 200,
              },
              {
                label: '52W Low',
                field: '52wLow',
                width: 200,
              },
              {
                label: 'RST',
                field: 'rst',
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
                label: 'From Open' ,
                field: 'fromOpen',
                width: 200,
              },
              {
                label: 'Gap',
                field: 'gap',
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
                            <h3 style = {{marginBottom:'3px'}}>Technical</h3>
                            <h6>Total: <span style = {{color:'#666666 '}}>{props.count}</span></h6>
                        </div>
                    <MDBDataTableV5 hover entriesOptions={[20, 20, 25]} entries={20} pagesAmount={4} data={datatable} />
                </div>
        </div>

 );
}		
export default Technical;