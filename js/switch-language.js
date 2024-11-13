document.addEventListener("click", function (event) {
    if (event.target.classList.contains("disabled")) {
        event.preventDefault();
    }
});

