import React, { useState } from "react";
import { Form,Spinner } from "react-bootstrap";
import axios from "../../Utils/axiosInstance"
import { Link} from "react-router-dom";
import styles from "../Styles/login.module.css"
import {toast} from "react-toastify"

const LoginForm = () => {

    const [details,setDetails] = useState({
        mail:"",
        pass:""
    })
    const [isLoading,setIsLoading] = useState(false)
    const login = (e) => {
        setIsLoading(true)
          e.preventDefault()
        axios
        .post(`https://accounts.parabolics.io/login`,details)
        .then((response)=>{
            if(response.status===200){
              toast.success(response.data.message)
               localStorage.setItem('uhex', response.data.userhex); 
               localStorage.setItem('shex', response.data.sessionhex); 
               window.location.href = "/"
            }
        })
        .catch((error) => {
          toast.success(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    const inputEvent = (e) => {
        const { name, value } = e.target;
    
        setDetails((preValue) => {
          return {
            ...preValue,
            [name]: value,
          };
        });
      };
  return (
    <>
      <Form onSubmit={login}>
        <div className={styles.form__group}>
          <input type="email" placeholder="email" value={details.mail} name="mail" onChange={inputEvent} className={styles.form__input}  required/>
        </div >
        <div className={styles.form__group}>
            <input type="password" placeholder="password" value={details.pass} name="pass" onChange={inputEvent} className={styles.form__input} required/>    
        </div>
        <div className={styles.form__group}>
            <Form.Group className={styles.form__checkbox} controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" />
            </Form.Group>
        </div>
        <div className={styles.button__wrapper}>
          <button type="submit">Login</button>
        </div>
        {isLoading && <>
            <div className="loading">
                <Spinner animation="border" variant="success" />
            </div>


        </>}
        <p>Don’t have an account? <Link to="/register">Create for free</Link></p>
      </Form>
    </>
  );
};
export default LoginForm;
