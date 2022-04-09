import React,{Fragment ,useState } from 'react';
import PropTypes from 'prop-types';
import {Container,Row,Col,Button} from 'react-bootstrap'
import {nanoid} from 'nanoid'
import {TiTick} from "react-icons/ti"
import styles from "../Styles/plans.module.css"
import PayPalBtn from './PayPalBtn'
import StripeBtn from './StripeBtn';


const Plans = (props) => {
      const [state, setstate] = useState()
      const   paymMethod = (e) => {
        e.preventDefault();
        setstate(e.target.value); 
       }; 

    return(
        <div className={styles.plan__wrapper}>
            <h2>{props.planTitle}</h2>
            <div className={styles.plan__description}>
                <Container>
                    <ul>                    
                        <Row >
                            <Col sm={12} xs={12} md={6} >
                            <h2 style = {{marginBottom:'35px',fontWeight: '400',fontSize: '28px'}}> Monthly Membership</h2>
                                    {props.perks1.map((perks)=>{
                                        return(
                                            <Fragment key={nanoid()}>
                                                <li><span><TiTick/></span> {perks}</li>                       
                                            </Fragment>        
                                        )
                                    })}
                                         <div className={styles.plan__membership__wrapper}>
                                                        <div className={styles.plan__membership}>
                                                            <h3>${props.monthlyPrice}</h3>
                                                            <p>Per Month, <span style={{ textDecoration: 'line-through'}}>$99</span> $75 Billed Monthly</p>                                                         
                                                            <h6 >Try with Confidence: $24 Discount $75 monthly, never expires</h6>
                                                            <h4 style={{marginTop:'15px'}}>Valid for one month</h4>
                                                            <button type="button" value='75' onClick={paymMethod}>Select</button>  
                                                        </div> 
                                         </div> 
                            </Col>
                            <Col sm={12} xs={12} md={6} >
                            <h2 style = {{marginBottom:'35px',fontWeight: '400',fontSize: '28px'}}> Yearly Membership</h2>
                                {props.perks2 && props.perks2.map((perks)=>{
                                    return(
                                        <Fragment key={nanoid()}>
                                            <li><span><TiTick/></span> {perks}</li>                      
                                        </Fragment>
                                    )
                                })}
                                
                                <div className={styles.plan__membership__wrapper}>
                                        <div className={styles.plan__membership}>
                                            <h3>${props.yearlyPrice}</h3>
                                            <p>Per Year, <span style={{ textDecoration: 'line-through'}}>$999</span> $599 Billed Yearly</p>
                                            <h6 >Try with Confidence: $400 Discount $599 Yearly, never expires</h6>
                                            <h4 style={{marginTop:'15px'}}>Valid for one Year</h4>
                                            <button type="button" value="599"  onClick={paymMethod}>Select</button>  
                                        </div>
                                </div>
                            </Col>
                        </Row>
                    </ul>
                </Container>
              
            </div>
            <div className='paypalbtn text-center'>
              
                        {
                            state == '75' ? <>
                              <h3 className='pb-3'>Payment Method: ${state}</h3>
                                <PayPalBtn uhex = '10000000'  prc = 'p'  pln = 'm' />
                                <StripeBtn  uhex = '10000000' prc = 's'  pln = 'm' />
                                </> : null  
                             }  
                             {  
                               state == '599' ?
                                 <>
                                 <h3 className='pb-3'>Payment Method: ${state}</h3>
                                    <PayPalBtn uhex = '10000000' prc = 'p' pln = 'y' />
                                    <StripeBtn  uhex = '10000000' prc = 's' pln = 'y' />
                                 </> : null                       
                             }
            </div>                      
        </div>

    )
}
export default Plans;

Plans.propTypes = {
    planTitle : PropTypes.string.isRequired,
    perks1: PropTypes.array.isRequired,
    perks2: PropTypes.array,
    monthlyPrice: PropTypes.number.isRequired,
    yearlyPrice: PropTypes.number.isRequired,
}