import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";

import "../App.css";

import fuckImg from "../images/fuck.png"
import twitter from "../images/twitter.png"
import github from "../images/github.png"
import telegram from "../images/telegram.png"

const sendMessage = () => {
    return (
        <>
            <div className='App-main'>
                <div style={{ padding: "20px", textAlign: "center" }}>
                    <h1 id='Fuck'>Send "Fuck" to $TRUMP creator</h1>
                    <h2>on solana blockchain directly</h2>
            
                </div>
            </div>

            <div className='App-main'>

            </div>
        </>
    )

}


export default sendMessage;








