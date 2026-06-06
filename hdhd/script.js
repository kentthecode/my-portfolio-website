document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const dropdown = document.getElementById('dropdown-menu');
    const homeButton = document.getElementById('home-button');

    // Toggle dropdown on avatar click
    avatar.addEventListener('click', function() {
        dropdown.classList.toggle('open');
    });

    // Handle home button click
    homeButton.addEventListener('click', function() {
        window.location.href = '/';  // Adjust to your home page URL
    });

    // Optional: Close dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!avatar.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});