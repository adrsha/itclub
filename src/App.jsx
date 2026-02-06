import React, { useState, useEffect } from 'react';
import Countdown from './countdown/Countdown.jsx';
import Nav from './Nav/Nav.jsx';
import ContactUs from './ContactUs/ContactUs.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';
import Footer from './Footer/Footer.jsx';
import isMobile from './ExtraFuncs.js';
import Parallax from './Parallax/Parallax.js';
import Cards from './Cards/Cards.jsx';
import './App.css';
import './Responsive/Responsive.css';
import './Animations/Animations.css';
import notices from '../data/Notices.json';
import Lines from './Lines/Lines.jsx';
import { LenisComponent } from './Lenis/Lenis.js';


const Carousel = (props) => {
    let path = props.defPath;
    if (path == "" ){
        path = "/defaultPoster.png"
    }
    return <Cards
                id="image"
                src={path}
            />
};

function App() {
    const [noticeVal, setNoticeVal] = useState(0);
        console.log("🫵🏻 Vai Inspect garera heris hai 😂😂😂")


    useEffect(() => {
       const interval = setInterval(() => {
            setNoticeVal((prevVal)=>{
                return (prevVal+1) % notices.length
            })
                console.log("🫵🏻 Vai Inspect garera heris hai 😂😂😂")

        }, 3000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [noticeVal])
    


    return (
        <>
            <Nav events contactUs aboutUs notices dristi />
            <Lines />
            <LenisComponent />
          {
            // isMobile() ? null : <Parallax />
          }
          <Parallax />
            <Countdown />
            <div className="pageContent" id="homePageContent">
                <Cards
                    id="circleButtons"
                    title="KEC IT Club"
                    button1="About Us"
                    link1="#aboutUs"
                    button2="Contact Us"
                    link2="#contactUs"
                />
                <Carousel defPath={notices[noticeVal].posterImage} id={noticeVal}/>
                <Cards
                    id="noticeCard"
                    title={notices[0].noticeHead}
                    content={notices[0].noticeBody}
                    link={`/notices/${notices[0].id}`}
                />
            </div>
            <AboutUs />
            <ContactUs />
            <Footer />
        </>
    );
}

export default App;
