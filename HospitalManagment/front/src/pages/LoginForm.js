import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function LoginForm () {

  //states to hold the username and password variables
  const navigate = useNavigate();
  const[name,setName]=useState("");
  const[pass,setPass]=useState("");
  


  return (
    
    <table id="table">         
      <tr>
        <td> <label>Username :</label></td>
        <td>
          <input type= "email" id="username" name="username"  placeholder="Enter username" value={name} onChange={(t)=>{setName(t.value)}}/>
        </td>
      </tr>
      <tr>
        <td><label>Password: </label></td> 
        <td>
          <input type= "password" id="password" name="password"  placeholder="Enter password" value={pass} onChange={(t)=>setPass(t.value)}/>
        </td>
      </tr>
      <tr>
        <td>
          <input id ="login" type="button" value ="Login"  onSubmit={()=>navigate('/')}/>
        </td>              
      </tr>
    </table>    
  );
}
export default LoginForm;