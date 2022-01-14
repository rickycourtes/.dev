// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .catch((registrationError) => {
                console.error('SW registration failed: ', registrationError)
            })
    })
}

// Disable PWA install prompt
// window.addEventListener('beforeinstallprompt', (e) => e.preventDefault());