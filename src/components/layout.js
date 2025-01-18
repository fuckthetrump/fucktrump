import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import "../App.css";



const Layout = () => {
    const location = useLocation();

    return (
        <div className="App">
            <header className="App-header">
                <div className='App-header-content'>
                    <div>
                        {location.pathname == "/" ? <NavLink to="/sendMessage">
                            <div className="headerBtn">
                                send "Fuck"
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
