import React,{useEffect, useState} from "react"
import { useParams, useNavigate } from "react-router-dom";

const About = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const navigate = useNavigate();

    return (
        <>
            <div className= "about-color">
                <h1> About Page </h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Optio nobis temporibus earum quam mollitia magnam voluptatem nulla? Esse quidem nihil modi consequuntur veritatis delectus earum aliquid quas blanditiis, 
                ipsum architecto?0</p>

                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Optio nobis temporibus earum quam mollitia magnam voluptatem nulla? Esse quidem nihil modi consequuntur veritatis delectus earum aliquid quas blanditiis, 
                ipsum architecto?0</p>

                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Optio nobis temporibus earum quam mollitia magnam voluptatem nulla? Esse quidem nihil modi consequuntur veritatis delectus earum aliquid quas blanditiis, 
                ipsum architecto?0</p>
            </div>
        </>
    )
}
export default About