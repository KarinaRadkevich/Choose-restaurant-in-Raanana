const search = document.querySelector(".search");
const rests = document.querySelectorAll(".restaurant");

search.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();
    rests.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})