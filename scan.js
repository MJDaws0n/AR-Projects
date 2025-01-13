document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('#start-button');

    // Function to handle marker found and lost
    function handleMarkerEvents(markerId, quizName) {
        document.querySelector(`#${markerId}`).addEventListener('markerFound', function () {
            startButton.style.display = 'block';
            startButton.textContent = `Start ${quizName} Quiz`;
            startButton.href = `/quiz.html?q=${quizName}`;
        });

        document.querySelector(`#${markerId}`).addEventListener('markerLost', function () {
            startButton.style.display = 'none';
        });
    }

    // Hide start button initially
    startButton.style.display = 'none';

    // Add event listeners for each marker
    handleMarkerEvents('animated-marker-biology', 'Biology');
    handleMarkerEvents('animated-marker-football', 'Football');
    handleMarkerEvents('animated-marker-maths', 'Maths');
    handleMarkerEvents('animated-marker-earth', 'Planets');
});
