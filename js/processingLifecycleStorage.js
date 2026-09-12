window.processingLifecycleStorage = {
    getItem(key) {
        return window.localStorage.getItem(key);
    },

    setItem(key, value) {
        window.localStorage.setItem(key, value);
    },

    removeItem(key) {
        window.localStorage.removeItem(key);
    },

    downloadFile(filename, content, contentType) {
        const blob = new Blob([content], { type: contentType || "application/json" });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = filename;
        anchor.style.display = "none";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
    }
};
