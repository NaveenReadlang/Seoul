import React from 'react'
import {useState} from 'react'

const Practice = () => {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [letast,setletast] = useState([]);

const submit = (e) => {
  e.preventDefault();
  const verable = {email, password}
  setletast([...letast,verable])
  setEmail("");
  setPassword("");
}

  return(
    <>
      <div ClassName='rootFile'>
        <form onSubmit = {submit}>
            <div ClassName='email-Input'>
                        <lable htmlFor='email'> Email 
                          <input 
                            type='Email' 
                            id='emailInpuit' 
                            placeholder='email' 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}/>
                            </lable>

            </div>

            <div ClassName='password-Input'>
                        <lable htmlFor='password'> Password 
                          <input 
                            type='password' 
                            id='passwordInpuit' 
                            placeholder='password' 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}/>
                          </lable>

                          <button type = "submit">Submit</button>
                          <br/>
                          <br/>


            <div ClassName ="tables">
                        <table>
                          <thead>
                              <tr>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                            {letast.map((entry, bhao) => (
                              <tr key={bhao}>
                                <td>{entry.email}</td>
                                <td>{entry.password}</td>
                                <td>
                                <button type='right'> Right </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
              </div>
            </div>    
        </form>
      </div>
    </>
  )
}
export default Practice;