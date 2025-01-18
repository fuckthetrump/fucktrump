




import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";

import "../App.css";

import fuckImg from "../images/fuck.png"
import twitter from "../images/twitter.png"
import github from "../images/github.png"
import telegram from "../images/telegram.png"

const MainContent = () => {
    return (
        < >
            <div className='App-main'>
                <div style={{ padding: "20px", textAlign: "center" }}>
                    <img src={fuckImg} alt="" style={{ width: "50%", maxWidth: "600px" }} />
                    <h1 id='Fuck'>Fuck the Trump</h1>
                    <div className='social'>
                        <a href='https://x.com/FuckTrumpMeme' target="_blank" rel="noopener noreferrer">
                            <img className='imgLinkSocial' src={twitter} alt="" />
                        </a>
                        <a href='https://github.com/fuckthetrump' target="_blank" rel="noopener noreferrer">
                            <img className='imgLinkSocial' src={github} alt="" />
                        </a>
                        <a href='https://t.me/FuckTrumpMemecoin' target="_blank" rel="noopener noreferrer">
                            <img className='imgLinkSocial' src={telegram} alt="" />
                        </a>
                    </div>

                    <h1 id='CA'>$FT CA: soon</h1>
                </div>
            </div>
            
            <div className='App-main'>

            </div>
        </>
    )

}


export default MainContent;








