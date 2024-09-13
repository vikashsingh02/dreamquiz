// script.js
gsap.registerPlugin(ScrollTrigger);

// Define the vertical animation for the phone element
gsap.to("#phone", {
    y: () => window.innerHeight * 3, // Move vertically across sections (3 sections)
    scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",  // Start the animation when the top of the wrapper hits the top of the viewport
        end: () => "+=" + (document.querySelector(".wrapper").offsetHeight - window.innerHeight), // End when the wrapper height minus the viewport height
        scrub: true,
        pin: true,
        anticipatePin: 1
    },
    ease: "none"
});
