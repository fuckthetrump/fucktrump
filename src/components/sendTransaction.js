import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, Transaction, SystemProgram, TransactionInstruction } from "@solana/web3.js";
import { toast } from "react-toastify";

const RPC_ENDPOINT = "https://mainnet.helius-rpc.com/?api-key=e8bd3d5b-5c52-4a3c-8a96-53374bc67af4";

const SendTransactionWithMessage = ({ onSendData }) => {
    const { publicKey, sendTransaction } = useWallet();
    const connection = new Connection(RPC_ENDPOINT, "confirmed");

    const handleSendTransaction = async () => {
        if (!publicKey) {
            toast.error("Please connect your wallet first!");
            return;
        }

        try {
            const recipientAddress = new PublicKey("9k8jWWqfmTTXrc8gmZqYVxSFJhygURvyVRztivJXFTYP"); // $TRUMP Dev
            const lamportsToSend = 0.0001 * (10 ** 9);

            const transferInstruction = SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: recipientAddress,
                lamports: lamportsToSend,
            });

            const message = "Fuck you Donald with your $TRUMP. You dumping solana memecoin market";
            const memoInstruction = new TransactionInstruction({
                keys: [],
                programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
                data: Buffer.from(message, "utf-8"),
            });

            const transaction = new Transaction().add(transferInstruction, memoInstruction);
            const signature = await sendTransaction(transaction, connection);

            const latestBlockhash = await connection.getLatestBlockhash();
            await connection.confirmTransaction(
                {
                    signature,
                    blockhash: latestBlockhash.blockhash,
                    lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
                },
                "confirmed"
            );

            toast.success("Transaction successful!");
            onSendData(true, signature); // Pass success and signature to parent
        } catch (error) {
            console.error("Error sending transaction:", error);
            toast.error("Transaction failed. Check console for details.");
            onSendData(false, null); // Inform parent about the failure
        }
    };

    return <button id="fuckBtnSend" onClick={handleSendTransaction}>Send Fuck</button>;
};

export default SendTransactionWithMessage;
