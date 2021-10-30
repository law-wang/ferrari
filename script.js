let mouseCursor = document.querySelector(".cursor")

window.addEventListener("mousemove", cursor)
window.addEventListener("mouseover", enter)
window.addEventListener("mouseout", leave)

const cursor = (e) => {
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
}

const enter = (e) => {
    mouseCursor.classList.remove("hidden")
}

const leave = (e) => {
    mouseCursor.classList.add("hidden")
}