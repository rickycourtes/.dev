import '@styles/globals.scss'
import { useEffect } from 'react';

function Application({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/sw.js')
                .catch((registrationError) => {
                    console.error('SW registration failed: ', registrationError)
                })
        })
    }
  }, [])
  return (
    <Component {...pageProps} />
  )
}

export default Application
