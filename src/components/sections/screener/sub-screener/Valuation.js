import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';



function Valuation(props) {


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
              label: 'P/E',
              field: 'pe',
              width: 200,
            },
           
            {
              label: 'Fwd P/E',
              field: 'fwd_pe',
              width: 150,
            },
            {
                label: 'PEG',
                field: 'peg',
                width: 200,
              },
              {
                label: 'P/S',
                field: 'ps',
                width: 200,
              },
              {
                label: 'P/B',
                field: 'pb',
                width: 200,
              },
              {
                label: 'P/FCF',
                field: 'pfcf',
                width: 200,
              },
              {
                label: 'EPS',
                field: 'eps',
                width: 200,
              },
              {
                label: 'EPS This Y',
                field: 'epsthisy',
                width: 200,
              },
              {
                label: 'EPS Next Y',
                field: 'epsnexty',
                width: 200,
              },
              {
                label: 'EPS Past 5Y' ,
                field: 'epspast5y',
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
                            <h3 style = {{marginBottom:'3px'}}>Valuation</h3>
                            <h6>Total: <span style = {{color:'#666666 '}}>{props.count}</span></h6>
                        </div>
                    <MDBDataTableV5 hover entriesOptions={[20, 20, 25]} entries={20} pagesAmount={4} data={datatable} />
                </div>
        </div>

 );
}		
export default Valuation;