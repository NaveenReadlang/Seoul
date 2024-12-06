import React, { useEffect, useState } from 'react';

const UserDetails = ({ details, onClose }) => {
return (
        <div className="popup">
            <div className="popup-content">
                <span className="Close" onClick={onClose}>&times;</span>
                <h2>User Details</h2>
                <p>Name: {details.name}</p>
                <p>Age: {details.age}</p>
                <p>Education: {details.education}</p>
                <p>Date of Birth: {details.dob}</p>
                <p>Address: {details.address}</p>
            </div>
        </div>
    );
};

const NewForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [education, setEducation] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [entries, setEntries] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [viewDetails, setViewDetails] = useState([]);

    const Add = (e) => {
        e.preventDefault();
        const newEntry = { name, age, education, dob, address };
        const newEntryList = [...entries, newEntry];
        localStorage.setItem('userList', JSON.stringify(newEntryList));
        setEntries(newEntryList);
        setName("");
        setAge("");
        setEducation("");
        setDob("");
        setAddress("");
    };

    const handleEdit = (index) => {
        const entryToEdit = entries [index];
        setName(entryToEdit.name);
        setAge(entryToEdit.age);
        setEducation(entryToEdit.education);
        setDob(entryToEdit.dob);
        setAddress(entryToEdit.address);
        setEditIndex(index);
        setIsEditing(true);
    };

    const handleUpdate = (index) => {
        const updatedEntries = [...entries, index];
        updatedEntries[editIndex] = { name, age, education, dob, address };
        setEntries(updatedEntries);
        setEditIndex(null);
        setIsEditing(false);
        setName("");
        setAge("");
        setEducation("");
        setDob("");
        setAddress("");
    };

    const handleCancel = () => {
        setIsEditing(false);
        setName("");
        setAge("");
        setEducation("");
        setDob("");
        setAddress("");
    };

    const handleDelete = (index) => {
        const updatedEntries = [...entries,[index]];
        updatedEntries.splice(index, 1);
        setEntries(updatedEntries);
    };

    const handleView = (index) => {
        const viewDetails = entries[index];
        setViewDetails(viewDetails);
    };

    useEffect (() => {
        const userList = JSON.parse(localStorage.getItem('userList'))
        console.log(userList)
        setEntries(userList);
        },[]);

    return (
        <>
            <div className="rootFile">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <form onSubmit={isEditing ? handleUpdate : Add}>
                <div className="dialog-Box">
            <dialog>
            {viewDetails && <UserDetails details={viewDetails} onClose={(e) => {
                e.preventDefault();
                setViewDetails(null)
            }} />}
            </dialog>
            </div>
            <h1>Home Page</h1>
                    <fieldset>
                        <center>
                            <h2>User Details</h2>
                            <div className="first-name">
                                <label htmlFor="name"> Name </label>
                                <input
                                    type="text"
                                    id="InputName"
                                    placeholder="name"
                                    className="name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    autoComplete='off'
                                />
                            </div>
                            <br />
                            <div className="input-age">
                                <label htmlFor="age"> Age </label>
                                <input
                                    type="number"
                                    id="InputAge"
                                    placeholder="age"
                                    className="age"
                                    value={age}
                                    onChange={(event) => setAge(event.target.value)}
                                    autoComplete='off'
                                />
                            </div>
                            <br />
                            <div className="Education">
                                <label htmlFor="education"> Education </label>
                                <select
                                    className="education"
                                    id="InputEducation"
                                    value={education}
                                    onChange={(event) => setEducation(event.target.value)}
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
                            <br />
                            <div className="Input-Date">
                                <label htmlFor="dob"> Date Of Birth </label>
                                <input
                                    type="date"
                                    id="dob"
                                    className="dob"
                                    value={dob}
                                    onChange={(event) => setDob(event.target.value)}
                                    autoComplete='off'
                                />
                            </div>
                            <br />
                            <div className="Address">
                                <label htmlFor="address"> Address </label>
                                <input
                                    type="text"
                                    id="InputAdd"
                                    placeholder="address"
                                    className="address"
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)}
                                    autoComplete='off'
                                />
                            </div>
                            <br />
                            <div className="Add">
                                {isEditing ? (
                                    <>
                                        <button type='submit'> Update </button>
                                        <button type='button' onClick={handleCancel}> Cancel </button>
                                    </>
                                ) : (
                            
                                        <button type='submit' className="Add-Button"> Add </button>
                                    
                                    )}
                            </div>
                        </center>
                    </fieldset>
                </form>
            </div>

            <div className="table">
                <h2>User Entries</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Education</th>
                            <th>Date Of Birth</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.name}</td>
                                <td>{entry.age}</td>
                                <td>{entry.education}</td>
                                <td>{entry.dob}</td>
                                <td>{entry.address}</td>
                                <td>
                                    <div className="View-Button">
                                        <button onClick={() => { 
                                            handleView(index)
                                            }}><i className="fa fa-eye"></i></button>
                                    </div>
                                    <div className="EditButton">
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            handleEdit(index)
                                            }}><i className="fa fa-pencil"></i></button>
                                    </div>
                                    <div className="DeleteButton">
                                        <button onClick={() => {
                                            handleDelete(index)
                                        }}><i className="fa fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default NewForm;
