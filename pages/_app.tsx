import '../styles/global.css';
import type { AppProps } from 'next/app';
import { Provider } from '../context';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider>
            <Component {...pageProps}/>
        </Provider>
    )
}

