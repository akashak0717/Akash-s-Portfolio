document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Add active class to clicked link
            this.classList.add("active");
        });
    });
});


var typed = new Typed(".typing", {
    strings:["Full Stack Developer", "Frontend Developer"],
    typeSpeed:100,
    backSpeed:50,
    loop:true
}) 


document.getElementById("downloadCV").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "cv.pdf"; // Path to the CV file
    link.download = "Your_CV.pdf"; // Download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
