import { Keypair, Transaction, SystemProgram, SYSVAR_RENT_PUBKEY, TransactionInstruction, LAMPORTS_PER_SOL, clusterApiUrl, Connection, PublicKey, Cluster, } from "@solana/web3.js";


const createConnection = (network: string) => {
    const connection = new Connection(clusterApiUrl(network as Cluster), 'confirmed');
    return connection
}

const getEpoch = async (network: string) => {
    const connection = createConnection(network)
    const epochobj = await connection.getEpochInfo();
    let epoch = epochobj.epoch;
    return epoch
}


export const getAccountBalance = async (account: any, network: string, conn?: any) => {
    const connection = conn || createConnection(network)
    const balance = await connection.getBalance(account)
    return balance
}