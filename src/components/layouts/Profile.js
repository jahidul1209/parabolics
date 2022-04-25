import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import {toast} from "react-toastify"

function Profile(props) {
    const[discordUser , setDiscordUser] = useState()
    const[telegramUser , setTelegramUser] = useState()
    const[name , setName] = useState()
    const[userName , setUserName] = useState()
    const[userMail , setUserMail] = useState() 
    // const[userGroup , setUserGroup] = useState()
    // const[userParams , setUserParams] = useState() 
  
    var jsonUser =  {
        "type": "fetch",
        "uhex": localStorage.getItem('uhex'),
        "shex": localStorage.getItem('shex'),

    }
   const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonUser)
    };

       const  userInfo = () =>{
            fetch('https://accounts.parabolics.io/usercfg', request)
            .then(response => response.json())
            .then((response)=>{
                console.log(response.data)
                setName(response.data.BASICS.NAME) 
              setDiscordUser(response.data.CONNECTIONS.DISCORD.SOCIAL)
              setTelegramUser(response.data.CONNECTIONS.TELEGRAM.SOCIAL) 
              setUserName(response.data.BASICS.NAME)
              setUserMail(response.data.MAIL.ADDR) 
            //   setUserGroup(response.data.PERMS.USERGROUPS) 
            //   setUserParams(response.data.PERMS.USERPERMS.PREMIUM_ACCESS) 
               
               
            })
            .catch((error) => {
                console.log(error)
                toast.success(error.message)
              })
        }
        useEffect(() => {
             userInfo()
          },[])


    return (
        <div>
            { props.name ?  name :
            
            <>
            <div className="bg-dash-dark-2 py-4">
                <div className="container-fluid">
                        <h2 className="h5 mb-0">Profile</h2>
                </div>
           </div>

           <div>
           <Container fluid className='mt-3'>
                <div className ="col-md-12">
                        <div className ="card py-5 px-5 ">
                            <div className='user-info'>
                            <table class="table table">
                                <tbody>
                                    <tr>
                                        <th >Name</th>
                                        <td style={{textTransform:'capitalize'}}>{name}</td>
                                    </tr>
                                    <tr>
                                         <th>Username</th>
                                         <td>{userName}</td>     
                                     </tr>                                        
                                     <tr>
                                            <th>Email</th>
                                            <td>{userMail}</td>
                                     </tr>
                                     <tr>
                                            <th>Discord Username</th>
                                            <td>{discordUser}</td>
                                      </tr>
                                      <tr>
                                            <th>Telegram Username</th>
                                            <td>{telegramUser}</td>
                                       </tr> 
                                         {/* <tr>
                                            <th> User Groups</th>
                                            <td>{userGroup}</td>
                                       </tr>   
                                       <tr>
                                            <th> User Params</th>
                                            <td>{userParams}</td>
                                       </tr>            */}
                                   </tbody></table>
                              </div>
                        </div>
                </div>
               </Container>
           </div>
            
            </>
            }
           
        </div>
    );
}


export default Profile;