import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';



function Performance(props) {


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
              label: 'Perf Week',
              field: 'perfWeek',
              width: 200,
            },
            {
              label: 'Perf Month',
              field: 'perfMonth',
              width: 200,
            },
           
            {
              label: 'Perf Quarf',
              field: 'perfQuarf',
              width: 150,
            },
            {
                label: 'Perf Half',
                field: 'perfHalf',
                width: 200,
              },
              {
                label: 'Perf Year',
                field: 'perfYear',
                width: 200,
              },
              {
                label: 'Perf YTD',
                field: 'perfytd',
                width: 200,
              },
              {
                label: 'Volatility W',
                field: 'volatilityW',
                width: 200,
              },
              {
                label: 'Volatility M',
                field: 'volatilityM',
                width: 200,
              },
              {
                label: 'Recom',
                field: 'recom',
                width: 200,
              },
              {
                label: 'Avg Volume',
                field: 'avgVolume',
                width: 200,
              },
              {
                label: 'Rel Volume' ,
                field: 'relVolume',
                width: 200,
              },
              {
                label: 'Price',
                field: 'Price',
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
                            <h3 style = {{marginBottom:'3px'}}>Performance</h3>
                            <h6>Total: <span style = {{color:'#666666 '}}>{props.count}</span></h6>
                        </div>
                    <MDBDataTableV5 hover entriesOptions={[20, 20, 25]} entries={20} pagesAmount={4} data={datatable} />
                </div>
        </div>

 );
}		
export default Performance;