import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';



function Custom(props) {


    const datatable = {
        columns: [
            {
                label: 'No',
                field: 'sl',
                sort: 'disabled',
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
              label: 'Company',
              field: 'company',
              width: 200,
            },
            {
              label: 'Sector',
              field: 'sector',
              width: 200,
            },
           
            {
              label: 'Industry',
              field: 'industry',
              width: 150,
            },
            {
                label: 'Country',
                field: 'country',
                width: 200,
              },
              {
                label: 'Market Cap',
                field: 'marketCap',
                width: 200,
              },
           
              {
                label: 'P/E',
                field: 'beta',
                width: 200,
              },
              {
                label: 'Price',
                field: 'price',
                width: 200,
              },
              {
                label: 'P/E',
                field: 'pe',
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
                            <h3 style = {{marginBottom:'3px'}}>Custom</h3>
                            <h6>Total: <span style = {{color:'#666666 '}}>{props.count}</span></h6>
                        </div>
                    <MDBDataTableV5 hover entriesOptions={[20, 20, 25]} entries={20} pagesAmount={4} data={datatable} />
                </div>
        </div>

 );
}		
export default Custom;