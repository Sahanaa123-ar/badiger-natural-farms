// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Simple welcome message in browser console

console.log(
    "Welcome to Badiger Natural Farms 🌿"
);
