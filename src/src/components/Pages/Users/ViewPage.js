import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const ViewPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate()
    const { id } = useParams();
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const Abs = JSON.parse(localStorage.getItem("Abs"));
        const userIndex = parseInt(id) - 1;
        setSelectedUser(Abs[userIndex]);
    }, [id]);
    
    if (!selectedUser) return null;

    const handleback = (e) => {
        e.preventDefault()
        navigate("/Home")
    }

    const handleEdit = () => {
        navigate(`/user/edit/${id}`)
    }

    const logOut = (e) => {
        e.preventDefault();
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            setIsLoggedIn(false);
            navigate('/');
        }
    };

    return (
        <>
        <button onClick={logOut} className="logOut"> Logout </button>
            
                <center>
                    <div className="view-page">
                        <h2>Viewing User Details</h2>
                        <br/>
                        <hr/>
                        
                            <h4><b>Name:-</b><i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedUser.name}</i></h4>
                            <br/>
                            <hr/>

                            <h4><b>Last Name:-</b><i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedUser.lastName}</i></h4>
                            <br/>
                            <hr/>

                            <h4><b>Email:-</b><i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedUser.email}</i></h4>
                            <br/>
                            <hr/>

                            <h4><b>Mobile No.:-</b><i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedUser.contactNo}</i></h4>
                            <br/>
                            <hr/>

                            <h4><b>Age:-</b><i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedUser.age}</i></h4>
                            <br/>
                            <hr/>

                            <h4><b>Education:-</b><i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedUser.education}</i></h4>
                            <br/>
                            <hr/>

                            <h4><b>Date of Birth:-</b><i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedUser.dob}</i></h4>
                            <br/>
                            <hr/>

                            <h4><b>Address:-</b><i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedUser.address}</i></h4>
                            <hr/>

                            <button onClick={handleback} className="btn-back">Back</button>
                            <button onClick={handleEdit} className="btn-edit">Edit</button>

                    </div>
                </center>
        </>
    );
};

export default ViewPage;
