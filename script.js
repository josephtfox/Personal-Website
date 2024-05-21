document.addEventListener("DOMContentLoaded", function () {
    // Typing effect
    const typeWriter = (text, i, fnCallback) => {
        if (i < (text.length)) {
            document.querySelector("#typed-text").innerHTML = text.substring(0, i + 1) + "<span aria-hidden='true'></span>";

            setTimeout(() => {
                typeWriter(text, i + 1, fnCallback)
            }, 50);
        } else if (typeof fnCallback === "function") {
            setTimeout(fnCallback, 1000);
        }
    };

    // Execute typing effect on load
    window.onload = () => {
        const text = document.querySelector("#typed-text").getAttribute("data-text");
        if (text) {
            typeWriter(text, 0, () => {
                document.querySelector("#typed-text").innerHTML += "<span class='text-green-400'>|</span>";
            });
        }
    };

    // Section transition animation
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.classList.add("section-transition");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});
