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

console.log("Script loaded");  // 🔥 Debug: Should appear in console

function typeWriter() {
    console.log("Typing function called, index:", index);  // 🔥 Debug: Check if function runs
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    } else {
        setTimeout(() => {
            cursor.style.display = "none";
            console.log("Typing complete");  // 🔥 Debug: When typing finishes
        }, 500);
    }
}

// Start typing after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");  // 🔥 Debug: Should appear
    if (typingText) {
        console.log("Typing text element found");  // 🔥 Debug: Element exists
        typeWriter();
    } else {
        console.error("Typing text element not found! Check HTML ID.");  // 🔥 Debug: If element missing
    }
});
