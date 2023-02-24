import { Keypair, Transaction, SystemProgram, SYSVAR_RENT_PUBKEY, TransactionInstruction, LAMPORTS_PER_SOL, clusterApiUrl, Connection, PublicKey, } from "@solana/web3.js";


const createConnection = (testnet: boolean) => {
    const connection = new Connection(clusterApiUrl(testnet ? 'devnet' : 'mainnet-beta'), 'confirmed');
    return connection
}

const getEpoch = async (testnet: boolean) => {
    const connection = createConnection(testnet)
    const epochobj = await connection.getEpochInfo();
    let epoch = epochobj.epoch;
    return epoch
}