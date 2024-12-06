import { Box } from '@mui/material';
import React from 'react';

const AddressForm = () => {

    return(
        <>
        <fieldset style={{ border: "10px solid #ccc", padding: "20px" }}>
            <legend style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                Address Form
            </legend>
        <div>
            <label htmlFor='text' className="field-House">House No./Flat No.
                <input
                    type='text'
                    placeholder="No."
                    name='houseNo'
                    value={undefined}
                    onChange={undefined}
                />
            </label>
            <label htmlFor='text' className="field-street">Street Address</label>
                <input 
                    type='text'
                    placeholder='Enter Street Address'
                    name='streetAdd'
                    value={undefined}
                    onChange={undefined}
                />
                <br/>
            <label htmlFor='text' className="field-full">Full Address.</label>
                <input 
                    type='text'
                    placeholder='Enter Street Address'
                    name='fullAdd'
                    value={undefined}
                    onChange={undefined}
                />
            <label htmlFor='text' className="field-pramanent">Pramanent Address.</label>
                <input 
                    type='text'
                    name='confAdd'
                    placeholder='Enter Street Address'
                    value={undefined}
                    onChange={undefined}
                />
                <br/>
             <label htmlFor='text' className="field-pincode">Pincode No.</label>   
             <input 
                    type='text'
                    placeholder='Enter Street Address'
                    name='pinCode'
                    value={undefined}
                    onChange={undefined}
                />
        </div>
        </fieldset>
        </>
    )
}

export default AddressForm;