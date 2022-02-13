import axios from 'axios';
import React, { Component } from 'react';
import { Container,Row, Col ,Table} from 'react-bootstrap'
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { Link } from 'react-router-dom';

class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rowData: [],
         
        };
      }

      componentWillUpdate(){
        var array = []
        const value =  this.props.rowData
        if(value){       
            for (var i = 0; i < 15 ; i++) {
                array.push(value[i].symbol)
                
            }
            axios.get(`https://financialmodelingprep.com/api/v3/profile/${array}?apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
            .then(
                (result) => {
                            this.setState({rowData : result.data})
                }) 
        }
     
        }
      
        componentDidMount(){  
            
            const array = ['A ','AA','AAAU','AACG','AACI','AAPL','AACIU','AADI','AADR','AACIW','AADR','AAIC','AAL','AAME','AAN','AAOI','AAON','AAP','AAQC','AAT','AATC','AAU','AAXJ','ACI','ACII','ACIO','ACN','ACM','ACMR','ACNB','ADME','ADMP','ADNT','BNDX'];
                axios.get(`https://financialmodelingprep.com/api/v3/profile/${array}?apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
                .then(
                    (result) => {
                                this.setState({rowData : result.data})
                    })      
                } 


    render() {

        return (
            <Container fluid className="mt-4">

                {  
                 (this.state.rowData )   ?        
                  this.state.rowData.map( d => {
                 
                       return(
                          <div class="card mt-5">
                            <Row>
                                <Col xs={12} md={8}>       
                                        <TradingViewWidget  symbol={`${d.symbol}`} height = '480px' theme={Themes.DARK}  locale="en"  /> 
                                </Col>
                                <Col xs={12} md={4}>
                                    <Table class="table">
                                        <tbody>
                                        <tr>
                                            <th>Symbol</th>
                                            <td>  <Link to =  {`/chart/${d.symbol}`} >{d.symbol} </Link> </td>
                                        </tr>
                                        <tr>
                                            <th>Compamy Name</th>
                                            <td>{d.companyName}</td>
                                        </tr>
                                        <tr>
                                            <th>IPO Date</th>
                                            <td>{d.ipoDate}</td>
                                        </tr>
                                        <tr>
                                            <th>Price</th>
                                            <td>{d.price}</td>
                                        </tr>
                                        <tr>  
                                            <th>Change</th>
                                            <td>{d.change}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{d.phone}</td>
                                        </tr>
                                        <tr>  
                                            <th>Address</th>
                                            <td>{d.address}</td>
                                        </tr>

                                        <tr>
                                            <th>Average</th>
                                            <td>{d.volAvg}</td>
                                        </tr>
                                        <tr>
                                            <th>Market Cap</th>
                                            <td>{d.mktCap}</td>
                                        </tr>
                                        <tr>
                                            <th>Currency</th>
                                            <td>{d.currency}</td>
                                        </tr>
                                        <tr> 
                                            <th>City</th>
                                            <td>{d.city}</td>
                                        </tr>
                                        <tr>
                                            <th>Zip</th>
                                            <td>{d.zip}</td>
                                        </tr>
                                        <tr>
                                            <th>State</th>
                                            <td>{d.state}</td>
                                        </tr>
                                        <tr>
                                            <th>Website</th>
                                            <td><a href={d.website} target= '_blank' rel="noreferrer">{d.website}</a></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                 </Col>
                               </Row>
                               <div className= 'mt-3 px-3' > 
                                    <p>{d.description}</p>
                               </div>
                            
                         </div>)
               })
               : 
                    null
              }
            </Container>
        );
    }
}

export default Basic;


