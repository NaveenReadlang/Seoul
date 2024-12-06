import React,{useEffect,useState} from 'react'

const CodePrac = () => {
    const [user, setUser] = useState({
        name: "",
        LastName: "",
        education: "",
});
    const [change, setChange] = useState([]);
    
    const { name, LastName, education} = (user);

    const handleOnChange = (event) => {
        setUser(event.target.value)
    };

    const handleClick = () => {
        const NewData = [...change, user ];
        localStorage.setItem('data',JSON.stringify(NewData));
        setChange(NewData);
        setUser('');
    };

    useEffect(()=> {
        const data = JSON.parse(localStorage.getItem('data')) || [];
        setChange(data);
    },[]);


    

  return (
    <>
    <div>
      <h1>Add Names</h1>
      <label htmlFor='Name'>Name</label>
      <input
      type="text"
      id="userss"
      value={name}
      onChange={handleOnChange}
      autoComplete='off'
      />
    <br/>
      <label htmlFor='Name Last'>Last Name</label>
      <input
      type="text"
      id="userss"
      value={LastName}
      onChange={handleOnChange}
      autoComplete='off'
      />
      <br/>
      <label htmlFor='Name Last'>Education</label>
      <input
      type="text"
      id="userss"
      value={education}
      onChange={handleOnChange}
      />
      
      <button onClick={(e)=>{handleClick(e)
        e.preventDefault()
      }}>Change Name</button>
    </div>
    <div>
        <table border="1" style={{ marginTop:"20px"}}>
            <thead>
                <tr border= "4">
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Education</th>
                </tr>
            </thead>

            <tbody>
                {change.map((change,index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{index.name}</td>
                        <td>{index.LastName}</td>
                        <td>{index.education}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  );
}

export default CodePrac
