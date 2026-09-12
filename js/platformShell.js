window.platformShell = {
    getTheme: function () {
        return window.localStorage.getItem("mw.theme") || "light";
    },
    setTheme: function (theme) {
        window.localStorage.setItem("mw.theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    },
    getCulture: function () {
        return window.localStorage.getItem("mw.culture") || "en-US";
    },
    setCulture: function (culture) {
        window.localStorage.setItem("mw.culture", culture);
    },
    registerServiceWorker: async function () {
        if ("serviceWorker" in navigator) {
            try {
                await navigator.serviceWorker.register("/service-worker.js");
            } catch (e) {
                console.warn("Service worker registration failed", e);
            }
        }
    }
};
