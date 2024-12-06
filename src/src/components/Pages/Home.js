// Home.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Addusers from "./Users/Addusers";
import EditPage from "./Users/EditPage";

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [details, setDetails] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [editUser, setEditUser] = useState([])
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

    const handleAddUser = (newUser) => {
        const newD = [...details, newUser];
        localStorage.setItem("Abs", JSON.stringify(newD));
        setDetails(newD);
        console.log(newD)
    };

    const deletePage = (index) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this record?");
        if (isConfirmed) {
            const updatedDetails = details.filter((item, i) => i !== item.index);
            localStorage.setItem("Abs", JSON.stringify(updatedDetails));
            setDetails(updatedDetails);
        }
    };

    useEffect(() => {
        const Abs = JSON.parse(localStorage.getItem("Abs"));
        setDetails(Abs || []);
    }, []);

    const handleViewUser = (index) => {
        setSelectedUser(details[index]);
        // navigate(`/user/view/${index + 1}`);
    };

    const handleEditUser = (index) => {
        setEditUser(editUser[index]);
        navigate(`/user/edit/${index + 1}`, {state: { details }});
    };

    const logOut = (e) => {
        e.preventDefault();
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout === true) {
            setIsLoggedIn(false);
            navigate('/');
        }
    };
    return (
        <div className="table">
            <h2>User Entries</h2>
            <button onClick={logOut} className="logOut">Logout</button>            
            <table className="table2">
                <thead>
                    <tr>
                        <th>ID No.</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Age</th>
                        <th>Education</th>
                        <th>Date Of Birth</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((entry, index) => (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{entry.name}</td>
                            <td>{entry.lastName}</td>
                            <td>{entry.email}</td>
                            <td>{entry.contactNo}</td>
                            <td>{entry.age}</td>
                            <td>{entry.education}</td>
                            <td>{entry.dob}</td>
                            <td>{entry.address}</td>
                            <td>
                                <div className="View-Button">
                                    <popup
                                        className="btn btn-outline-primary mr-2"
                                        onClick={((e) =>{
                                            e.preventDefault()
                                            handleViewUser(index)})}
                                    >
                                        <i className="fa fa-eye"></i>
                                    </popup>
                                </div>
                                <div className="EditButton">
                                    <button
                                        className="btn btn-outline-primary mr-2"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleEditUser(index)}}
                                    >
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                </div>
                                <div className="DeleteButton">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault()
                                            deletePage(index)}}
                                        className="btn btn-danger"
                                    >
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
