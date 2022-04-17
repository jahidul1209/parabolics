import React, { useState } from 'react';
import {Container } from 'react-bootstrap';
import {toast} from "react-toastify"

function Settings(props) {
    const[platform , setPlatform] = useState('discord')
    const[username , setUsername] = useState()
    const [checkbox, setCheckbox] = useState(false);


    const Switch = ({ isOn, handleToggle }) => {
        return (
          <div class="form-check form-switch mb-5">
                    <label className="form-check-label" for="switchCheck" style={{color:'#c5c5c5'}}>  Premium Access  ({platform})</label>
                    <input 
                        checked={isOn}
                        className="form-check-input" 
                        type="checkbox" 
                        role="switch" 
                        onChange={handleToggle}
                    />                    
            </div>
          
        );
      };
      

    const handleChange = (e ) =>{
        setPlatform(e.target.value)
    } 

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }


    var jsonLink =  {
        "type": 'link', 
        "uhex": localStorage.getItem('uhex'),
        "shex": localStorage.getItem('shex'),
        "plat": platform,
        "social": username 
    }
    
    var jsonClaim =  {
        "type": 'claim', 
        "uhex": localStorage.getItem('uhex'),
        "shex": localStorage.getItem('shex'),
        "channel": platform,
    }
  
    const formSubmit = (e) => {
        e.preventDefault()
         let request 
        if(!checkbox){
             request = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(jsonLink)
            };
        }else{
            request = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(jsonClaim)
            };
        }


        fetch('https://accounts.parabolics.io/usercfg', request)
            .then(response => response.json())
            .then((response)=>{
                if(response){
                  toast.success(response.message)
                }
               
            })
            .catch((error) => {
                toast.success(error.message)
              })

    }
    return (
        <div>
           <div className="bg-dash-dark-2 py-4">
                <div className="container-fluid">
                        <h2 className="h5 mb-0">Settings</h2>
                </div>
           </div>
         <div>
              <Container fluid className='mt-3'>
                <div className ="col-md-12">
                        <div className ="card py-5 px-5 ">
                            <div className='select-user'>
                            <label class="form-label" style={{fontSize:'18px'}}>Select User:
                                       <select className="setting-btn" onChange={handleChange}>
                                          <option value="discord">Discord User</option>
                                          <option value="telegram">Telegram User</option>
                                        </select>
                               </label>
                               <form onSubmit={formSubmit}>
                                   
                                    <div className ="form-group mt-3 mb-3">
                                        <label for="username" className="form-label" style = {{textTransform: 'capitalize',fontSize:'16px'}}>{platform} Username</label>
                                        <input type="username" className="form-control"  placeholder="Username" onChange = {handleUsername}  required/>
                                    </div>
                                    <Switch 
                                             isOn={checkbox}
                                             handleToggle={() => setCheckbox(!checkbox)}
                                    />
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                                
                        </div>
                    </div>
            </Container >

            

         </div>
        </div>
    );
}

export default Settings;