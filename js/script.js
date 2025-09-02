document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.querySelector(".navbar");
  const navbarCollapse = document.getElementById("navbarSupportedContent");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const filterButton = document.getElementById("filterButton");
  const personalProjects = document.getElementById("personalProjects");
  const collaborativeProjects = document.getElementById("collaborativeProjects");

  // Function to handle outside clicks and link clicks
  const handleClick = (event) => {
      const isClickOutside = !navBar.contains(event.target);
      const isNavbarVisible = navbarCollapse.classList.contains("show");
      const clickedLink = event.target.closest("a");
      // Close the navbar if it's visible and clicked outside the collapsible area or on a link inside it
      if (isNavbarVisible && (isClickOutside || clickedLink)) {
          navbarToggler.click(); // Click the toggler to close the navbar
      }
  };
  // Attaches the click event listener to the document
  document.addEventListener("click", handleClick);

  // Function to toggle visibility between personal and collaborative projects and update the button text
  const toggleProjectsVisibility = () => {
      // Toggle visibility between the two project sections
      personalProjects.classList.toggle("d-none");
      collaborativeProjects.classList.toggle("d-none");
      // Update the button text based on visibility
      filterButton.textContent = collaborativeProjects.classList.contains("d-none")
          ? "Show Collaborative Projects"
          : "Show Personal Projects";
  };
  // Attach the click event listener to the filter button
  filterButton.addEventListener("click", toggleProjectsVisibility);

  // Move clipped corner when mobile menu opens/closes
  navbarCollapse.addEventListener('show.bs.collapse', () => {
    navBar.classList.remove('clipped-path');
    navbarCollapse.classList.add('clipped-path');
  });

  navbarCollapse.addEventListener('hidden.bs.collapse', () => {
    navBar.classList.add('clipped-path');
    navbarCollapse.classList.remove('clipped-path');
  });
});
