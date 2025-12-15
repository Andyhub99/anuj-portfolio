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
revealOnScroll();

// TYPING ANIMATION FOR "AI & Django Developer"
const text = "AI & Django Developer";
const typingText = document.getElementById("typing-text");
const cursor = document.querySelector(".cursor");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150);  // 🔥 Slower speed (150ms) for better visibility
    } else {
        // Hide cursor after typing completes
        setTimeout(() => {
            cursor.style.display = "none";
        }, 500);
    }
}

// Start typing after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    if (typingText) {
        typeWriter();
    } else {
        console.error("Typing text element not found!");
    }
});
