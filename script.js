document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-image');
        let currentIndex = 0;
        let intervalId;

        // Function to update the image source
        function updateImage() {
            images.forEach((img, index) => {
                img.classList.toggle('active', index === currentIndex);
            });
        }

        // Function to show the next image
        function showNextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }

        // Function to show the previous image
        function showPrevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }

        // Function to start the automatic slide show
        function startAutoSlide() {
            intervalId = setInterval(showNextImage, 3000); // Change image every 3 seconds
        }

        // Event listeners for buttons
        const backButton = slider.querySelector('.control-button#back-button');
        const nextButton = slider.querySelector('.control-button#next-button');

        backButton.addEventListener('click', () => {
            clearInterval(intervalId); // Clear the interval when button is clicked
            showPrevImage();
            startAutoSlide(); // Restart the interval
        });

        nextButton.addEventListener('click', () => {
            clearInterval(intervalId); // Clear the interval when button is clicked
            showNextImage();
            startAutoSlide(); // Restart the interval
        });

        // Initialize the slider
        updateImage();
        startAutoSlide();
    });
});
