var miloBox = document.getElementById("miloBox");
var image = document.getElementById("milo");

miloBox.addEventListener("change", function() {
    if (miloBox.checked) {
        showImage();
        celebrate();
    } else {
        hideImage();
    }
});

function showImage() {
    image.src = "images/milo_on_carpet.jpeg";
    image.style.position = "fixed";
    image.style.top = "0";
    image.style.right = "0";
    image.style.bottom = "0";
    image.style.left = "0";
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.objectFit = "cover";
    image.style.cursor = "pointer"; // Add pointer cursor
    image.style.display = "block";
    
    // Add click event listener to hide image
    image.addEventListener("click", hideImage);
}

function hideImage() {
    image.style.display = "none";
    miloBox.checked = false; // Uncheck the toggle checkbox
}
