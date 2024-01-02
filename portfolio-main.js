document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hoverable-image');

    images.forEach(image => {
        image.addEventListener('mouseenter', function () {
            // Grow the hovered image
            this.style.transform = 'scale(1.2)';
            this.style.zIndex = '2'
            //z-index didn't work to make roshi above 
            
            // Shrink the other images
            images.forEach(otherImage => {
                if (otherImage !== this) {
                    otherImage.style.transform = 'scale(1)';
                    otherImage.style.zIndex = '1';
                }
            });
        });

        image.addEventListener('mouseleave', function () {
            // Shrink the image back to its original size on mouse leave
            this.style.transform = 'scale(1)';
        });
    });
});
