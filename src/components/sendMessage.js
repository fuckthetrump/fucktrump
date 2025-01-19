import React, { useState } from "react";
import SendTransactionWithMessage from "./sendTransaction";

import "../App.css";
import fly from "../images/fly.png";
import royCoyen from "../images/royCoyen.jpg"; // Ensure correct path

const SendMessage = () => {
    const [transactionSuccess, setTransactionSuccess] = useState(false);
    const [transactionSignature, setTransactionSignature] = useState(null);

    const handleChildState = (success, signature) => {
        setTransactionSuccess(success);
        setTransactionSignature(signature);
    };

    return (
        <>
            <div className="App-main">
                {transactionSuccess ? (
                    <div>
                        <img id="royCoyen" src={royCoyen} alt="" style={{ width: "85%", maxWidth: "600px" }} />
                        <h4 style={{marginTop:"0"}}>Roy Cohn proud of you!</h4>
                        <p>
                            <a id="solscan"
                                href={`https://solscan.io/tx/${transactionSignature}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on Solscan
                            </a>
                        </p>
                    </div>
                ) : (
                    <div style={{ padding: "20px", textAlign: "center", marginTop: "-100px", maxWidth: "85vw" }}>
                        <img id="fly" src={fly} alt="" style={{ width: "50%", maxWidth: "600px" }} />
                        <h2 id="Fuck">Send "Fuck" to $TRUMP creator</h2>
                        <h4>Send this message to $TRUMP coin dev</h4>
                        <p>"Fuck you Donald with your $TRUMP. You dumping solana memecoin market"</p>
                        <SendTransactionWithMessage onSendData={handleChildState} />
                    </div>
                )}
            </div>


            <div className='App-main'>

            </div>
        </>
    );
};

export default SendMessage;
