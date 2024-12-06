import React, { useEffect, useState } from "react";
import PracticeView from "./PracticeView";
import AddressForm from "./AddressForm";

const PracticeForm = () => {
  const [rollNo, setRollNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressText, setAddressText] = useState("");
  const [allData, setAllData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "rollNo") {
      setRollNo(value);
    } else if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "addressText") {
      setAddressText(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      rollNo: rollNo,
      firstName: firstName,
      lastName: lastName,
      addressText: addressText,
    };
    const updatedData = [...allData, newData];
    setAllData(updatedData);
    localStorage.setItem("dataRender", JSON.stringify(updatedData));
    setRollNo("");
    setFirstName("");
    setLastName("");
    setAddressText("");
  };

  useEffect(() => {
    const letestData = JSON.parse(localStorage.getItem("dataRender"));
    if (Array.isArray(letestData)) {
      setAllData(letestData);
    }
  }, []);

  return (
    <>
    <div className="row">
    </div>
    <div className="Practice-Form">
        <form onSubmit={handleSubmit}>
            <fieldset className="Details-Form" style={{ border: "2px solid black", padding: "20px" }}>
                <legend style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                    Personal Details
                    </legend>
                    <label htmlFor="number"className="field-roll">Roll No</label>
                        <input
                            type="number"
                            name="rollNo"
                            placeholder="Enter Roll No"
                            value={rollNo}
                            onChange={handleChange}
                        />            

                    <label htmlFor="text" className="field-name">Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter Name"
                            value={firstName}
                            onChange={handleChange}
                        />
                    <br />

                    <label htmlFor="text" className="field-last">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChange={handleChange}
                        />
                    <br />

                    <label htmlFor="text" className="field-address">Address.
                        <textarea
                            type="text"
                            name="addressText"
                            placeholder="Enter current address"
                            value={addressText}
                            onChange={handleChange}
                        />
                    </label>
                </fieldset>
                    <br/>
                    
                <fieldset className="Address-Form" style={{ border: "2px solid black", padding: "20px" }}>
                        <legend style={{ fontSize: "1.2em", fontWeight: "bold" }}>Address Form</legend>
                            <AddressForm />
                                <button
                                    className="bg-black text-white m-5 px-5 py-2"
                                    type="Submit"
                                >
                                    Submit
                                </button>
                    </fieldset>
            </form>
                    
        </div>
    </>            
  );
};

export default PracticeForm;
