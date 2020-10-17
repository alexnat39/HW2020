document.getElementById("Submit").addEventListener("click", function() {loadFile()})
function loadFile() {
console.log("to");
	var image = document.getElementById('output');
	var fileInput = document.getElementById("fileInput");
	if(fileInput.files[0]) {
		image.src = URL.createObjectURL(fileInput.files[0]);
		document.getElementById("Resize").style.display = "block";
		document.getElementById("Resize").addEventListener("click", function () {

		});
		document.getElementById("Translate").style.display = "block";
		document.getElementById("Translate").addEventListener("click", function () {

		});
	}
};
