document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container');
    const nextButton = document.getElementById('nextButton');
    const returnButton = document.getElementById('returnButton');
    let currentContainerIndex = 0;

    function updateVisibility() {
        containers.forEach((container, index) => {
            container.style.display = index === currentContainerIndex ? 'block' : 'none';
        });
        returnButton.style.display = currentContainerIndex > 0 ? 'inline' : 'none';
        nextButton.textContent = currentContainerIndex === containers.length - 1 ? 'Submit' : 'Next';
    }

    nextButton.addEventListener('click', () => {
        if (currentContainerIndex < containers.length - 1) {
            currentContainerIndex++;
        } else {
            document.getElementById('enrollmentForm').submit();
        }
        updateVisibility();
    });

    returnButton.addEventListener('click', () => {
        if (currentContainerIndex > 0) {
            currentContainerIndex--;
        }
        updateVisibility();
    });

    // Initial visibility setup
    updateVisibility();
});

