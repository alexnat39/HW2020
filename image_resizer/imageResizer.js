var image;

//uploads the image to the preview container
document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataURL = localStorage.getItem("current-image");
    if (recentImageDataURL) {
        document.querySelector("#imagePreview").setAttribute("src", recentImageDataURL);
    }   else {
        console.log("no image stored")
    }
});
// var loadFile = function(event) {
//     image = document.getElementById('output');
//     image.src = URL.createObjectURL(event.target.files[0]);
// }

function resizeDimensions(height, width) {
    const recentImageDataURL = localStorage.getItem("current-image");
    image = document.getElementById("imagePreview");


    if (recentImageDataURL) {
        //creates an empty canvas
        var canvas = document.createElement("canvas");
        var MAX_WIDTH = 600;
        var MAX_HEIGHT = 600;

        //checks for image height and width not to mess the way they look
        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        } else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }
        //setting the new width and height of a canvas as the parameters we passed in
        canvas.width = width;
        canvas.height = height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);

        var resizedImage = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        window.location.href = resizedImage;

    }
}
function getNewHeight() {
    var heightInput = + document.getElementById("heightInput").value; //convert them as int
    console.log(heightInput);
    alert(heightInput);
    return heightInput;
}
function getNewWidth() {
    var widthInput = + document.getElementById("widthInput").value;
    alert(widthInput);
    return widthInput;

}

document.getElementById("ResizeFinal").addEventListener("click", function() {resizeDimensions(getNewHeight(), getNewWidth())})
// .open - opens a new tab
