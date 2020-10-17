var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    var resizeButton = document.createElement("button");
    resizeButton.innerHTML = "Resize";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(resizeButton);
    resizeButton.addEventListener ("click", function() {

    });
    var translateButton = document.createElement("button");
    translateButton.innerHTML = "Translate";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(translateButton);
    translateButton.addEventListener ("click", function() {

    });
};
