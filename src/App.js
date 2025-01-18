import logo from './logo.svg';
import './App.css';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

function App() {
  const { publicKey } = useWallet();

  return (
    <div className="App">
      <header className="App-header">
      <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Fuck the Trump</h1>
            <WalletMultiButton />
        </div>

      </header>
    </div>
  );
}

export default App;
