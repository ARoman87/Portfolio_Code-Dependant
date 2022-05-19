const toggleButton = document.getElementsByClassName("checkButton")[0]
const burgerLinks = document.getElementsByClassName("burgerLinks")[0]
const linkButton = document.getElementsByClassName("a")[0]

toggleButton.addEventListener("click", () => {
    burgerLinks.classList.toggle("active")
})

linkButton.addEventListener("click", () => {
    burgerLinks.classList.remove("active")
})



