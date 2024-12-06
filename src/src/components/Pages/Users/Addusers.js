import React,{useEffect, useState} from "react"
import {useNavigate} from 'react-router-dom'


const Addusers = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let navigate = useNavigate();
    const [details, setDetails] = useState([]);
    const [user, setUser] = useState({
        name: "",
        lastName:"",
        email:"",
        contactNo:"",
        age: "",
        education: "",
        dob: "",
        address: ""
});
    

const { name, lastName, email, contactNo, age, education, dob, address } = (user);

const Submit = (e) => {
    e.preventDefault();
    if (!name || !lastName || !email || !contactNo || !age || !education || !dob || !address) {
        alert("Please fill in all fields.");
        return
    }else if  (age < 13){
        alert("please enter vailed age")
    }else{
    const newUserDetails = ([...details, user]);
    localStorage.setItem('Abs', JSON.stringify(newUserDetails));
    setDetails(newUserDetails);
    setDetails('')
    }
}
const InputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
};

useEffect  (() => {
    const Abs = JSON.parse(localStorage.getItem('Abs'))
    setDetails(Abs);
},[]);

const logOut = (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("Are you sure you want to log Out?");
    if (confirmLogout) {
        setIsLoggedIn(false);
        navigate('/');
    }else{
    
    }
};
const NextPageHandler = () => {
    navigate("/Home")
};

  return (
    <>
        <div>
            <h1>Add User</h1> 
            <div className="Rootfile">
                <center>
            <div className="rootFile">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <button onClick={logOut} className="logOut"> Logout </button>
                <form onSubmit={(event) => Submit(event)}>
                    <fieldset>
                        <center>
                            <h2>User Details</h2>
                            <br/>
                            <br/>
                                <label htmlFor="text"><b> Name </b></label>
                                <input
                                    type="text"
                                    id="InputName"
                                    placeholder="name"
                                    className="name"
                                    name="name"
                                    value={name}
                                    onChange={event => InputChange(event)}
                                    autoComplete='off'
                                />
                            <label htmlFor="text"><b> Last Name </b></label>
                                <input
                                    type="text"
                                    className="lastName"
                                    id="InputLastName"
                                    placeholder="last Name"
                                    name="lastName"
                                    value={lastName}
                                    onChange={event => InputChange(event)}
                                    autoComplete='off'
                                />

                                <div className="email-mobileNo">
                                <label htmlFor="name"><b> email </b></label>
                                <input
                                    type="email"
                                    id="emailInput"
                                    placeholder="email"
                                    className="emailInput"
                                    name="email"
                                    value={email}
                                    onChange={event => InputChange(event)}
                                    autoComplete='off'
                                />
                                
                                <label htmlFor="mobileNo"><b> Mobile No.</b></label>
                                <input
                                    type="number"
                                    className="contactNo"
                                    id="Inputconatct"
                                    placeholder="contactNo"
                                    name="contactNo"
                                    value={contactNo}
                                    onChange={event => InputChange(event)}
                                    autoComplete='off'
                                />
                                
                                </div>
                            <div >
                                <label htmlFor="age"><b> Age </b></label>
                                <input
                                    type="text"
                                    maxlength="2"
                                    id="InputAge"
                                    className="input-age"
                                    placeholder="age"
                                    name="age"
                                    value={age}
                                    onChange={event => InputChange(event)}
                                    autoComplete='off'
                                />
                            
                            
                            
                                <label htmlFor="education" ><b> Education </b></label>
                                <select
                                    className="Input-education"
                                    id="InputEducation"
                                    name="education"
                                    value={education}
                                    onChange={event => InputChange(event)}
                                    autoComplete='off'
                                >
                                    <option> --Select-- </option>
                                    <option>B.Tech</option>
                                    <option>M.Tech</option>
                                    <option>Data Science</option>
                                    <option>PHP Dev</option>
                                    <option>React Dev</option>
                                    <option>Java Dev</option>
                                    <option>CSS Designer</option>
                                </select>
                            </div>
                            <div className="Input-Date">
                                <label htmlFor="dob"><b> Date Of Birth </b></label>
                                <input
                                    type="date"
                                    id="dob"
                                    className="dob"
                                    name="dob"
                                    value={dob}
                                    onChange={event => InputChange(event)}
                                    autoComplete='off'
                                />
                            </div>
                            <br />
                            <div className="Address">
                                <label htmlFor="address" class="form-label"><b> Address </b></label>
                                <textarea
                                    id="InputAdd"
                                    name="address"
                                    placeholder="address"
                                    className="address"
                                    value={address}
                                    onChange={event => InputChange(event)}
                                    autoComplete='off'
                                ></textarea>
                            </div>
                            <br />
                                <button type='submit' className="Add-Button"> Submit </button>
                                <button onCLick={NextPageHandler} type="button" className="Add-Button">Next</button>
                        </center>
                    </fieldset>
                </form>
            </div>
            </center>
        </div>
        
    </div>
    </>
  )
};
export default Addusers
