import React,{Fragment ,useState } from 'react';
import PropTypes from 'prop-types';
import {Container,Row,Col,Button} from 'react-bootstrap'
import StripeCheckout from "react-stripe-checkout";
import {nanoid} from 'nanoid'
import {TiTick} from "react-icons/ti"
import styles from "../Styles/plans.module.css"
import PayPalBtn from './PayPalBtn'
/** Utils */

import { apiRequest } from "../Utils/API";
/** Stripe publishable key */
const STRIPE_PUBLISHABLE_KEY = ""



const paypalSubscribePlanA = (data, actions) => {
    return actions.subscription.create({
      'plan_id': "P-59M1017976970682PLZYGALA",
    });
  };
  const paypalSubscribePlanB= (data, actions) => {
    return actions.subscription.create({
      'plan_id': "P-1JN05705K53953236LZYGBYA",
    });
  };
  const paypalOnError = (err) => {
    alert(err)
  }
  
  const paypalOnApprove = (data, detail) => {
    alert("Payapl approved")
  };
/**
   * Make request to AWS lambda function that handles creating
   * a customer and a subscription plan on stripe
   * @param token - token with stripe key and details entered in stripe form
   * @param productPlan - id of the product plan the user is subscribing to
   */
 const subscribeToProductPlan = async (
    token,
    productPlan 
  ) => {
    const bodyParams = {
      stripeToken: token.id,
      email: token.email,
      productPlan
    };

    const response = await apiRequest(
      "http://localhost:3000/create-customer",
      "POST",
      bodyParams
    ).catch(err => {
      console.log(err);
    });

  };

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
                                <PayPalBtn
                                    amount = {state}
                                    currency = "USD"
                                    createSubscription={paypalSubscribePlanA}
                                    onApprove={paypalOnApprove}
                                    catchError={paypalOnError}
                                    onError={paypalOnError}
                                    onCancel={paypalOnError} 
                                />
                                     <StripeCheckout  
                                            name="Parabolics Premium"
                                            description={`Monthly Package`}
                                            amount={state*100} 
                                            currency="USD"
                                            token={token => subscribeToProductPlan(token)}
                                            billingAddress={true}
                                            zipCode={false}
                                            panelLabel="Subscribe"
                                             stripeKey={STRIPE_PUBLISHABLE_KEY}
                                        >
                                        
                                        <Button block={true} className = 'btn btn-info' >
                                            <span
                                             style = {{ fontStyle: 'italic',
                                                      fontWeight: '600',
                                                       fontSize: '20px',
                                                       padding: '0px 61px'}}>
                                                        Stripe</span>
                                            </Button>
                                        
                                        </StripeCheckout>
                                </> : null  
                             }  
                             {  
                               state == '599' ?
                                 <>
                                  <h3 className='pb-3'>Payment Method: ${state}</h3>
                                   <PayPalBtn
                                        amount = {state}
                                        currency = "USD"
                                        createSubscription={paypalSubscribePlanB}
                                        onApprove={paypalOnApprove}
                                        catchError={paypalOnError}
                                        onError={paypalOnError}
                                        onCancel={paypalOnError} 
                                   />
                                   <StripeCheckout  
                                            name="Parabolics Premium"
                                            description={`Yearly Package`}
                                            amount={state*100} 
                                            currency="USD"
                                            token={token => subscribeToProductPlan(token)}
                                            billingAddress={true}
                                            zipCode={false}
                                            panelLabel="Subscribe"
                                             stripeKey={STRIPE_PUBLISHABLE_KEY}
                                        >
                                        
                                        <Button block={true} className = 'btn btn-info' >
                                            <span
                                             style = {{ fontStyle: 'italic',
                                                      fontWeight: '600',
                                                       fontSize: '20px',
                                                       padding: '0px 61px'}}>
                                                        Stripe</span>
                                            </Button>
                                        
                                        </StripeCheckout>
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