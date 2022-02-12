import React, { useEffect, useState, useRef  } from 'react';
import { Container , Tabs , Tab, Form ,Row, Col} from 'react-bootstrap'
import { createChart,CrosshairMode } from "lightweight-charts";
import axios from "axios";    

import ForexTable from '../sections/ForexTable';
import ForexCards from '../sections/ForexCards';
import ForexChart from '../sections/ForexCharts';



function Forex(props) {
     const [rowData, setRowData] = useState([])


        useEffect(() => {
            fetch("https://financialmodelingprep.com/api/v3/quotes/forex?apikey=9f8bf374d13311bf6527af0ea58ebdb6")
            .then(response => response.json())
            .then(results =>  
                 setRowData(results))
            .catch(error => {
                        console.log(error);
                    });
   
         }, [])

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