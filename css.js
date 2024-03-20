// app.js

// Function to toggle mobile menu
function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Function to display modal
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
