import logo from './logo.svg';
import './App.css';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import fuckImg from "./images/fuck.png"
function App() {
  const { publicKey } = useWallet();

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ padding: "20px", textAlign: "center" }}>
          <img src={fuckImg} alt="" style={{ width: "50%", maxWidth: "600px"}}/>
          <h1 style={{ marginTop: -50}} >Fuck the Trump</h1>
          <WalletMultiButton />

        </div>

      </header>
    </div>
  );
}

export default App;
