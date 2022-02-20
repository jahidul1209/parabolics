import React from 'react';
import { Container } from 'react-bootstrap';
import InsiderTrading from '../sections/InsiderTrading';


function Insider(props) {
    return (
        <div>
               <Container  fluid>
                    <div className ="card py-3 px-3">
                            <div className = 'pt-3 pb-2 py-2 px-2  '>
                                <h3 style = {{marginBottom:'3px'}}>INSIDER TRADING</h3>
                                {/* <p style = {{color:'#666666 '}}>Data includes pre-market & post-market movers as well. Stars are gappers.</p> */}
                            </div>
                      <InsiderTrading/>
                </div>
               </Container>
        </div>
    );
}

export default Insider;