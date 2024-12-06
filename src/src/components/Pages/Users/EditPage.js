import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const EditPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isEditing, setIsEditing] = useState();
    const location = useLocation();
    // const allDetails = location.state?.details;
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        email: '',
        contactNo: '',
        age: '',
        education: '',
        dob: '',
        address: '',
    });

    useEffect(() => {
        if (location.state && location.state.details) {
            const fetchData = location.state.details[id - 1]
            setUser(fetchData);
      }
    }, [location.state]);

    console.log(location.state);

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleUpdated = (e) => {
        e.preventDefault();
        const updatedData = JSON.parse(localStorage.getItem('Abs')) || [];
        updatedData[id - 1 ] = user
        localStorage.setItem('Abs',JSON.stringify(updatedData));
        if(updatedData){
            alert('Are You Sure?')
        } else{
            navigate('/user/edit')
        }
            return navigate('/Home');
        }
        

    const handleCancel = (e) => {
        e.preventDefault();
        const cancelOutPut = window.confirm("are you sure cancel editing?");
        if(cancelOutPut){
            navigate("/Home");
        }else{

        } 
    };
    const logOut = (e) => {
        e.preventDefault();
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            setIsLoggedIn(true);
            navigate('/');
        }else{

        }
    };
    

    return (
        <div className="Edit-Page">
            <button onClick={logOut} className="logOut"> Logout </button>
            <h1>Edit User</h1>
            <br/>
            <br/>
            
            <center>
                <h3>Update Details</h3>
                <br/>
            <form onSubmit={handleUpdated}>
                <div>
                    <label htmlFor="name">Name </label>
                    <input
                        type = "text"
                        id = "name"
                        className = "Input-name"
                        placeholder = "name"
                        name = "name"
                        value = {user.name}
                        onChange = {handleInputChange}
                        autoComplete = 'off'
                    />
                    
                    <label htmlFor = "lastName">Last Name </label>
                    <input
                        type = "text"
                        id = "lastName"
                        className = "Input-lastname"
                        placeholder = "last name"
                        name = "lastName"
                        value = {user.lastName}
                        onChange = {handleInputChange}
                        autoComplete = 'off'
                    />
                    
                </div>
                
                <label htmlFor="name"> Email </label>
                    <input
                        type ="email"
                        id ="emailInput"
                        className ="Input-email"
                        placeholder ="email"
                        name ="email"
                        value ={user.email}
                        onChange ={handleInputChange}
                        autoComplete ='off'
                    />
                    
                    
                <label htmlFor="MobileNo">Mobile No. </label>
                    <input
                        type ="number"
                        id ="MobileNo"
                        className ="Input-MobileNo"
                        placeholder ="mobile no"
                        name ="contactNo"
                        value ={user.contactNo}
                        onChange ={handleInputChange}
                        autoComplete ='off'
                    />

                <div>
                    <label htmlFor = "age"> Age </label>
                    <input
                        type ="text"
                        maxLength ="2"
                        id ="age"
                        className ="Input-age"
                        placeholder ="age"
                        name ="age"
                        value ={user.age}
                        onChange ={handleInputChange}
                        autoComplete ='off'
                    />

                    <label htmlFor="education"> Education </label>
                    <select
                        id="education"
                        className="Edit-Education"
                        name="education"
                        value={user.education}
                        onChange={handleInputChange}
                        autoComplete='off'>
                    
                        <option> --Select-- </option>
                            <option> B.Tech </option>
                            <option> M.Tech </option>
                            <option> Data Science </option>
                            <option> PHP Dev </option>
                            <option> React Dev </option>
                            <option> Java Dev </option>
                            <option> CSS Designer </option>
                    </select>
                    
                </div>
                <div>
                    <label htmlFor ="dob"> Date of Birth </label>
                    <input
                        type ="date"
                        id ="dob"
                        className ="Input-dob"
                        name ="dob"
                        value ={user.dob}
                        onChange ={handleInputChange}
                        autoComplete ='off'
                    />
                    
                </div>
                <div>
                    <label htmlFor="address"> Address </label>
                    <input
                        type ="text"
                        id = "address"
                        className = "Input-address"
                        placeholder = "address"
                        name = "address"
                        value = {user.address}
                        onChange = {handleInputChange}
                        autoComplete = 'off'
                    />
                    
                </div>
                
                <button type='update' className="btn-S">Updated</button>
               {/* <button type="handleCancel" className="btn-S">Cancel</button> */}
            </form>
            </center>
        </div>
    );
};

export default EditPage;
