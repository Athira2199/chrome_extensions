var p=document.getElementsByTagName('p');
var h=document.querySelectorAll("h1,h2,h3,h4,h5,h6");
var div=document.getElementsByTagName('div');
var a=document.getElementsByTagName('a');
for(var j=0;j<p.length;j++){
	p[j].style['background-color']='green';
}
for(var j=0;j<h.length;j++){
	h[j].style['background-color']='red';
}
for(var j=0;j<div.length;j++){
	div[j].style['background-color']='yellow';
}
for(var j=0;a.length;j++)
{
	a[j].style['background-color']='blue';
}