// DARK / LIGHT MODE
const toggle = document.getElementById("theme-toggle");

if (toggle) {  // 🔥 Safety check to ensure button exists
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light");
        toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
        console.log("Theme toggled");  // 🔥 Debug: Check console if toggle isn't working
    });
} else {
    console.error("Theme toggle button not found!");  // 🔥 Debug: If button ID is wrong
}

// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();  // 🔥 Initial call to reveal visible sections
