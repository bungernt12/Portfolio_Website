const projectURLs = ['https://bungernt12.github.io/Master-Roshi-Milk-Run/', 'https://bungernt12.github.io/FlexboxBusinessSiteStarting/', 'https://www.dictionary.com/browse/imagination']

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hoverable-image');

    //make iteration counter i to help with assigning 
    let i = 0;

    images.forEach(image => {
        image.addEventListener('mouseenter', function () {
            // Grow the hovered image
            this.style.transform = 'scale(1.2)';
            this.style.zIndex = '20'
            //z-index didn't work to make roshi above 
            
            // Shrink the other images
            images.forEach(otherImage => {
                if (otherImage !== this) {
                    otherImage.style.transform = 'scale(1)';
                    otherImage.style.zIndex = '10';
                }
            });
        });

        image.addEventListener('mouseleave', function () {
            // Shrink the image back to its original size on mouse leave
            this.style.transform = 'scale(1)';
        });
        // const imgElement = image;

        // // Create an anchor tag
        // const anchorTag = document.createElement("a");

        // // Set the href attribute of the anchor tag to your desired URL
        // anchorTag.href = projectURLs[i];

        // // Append the image element as a child of the anchor tag
        // anchorTag.appendChild(imgElement.cloneNode(true));

        // // Replace the original image element with the anchor tag
        // imgElement.parentNode.replaceChild(anchorTag, imgElement);

        // i++;
    });
});

let codingStartClock = () => {
    document.getElementById
}
