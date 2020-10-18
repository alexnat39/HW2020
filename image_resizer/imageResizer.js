var image;
var loadFile = function(event) {
    image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
}
function resizeDimensions(image, height, width) {
        var filesToUpload = document.getElementById('image').files;
        var file = filesToUpload[0];
        // Create an image
        var img = document.createElement("img");
        // Create a file reader
        var reader = new FileReader();
        // Set the image once loaded into file reader
        reader.onload = function(e) {
            img.src = e.target.result;

            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            var MAX_WIDTH = 400;
            var MAX_HEIGHT = 400;
            var width = img.width;
            var height = img.height;

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
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            var dataurl = canvas.toDataURL("image/png");
            document.getElementById('output').src = dataurl;
        }
        // Load files into file reader
        reader.readAsDataURL(file);
}
function getNewHeight() {
    var heightInput = document.getElementById("heightInput").value; //convert them as int
    alert(heightInput);
    return heightInput;
}
function getNewWidth() {
    var widthInput = document.getElementById("widthInput").value;
    alert(widthInput);
    return widthInput;

}
document.getElementById("ResizeFinal").addEventListener("click", function() {resizeDimensions(getNewHeight(), getNewWidth())})
// .open - opens a new tab
