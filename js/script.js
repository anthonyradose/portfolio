document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector(".navbar");
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    const navbarToggler = document.querySelector(".navbar-toggler");
    
    // Function to handle outside clicks and link clicks
    const handleClick = (event) => {
        const isClickOutside = !navBar.contains(event.target);
        const isNavbarVisible = navbarCollapse.classList.contains("show");
        const clickedLink = event.target.closest("a");
        // Close the navbar if it's visible and clicked outside the collapsible area or on a link inside it
        if (isNavbarVisible && ( isClickOutside || clickedLink)) {
            navbarToggler.click(); // Click the toggler to close the navbar
        }
    };
    // Attach the click event listener to the document
    document.addEventListener("click", handleClick);
});
