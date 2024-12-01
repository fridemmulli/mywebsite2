// Function to display a greeting based on the time of day
window.onload = function() {
    const currentTime = new Date().getHours();
    const greetingMessage = document.createElement('p');
    const header = document.querySelector('header');
    
    if (currentTime < 12) {
        greetingMessage.textContent = 'Good Morning! Have a great day!';
    } else if (currentTime < 18) { 
        greetingMessage.textContent = 'Good Afternoon! Keep going!';
    } else {
        greetingMessage.textContent = 'Good Evening! Hope you had a productive day!';
    }
    
    greetingMessage.classList.add('text-xl', 'text-center', 'text-white', 'mt-4');
    header.appendChild(greetingMessage);
};

// Function to toggle the visibility of the motivation section
function toggleMotivation() {
    const motivationSection = document.getElementById('motivationSection');
    if (motivationSection.style.display === 'none') {
        motivationSection.style.display = 'block';
    } else {
        motivationSection.style.display = 'none';
    }
}
