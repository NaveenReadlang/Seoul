import React,{useState} from 'react';
import AddressForm from './AddressForm';
import FormSecound from './FormSecound';

const SlideBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <button
        className="toggle-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"} Sidebar
      </button>

      {isOpen && (
            <div className = "slidebar">
                <h2> Detail Form </h2>
                <ul className="slidebar-menu">
                    <li>First
                        <a href='#Personal'>
                            <FormSecound />
                        </a>
                    </li>
                    <li>Secound
                        <a href="#Address">
                            <AddressForm />
                        </a>
                    </li>
                    {/* <li>
                        <a href="#Qulify">
                            <Education />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Questions />
                        </a>
                    </li> */}
                </ul>
            </div>
)}
        </>
    )
};
export default SlideBar;