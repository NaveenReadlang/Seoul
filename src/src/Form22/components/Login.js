import React from 'react'
import {useEffect , useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
    const[users, setUser ] = useState({
        email:"",
        password:""
    });

    const {email, password} = users;
       const changeInput = (e) => {
         setUser = ({...users,[e.target.email]: e.target.value})
        }

         const submitPage = (e) => {
            e.preventDefault()
            navigate("/Regist", {replace : true});
    } 


  return (
    <div>
        <h1>Login Pages</h1>
        <form onSubmit={e => submitPage(e)}>
            <label htmlFor="Email">Email
            <input 
            type="email" 
            placeholder="Email" 
            name="mail" 
            id="emailInput"
            value={email}
            onChange={event => changeInput(event)} 
            />
            </label>
            <br/>
            <label htmlFor="Password"> Password
            <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            id="emailInput"
            value={password}
            onChange={event => changeInput(event)}
            />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    </div>
      
    
  )
}

export default Login
