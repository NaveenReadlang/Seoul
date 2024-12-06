import React from 'react';
import AddressForm from './AddressForm';
import FormSecound from './FormSecound';
import './Users/Form.css';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Layout/Logo';

const SideBar = () => {

        const logS = [
            <img
          height="7 0"
          width="70"
          src="Images/SeuolLogo.jpg"
          />
        ];
    // Question No. 1

    // 1. Ek function likhiye jo kisi string ka length return kare.

    // showing word length in this code.

    // const interE = prompt('Enter Name?');
    // if(interE.length === 0){
    //     console.log("Please enter name !")
    // }else{
    // console.log(`name length is - ${interE.length}`);
    // };

    // Question No. 2

    //  2. Ek program likhiye jo 1 se 10 tak ke numbers print kare using:
    //     for loop

    // Use For Loop.

    // for (let p = 1; p <= 10; p++) {
    // console.log(p);
    // }

    // Question No. 3

    // 3. Ek function likhiye jo kisi sentence ke har word ka first letter capital kare.

    // All capital word.

    // const name = "rahul";
    // const capitalS = name.toUpperCase();
    // console.log(capitalS);

    // Question No. 4

    // 4. Ek program likhiye jo kisi array ke sabhi elements ka sum nikal ke de.
    // const numbers = [1,2,3,4,5]
    // const plusNum = numbers.reduce((accumulated, currentValue) =>
    //     accumulated + currentValue, 0);
    // console.log(plusNum);



    return (
            <div className="sidebar">
                <h2>{logS}</h2>
                <ul>
                    <li className="side-bar">
                        <NavLink className="nav-link" exact to="/home"> Home </NavLink>
                    </li>
                    <li className="side-bar">
                        <NavLink className="nav-link" exact to="/design"> New Designs </NavLink>
                    </li>
                    <li className="side-bar">
                        <NavLink className="nav-link" exact to="/cart"> Cart </NavLink>
                    </li>
                    <li className="side-bar">
                        <NavLink className="nav-link" exact to="/contact"> Contact </NavLink>
                    </li>
                </ul>
            </div>
    )
};
export default SideBar;