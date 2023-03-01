import WalletContextProvider from '@/contexts/WalletProviderContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack';
require('@solana/wallet-adapter-react-ui/styles.css');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <WalletContextProvider>
        <Component {...pageProps} />
      </WalletContextProvider>
    </SnackbarProvider>
  )
}
