import React, { useEffect } from 'react'
import { useState } from "react"


const FsFrom = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fatherName, setfatheName] = useState("");
    const [addressName, setaddrName] = useState("");
    const [maleName, setMale] = useState("Male");
    const [femaleName, setFemale] = useState("Female");
    const [date, setdateName] = useState("");
    const [select, setSelect] = useState("");
	const [entries, setEntries] = useState([]);

    const Submit = (e) => {
        e.preventDefault()
		const InputData = {name, lastName, fatherName, addressName, maleName, femaleName, date, select}
		const allDetails = ([...entries, InputData])
		localStorage.setItem('details',JSON.stringify(allDetails));
		setEntries(allDetails);
		setName("");
		setLastName("");
		setfatheName("");
		setaddrName("");
		setMale("");
		setFemale("");
		setdateName("");
		setSelect("");

    };
/*
	useEffect(() => {
		const details = JSON.parse(localStorage.getItem('details'));
		console.log(details);
		setEntries(details);
		
	},[]);
*/

    return (
        <>
            <div className="rootFile">
                <form onSubmit={Submit}>
                    <div>
                            <center>
                                <marquee scrollamount="8" bgcolor="white"> <b>This Registration form for tesing</b> </marquee>
                                <h4>Registration Form</h4>

                                <div className="input-name">
                                    <label htmlFor="Name"> Name
                                        <input 
											type="text"
											id="fInput" 
											placeholder="enter first name" 
											className="text-name" 
											value={name} 
											onChange={(event) => setName(event.target.value)} 
											/>
											<br /><br />
                                    </label>
                                </div>

                                <div className="input-last">
                                        <label htmlFor="Last Name"> Last name
                                            <input 
												type="text" 
												id="lastInput" 
												placeholder="enter last name" 
												className="text-name" 
												value={lastName} 
												onChange={(event) => setLastName(event.target.value)} 
												/>
												<br /><br />
                                        </label>
                                </div>
                                <div className="input-father">
                                    <label htmlFor='Father Name'> Father Name
                                        <input 
											type="text" 
											id="fathInput" 
											placeholder="enter last name" 
											className="text-name"
											value={fatherName}
											onChange={(event) => setfatheName(event.target.value)} />
											<br /><br />
                                    </label>
                                </div>

                                <div className="input-address">
                                    <label htmlFor='Address'> Address
                                        <input 
											type="text" 
											id="addressInput" 
											placeholder="enter last name" 
											className="text-name"
											value={addressName}
											onChange={(event) => setaddrName(event.target.value)}/>
											<br /><br />
                                    </label>
                                </div>

                                <div ClassName="gender">
                                    <label> Gender: </label><br /><br />

                                		<label htmlFor='Male'> Male
                                    <input 
										type="radio" 
										id="maleInput" 
										name="Male" 
										className="radio-button"
										checked={maleName}
										onChange={(event) => {
										setMale(event.target.checked);
										const value = event.target.checked;
										if(value === true) {
										setFemale("male");
										}
										}
										}
										/>

                                		</label>

                                		<label htmlFor='Female'> Female
                                    <input 
										type="radio" 
										id="femaleInput" 
										name="Male" 
										className="radio-button"
										checked={femaleName}
										onChange={(event) => {
										setFemale(event.target.checked);
										const value = event.target.checked;
										if(value === true) {
										setMale("female");
										}
										}
										} 
										/>
										</label>
									</div>

                                <div ClassName="input-date">
                                    <label htmlFor="date"> Date of Birth:
                                        <input 
											type="date" 
											id="dateInput" 
											ClassName="date"
											value={date}
											onChange={(event) => setdateName(event.target.value)}/>
                                    </label>
                                </div>

                                <div ClassName="input-select">
                                    <label htmlFor='Ids'> Select Id's </label>
                                    <select name="Ids" id="selectInput"
										value={select}
										onChange={(event) => setSelect(event.target.value)}>
                                        <option>--None--</option>
                                        <option>Addhar Card</option>
                                        <option>Pan Card</option>
                                        <option>Voter ID</option>
                                        <option>Driving Licence</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <label htmlFor="document"> Upload self attached document:
                                    <input type="file" id="document" name="document" />
                                </label><br /><br /><br /><br />

                                <button type="submit"> Submit </button>
                            </center>
                    </div>
                </form>
            </div>
			
			<div ClassName="Tables">
				<h3>Entries</h3>
				<table>
					<tr>
						<th>Name</th>
						<th>Last Name</th>
						<th>Father Name</th>
						<th>Address</th>
						<th>Gender </th>
						<th>Date of Birth</th>
						<th>ID's</th>
					</tr>
					{entries.map((entry, index) => (
						<tr key = {index}>
							<td>{entry.name}</td>
							<td>{entry.lastName}</td>
							<td>{entry.fatherName}</td>
							<td>{entry.addressName}</td>
							<td>{entry.date}</td>
							<td>{entry.select}</td>
						
							<td>
								<button type="submit">View</button>
								<button type="submit">Edit</button>
								<button type="submit">Delete</button>
							</td>
						</tr>
					
					))}
				</table>
			</div>
        </>
    );
};
export default FsFrom