import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import {Container,Row,Col} from 'react-bootstrap'
import {nanoid} from 'nanoid'
import {TiTick} from "react-icons/ti"
import styles from "../Styles/plans.module.css"
const Plans = (props) => {
    
    return(
        <>
        <div className={styles.plan__wrapper}>
            <h2>{props.planTitle}</h2>
            <div className={styles.plan__description}>
                <Container>
                    <ul>                    
                        <Row >
                            <Col sm={12} xs={12} md={6} >
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
                                                            <h6>Monthly Membership</h6>
                                                            <h6>Valid for one month</h6>
                                                            <button type="button">Select</button>
                                                        </div> 
                                         </div> 
                            </Col>
                            <Col sm={12} xs={12} md={6} >
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
                                            <p>Per Year, <span style={{ textDecoration: 'line-through'}}>$659</span> $599 Billed Yearly</p>
                                            <h6>Yearly Membership</h6>
                                            <h6>Valid for one Year</h6>
                                            <button type="button">Select</button>
                                        </div>
                                </div>
                            </Col>
                        </Row>
                    </ul>
                </Container>
            </div>
        </div>
        </>
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