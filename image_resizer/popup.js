document.getElementById("Submit").addEventListener("click", function() {loadFile()})
function loadFile() {
    console.log("to");
    var image = document.getElementById('output');
    var fileInput = document.getElementById("fileInput");
    if(fileInput.files[0]) {
        //calls either scan&translate function or the resize dimension function
        image.src = URL.createObjectURL(fileInput.files[0]);
        document.getElementById("Resize").style.display = "block";
        document.getElementById("Resize").addEventListener("click", function () {
            location.href = "imageResizer.html";
        });
        document.getElementById("Translate").style.display = "block";
        document.getElementById("Translate").addEventListener("click", function () {
            Tesseract.recognize(image).then(function(result){
                console.log(result.text);
                window.alert(result.text);
            });

        });
    }
};
document.querySelector("#fileInput").addEventListener("change", function () {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("current-image", reader.result);
    });
    //reads the image URL
    reader.readAsDataURL(this.files[0]);
});
