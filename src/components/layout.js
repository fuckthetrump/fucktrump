import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import "../App.css";

import arrow from "../images/arrow.png"


const Layout = () => {
    const location = useLocation();

    return (
        <div className="App">
            <header className="App-header">
                <div className='App-header-content'>

                    <div className="navLinkBtn" >

                        {location.pathname == "/" ? <img id="arrow" src={arrow} alt="" style={{ width: "150px", maxWidth: "600px" }} />
                            : <><p style={{ width: "150px" }}></p></>
                        }


                        {location.pathname == "/" ? <NavLink to="/sendMessage">
                            <div className="headerBtn">
                                <p id="sendFuck">send "Fuck"</p>
                            </div>
                        </NavLink> : <NavLink to="/">
                            <div className="headerBtn">
                                Main
                            </div>
                        </NavLink>}


                    </div>
                    <WalletMultiButton />
                </div>
            </header>

            <Outlet />
        </div>
    )
}


export default Layout;
