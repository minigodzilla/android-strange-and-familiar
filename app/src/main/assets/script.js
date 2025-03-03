document.addEventListener('DOMContentLoaded', () => {

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js')
            .then(() => console.log('Service Worker Registered'))
            .catch((err) => console.error('Service Worker Registration Failed', err));
    }

    function setBrightness(value) {
        if (window.Android) {
            window.Android.setBrightness(value);
        } else {
            console.log("Brightness control not supported");
        }
    }

});
