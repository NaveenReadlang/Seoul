import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Layout/Navbar';
import './components/Pages/Users/Form.css'
// import Home from './components/Pages/Home';
// import NoFound from './components/Pages/NoFound';
// // import Contact from './components/Pages/Contact';
// import About from './components/Pages/About';
// import Reactuser from './components/Pages/Reactuser';
// import Adduser from './components/Pages/Users/Addusers';
// import ViewPage from './components/Pages/Users/ViewPage';
// import EditPage from './components/Pages/Users/EditPage'
// import Analytics from './components/Pages/Users/Analytics';
// // import FormikBasic from './components/Pages/FormikBasic';
// import FormikForm from './components/Pages/FormikForm';
// // import Echarts from './components/Pages/Echarts';
// // import Logo from './components/Layout/Logo';
// import PracticeForm from './components/Pages/PracticeForm';
import AddressForm from './components/Pages/AddressForm';
import FormSecound from './components/Pages/FormSecound';
// import MultiStepForm from './components/Pages/MultiStepForm';
import SideBar from './components/Pages/SideBar.js';
import DropDowns from './components/Layout/DropDowns.js';
// import Logo from './components/Layout/Logo.js'
import PageImage from './components/Seoal/PageImage';
import Men from './components/Seoal/Men.js';
import Women from './components/Seoal/Women.js';
import KidS from './components/Seoal/KidS.js';
import NavBars from './components/Seoal/NavBars.js';
import LoginUser from './components/Seoal/SideOption/LoginUser.js';
import './components/Seoal/Seoul.css';

const App = () => {

    return (
        <>                
            <div>
                {/* <DropDowns/> */}
                <BrowserRouter>
                    {/* <SideBar /> */}
                    <NavBars />
                        <Routes>
                            <Route path='/home' element={<PageImage />} />
                            <Route path='/men' element={<Men />} />
                            <Route path='/women' element={<Women />} />
                            <Route path='/kid' element={<KidS />} />
                            {/* <Route path='/LoginUser' element={<LoginUser />} /> */}
                            
                        </Routes>
                </BrowserRouter>
            
            
            {/* <MultiStepForm/> */}
            {/* <Navbar title={Logo}/> */}
            
            {/* <BrowserRouter>
                    <Routes>
                        {/*<Route path='/' element={<Reactuser />} />
                        <Route path='/Home' element={<Home />} />
                        <Route path='/Contact' element={<Contact />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/analytics_dashboard' element={<Analytics />} />
                        <Route path='/user/add' element={<Adduser />} />
                        <Route path='/user/view/:id' element={<ViewPage />} />
                        <Route path='/user/edit/:id' element={<EditPage />} />
                        <Route path='*' element={<NoFound />} />
                    </Routes>
            </BrowserRouter>  */}

            {/* <Echarts /> */}
                {/* <FormikForm /> */}
                {/* <PracticeForm /> */}
                    {/* <div>
                        <FormSecound />
                    </div> */}
            </div>
        </>
    );
};

export default App;
