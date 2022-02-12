import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';



function Ownership(props) {


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
              label: 'Outstanding',
              field: 'outstanding',
              width: 200,
            },
           
            {
              label: 'Float',
              field: 'float',
              width: 150,
            },
            {
                label: 'Insider Own',
                field: 'insiderOwn',
                width: 200,
              },
              {
                label: 'Insider Trans',
                field: 'insiderTrans',
                width: 200,
              },
              {
                label: 'Inst Own',
                field: 'instOwn',
                width: 200,
              },
              {
                label: 'Inst trans',
                field: 'instTrans',
                width: 200,
              },
              {
                label: 'Float Short',
                field: 'floatShort',
                width: 200,
              },
              {
                label: 'Short Ratio',
                field: 'shortRatio',
                width: 200,
              },
              {
                label: 'Avg Volume',
                field: 'avgVolume',
                width: 200,
              },
              {
                label: 'Price' ,
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
                            <h3 style = {{marginBottom:'3px'}}>Ownership</h3>
                            <h6>Total: <span style = {{color:'#666666 '}}>{props.count}</span></h6>
                        </div>
                    <MDBDataTableV5 hover entriesOptions={[20, 20, 25]} entries={20} pagesAmount={4} data={datatable} />
                </div>
        </div>

 );
}		
export default Ownership;