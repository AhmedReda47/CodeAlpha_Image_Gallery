const filterButtons = document.querySelectorAll("button");
const filterable = document.querySelectorAll(".box");

const filterBox = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterable.forEach(box => {
        box.classList.add("hide");

        if (box.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            box.classList.remove("hide");
        }
    })
};

filterButtons.forEach(button => button.addEventListener("click", filterBox))