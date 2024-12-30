function navigateTo(page) {
    window.location.href = page;
}
window.addEventListener("load", function () {
    setTimeout(function () {
        const loader = document.getElementById("pre-loader");
        loader.style.display = "none";
    }, 1500); // Adjust to match the loader display duration
});
