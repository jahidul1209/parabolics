import React from 'react';
import {  Tabs , Tab} from 'react-bootstrap'   

import ForexTable from '../sections/ForexTable';
import ForexCards from '../sections/ForexCards';
import ForexChart from '../sections/ForexCharts';



function Forex(props) {

    return (
        <div>
          <div className="bg-dash-dark-2 py-4">
                <div className="container-fluid">
                <h2 className="h5 mb-0">Crypto</h2>
            </div>
         </div>
         <Tabs
                    defaultActiveKey="performence"
                    transition={false}
                    id="noanim-tab-example"
                    >
                          <Tab eventKey="performence" title="Performence">
                                <ForexCards/>
                                 <ForexTable/>
                           
                            </Tab>
                             
                            <Tab eventKey="chart" title="Chart">
                                <ForexChart/>
                            </Tab>
                </Tabs>

        
        </div>
    );
}

export default Forex;