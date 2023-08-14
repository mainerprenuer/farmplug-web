import '../styles/global.css';
import type { AppProps } from 'next/app';
import { Provider } from '../context';
import Heading from '../context/components/shared/Heading';
import { Container } from 'react-bootstrap';
import { ToastProvider } from 'react-toast-notifications';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider>
            <Heading/>
            <Container>
              <ToastProvider>
                <Component {...pageProps} />
              </ToastProvider>
            </Container>
        </Provider>
    )
}

