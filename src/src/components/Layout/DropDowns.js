import React from 'react'

const DropDowns = () => {
  return (
    <>
        <div className="drop-down">
            <select id='menDrop' className="dropdown">
                    <option value='' disabled selected>Men's</option>
                    <option value='Tshirt'>T-Shirt</option>
                    <option value='shirt'>Shirt</option>
                    <option value='jeans'>Jeans</option>
                    <option value='kurta'>Kurta's</option>         
            </select>
            
                <select id='womenDrop' className="dropdown">Women's
                    <option value='' disabled selected>Women's</option>
                    <option value='tShirtTop'>T-Shirt/Tops</option>
                    <option value='wShirt'>Shirt</option>
                    <option value='WJeans'>Jeans</option>
                    <option value='scult'>Scult</option>
                    <option value='wZocker'>Zocker</option>
                </select>
            </div>
    </>
  )
};

export default DropDowns;