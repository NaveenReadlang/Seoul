import { TableBody } from "@mui/material";
import React, { useState } from "react";

const FormSecound = () => {
  const [addName, setAddName] = useState("");
  const [addEmail, setAddEmail] = useState("");
  const [allDetails, setAllDetails] = useState([]);

  const handleNameChange = (event) => {
    setAddName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setAddEmail(event.target.value);
  };

  const hanldeClick = (e) => {
    e.preventDefault();
    const Data33 = {
      addName: addName,
      addEmail: addEmail,
    };
    setAllDetails([...allDetails, Data33]);

    setAddName("");
    setAddEmail("");
    console.log(allDetails);
  };

  return (
    <>
      <fieldset className='form-set' style={{ border: "10px solid #ccc", padding: "20px" }}>
        <legend style={{ fontSize: "1.2em", fontWeight: "bold" }}>
          *963.User Information/8520
        </legend>
        <div className="label-name">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            name="addName"
            placeholder="Enter Name"
            value={addName}
            onChange={handleNameChange}
            autoComplete="off"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="addEmail"
            placeholder="Enter E-mail"
            value={addEmail}
            onChange={handleEmailChange}
            autoComplete="off"
          />

          <button
            onClick={hanldeClick}
            className="bg-black text-white m-5 px-5 py-2"
          >-+

            Submit
          </button>
        </div>
      </fieldset>

      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <TableBody>
          {allDetails.map((data, i) => (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{data.addName}</td>
              <td>{data.addEmail}</td>
            </tr>
          ))}
        </TableBody>
      </table>
    </>
  );
};

export default FormSecound;
