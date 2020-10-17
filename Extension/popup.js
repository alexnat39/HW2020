var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById("Resize").style.display="block";
	document.getElementById("Resize").addEventListener ("click", function() {
    
});
	document.getElementById("Translate").style.display="block";
	document.getElementById("Translate").addEventListener ("click", function() {
    
});
};
