




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
                    </div>

                    <h1 id='CA'>$FT CA: GvJkUuLWfWaY2JAycBj733Gox7jC4XTVPJDvFrrBpump</h1>


                </div>
            </div>

            <div className='App-main' style={{marginTop:"-55vh" }}>
                <h4>
                    $Trump drained liquidity from solana memecoin market! We gotta fight with it
                </h4>
                <h4 style={{margin:"0"}}>
                    Make Solana Great Again!
                </h4>
            </div>
        </>
    )

}


export default MainContent;








