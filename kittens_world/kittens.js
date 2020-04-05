var fileNames=[
	"images/kitten1.jpg",
    "images/kitten2.jpg",
    "images/kitten3.jpg",
    "images/kitten4.jpg"
]
var images=document.getElementsByTagName('img');
for (imgElmnts of images){
	var rand=Math.floor(Math.random()*fileNames.length);
	var file=fileNames[rand];
	var url=chrome.extension.getURL(file);
	imgElmnts.src=url;
}
alert("attacked by cats");