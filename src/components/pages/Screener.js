import React  from 'react';
import { Container, Tabs , Tab } from 'react-bootstrap'
import AllScreen from '../sections/screener/AllScreen';
import Descriptive from '../sections/screener/Descriptive';
import Fundamental from '../sections/screener/Fundamental';
import Technicals from '../sections/screener/Technicals';


function Screener(props) {
  
    return (<div>
        <div class="bg-dash-dark-2 py-4">
                <Container fluid >
                    <h2 class="h5 mb-0">Screener</h2>
                </Container>
         </div>
     
                <Tabs
                    defaultActiveKey="descriptive"
                    transition={false}
                    id="noanim-tab-example"
                    >
                         <Tab eventKey="descriptive" title="Descriptive">
                                <Descriptive/>
                            </Tab>
                             
                            <Tab eventKey="fundamental" title="Fundamental">
                                    <Fundamental/>
                            </Tab>
                            <Tab eventKey="technical" title="Technical">
                                  <Technicals/>
                            </Tab>
                            <Tab eventKey="all" title="All">
                                   <AllScreen/>
                            </Tab>
          
                </Tabs>
    </div>
 );
}		
export default Screener;