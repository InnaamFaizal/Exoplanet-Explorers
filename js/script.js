function toggleLessonDetails(lessonNumber) {
    const button = document.querySelector(`.lesson-container:nth-child(${lessonNumber}) .star-button`);
    const details = document.getElementById(`lesson${lessonNumber}-details`);
    const lessonContainer = document.querySelector(`.lesson-container:nth-child(${lessonNumber})`);

    // Toggle the button's clicked state
    button.classList.toggle('clicked');

    // Toggle active class to trigger animation
    lessonContainer.classList.toggle('active');

    // Show or hide the popup smoothly
    const isVisible = details.classList.contains('show');

    // Hide all other popups
    document.querySelectorAll('.lesson-details').forEach((popup, index) => {
        if (index !== lessonNumber - 1) {
            popup.classList.remove('show');
        }
    });

    if (!isVisible) {
        details.classList.add('show'); // Show the clicked popup
    } else {
        details.classList.remove('show'); // Hide the clicked popup
    }
}