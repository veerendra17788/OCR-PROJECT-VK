document.addEventListener('DOMContentLoaded', function() {
    const flashMessages = document.getElementById('flash-messages');
    if (flashMessages) {
        setTimeout(() => {
            flashMessages.style.display = 'none';
        }, 5000); // Hide flash messages after 5 seconds
    }
});
