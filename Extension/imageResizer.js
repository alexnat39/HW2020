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
function resizeDimensions(height, width, type) {
    const recentImageDataURL = localStorage.getItem("current-image");
    image = document.getElementById("imagePreview");


    if (recentImageDataURL) {
        //creates an empty canvas
        var canvas = document.createElement("canvas");
        //setting the new width and height of a canvas as the parameters we passed in
        canvas.width = width;
        canvas.height = height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);

        var resizedImage = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        if(type == 1) {
            canvas.toBlob(function (blob) {
                saveAs(blob, "resize.png");
            }, "image/png");
        } else if(type == 2) {
            canvas.toBlob(function (blob) {
                saveAs(blob, "resize.jpeg");
            }, "image/jpeg");
        } else if(type == 3) {
            canvas.toBlob(function (blob) {
                saveAs(blob, "resize.jpg");
            }, "image/jpg");
        }
    }
}
function getNewHeight() {
    var heightInput = + document.getElementById("heightInput").value; //convert them as int
    console.log(heightInput);
    return heightInput;
}
function getNewWidth() {
    var widthInput = + document.getElementById("widthInput").value;
    return widthInput;

}

document.getElementById("back").addEventListener("click", function() {location.href = "popup.html";})
document.getElementById("png").addEventListener("click", function() {resizeDimensions(getNewHeight(), getNewWidth(), 1)})
document.getElementById("jpeg").addEventListener("click", function() {resizeDimensions(getNewHeight(), getNewWidth(), 2)})
document.getElementById("jpg").addEventListener("click", function() {resizeDimensions(getNewHeight(), getNewWidth(), 3)})
// .open - opens a new tab
