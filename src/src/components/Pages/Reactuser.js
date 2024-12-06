import React,{useState,useEffect} from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";

const Reactuser = () => {
  const navigate = useNavigate();
  const [ep, setEp] = useState({
    email: '',
    password: '',
  });

const {email, password} = (ep);


  const inputChanges = (e) => {
    setEp({...ep, [e.target.name]: e.target.value});
  }

  const Login = (e) => {
    e.preventDefault();
    const emailInput = ep.email.trim();
    const passwordInput = ep.password.trim();

    const validEmail = "user111@gmail.com";
    const validPassword = "user#33";
  
    if (!emailInput || !passwordInput) {
      alert('Please fill in all fields.');
    } else if (emailInput === validEmail && passwordInput === validPassword) {
      navigate('/analytics_dashboard');
    } else {
      alert('Invalid email or password.');
    }
  }
  

  return (
        <>
        <div>
          <center>
            <form onSubmit={Login}>
            <div className="Images-container">
            
        </div>
              <div className="form2">
                <h2><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg></h2> 
                    <br/>
                    <br/>
                    
                    <div className="emailsIn">
                      <label htmlFor="email"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                      </svg><b> Email </b></label>
                      <input type="email"
                      id="emailInput"
                      className="emails"
                      name="email"
                      value={email}
                      onChange={(event) => inputChanges(event)}
                      autoComplete='off'
                      />
                      
                    </div>
                    <div className="passwordIn">
                      <label htmlFor="password"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                      </svg><b> Password </b>
                      <input type="password"
                      id="passwordInput"
                      className="passwords"
                      name="password"
                      value={password}
                      onChange={(event) => inputChanges(event)}
                      autoComplete='off'
                      />
                      </label>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Log In</button>
                    </div>
                    
                    </form>
                </center>
            </div>
      </>
  )
}

export default Reactuser
