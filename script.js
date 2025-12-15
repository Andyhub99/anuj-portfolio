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

// TYPING ANIMATION FOR "AI & Django Developer"
const text = "AI & Django Developer";
const typingText = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);  // 🔥 Speed: 100ms per letter (adjust if too fast/slow)
    } else {
        // After typing, hide cursor after a delay
        setTimeout(() => {
            document.querySelector(".cursor").style.display = "none";
        }, 1000);
    }
}

// Start typing when page loads
window.addEventListener("load", typeWriter);
