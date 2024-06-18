const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;
const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');
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

// Event listeners for buttons
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

// Function to start the automatic slide show
function startAutoSlide() {
    intervalId = setInterval(showNextImage, 3000); // Change image every 3 seconds
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = [
        { bar: document.getElementById('progress-bar-1'), text: document.getElementById('progress-text-1'), soldPercent: 0 },
        { bar: document.getElementById('progress-bar-2'), text: document.getElementById('progress-text-2'), soldPercent: 0 },
        { bar: document.getElementById('progress-bar-3'), text: document.getElementById('progress-text-3'), soldPercent: 0 },
        { bar: document.getElementById('progress-bar-4'), text: document.getElementById('progress-text-4'), soldPercent: 0 },
        { bar: document.getElementById('progress-bar-5'), text: document.getElementById('progress-text-5'), soldPercent: 0 },
        { bar: document.getElementById('progress-bar-6'), text: document.getElementById('progress-text-6'), soldPercent: 0 },
    ];

    const updateProgress = (progressBar) => {
        progressBar.soldPercent += 10; // Thêm 10% mỗi lần gọi
        if (progressBar.soldPercent > 100) progressBar.soldPercent = 100;

        progressBar.bar.style.width = progressBar.soldPercent + '%';
       

        // Dừng lại khi đạt 100%
        if (progressBar.soldPercent < 100) {
            setTimeout(() => updateProgress(progressBar), 100000); // Cập nhật mỗi giây
        }
    };

    progressBars.forEach((progressBar) => {
        updateProgress(progressBar); // Bắt đầu cập nhật tất cả các thanh
    });
});





