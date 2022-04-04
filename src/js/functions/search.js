(function () {
    const searchBtn = document.querySelector(".search-btn");
    const seacrhInput = document.getElementById("search");

    searchBtn.addEventListener("click", (e) => {
        if (window.innerWidth < 650) {
            seacrhInput.classList.toggle("search--open");
        }
    });
})();
