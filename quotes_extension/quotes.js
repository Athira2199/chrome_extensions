var quotes=["There is a difference between giving up and knowing when you have had enough.",
"Success isn't about how much money you make, it's about the difference you make in people's lives.",
"Women are the world's most underused resource.",
"If you are always trying to be normal, you will never know how amazing you can be.",
"A girl should be two things: classy and fabulous.",
"Work hard dream big.",
"You only live once but if you do it right, once is enough.",
"In a gentle way, you can shake the world.",
"If your dreams don't scare you, they're not big enough.",
"It is never to late to be what you might have been.",
"We know what we are, but know not what we may be.",
"Your time is limited, so don't waste it living someone else's life.",
"Strive not to be a success, but rather to be of value.",
"Being happy never goes out of style.",
"Life begins at the end of your comfort zone."
]
var authors=["UNKNOWN",
"MICHELLE OBAMA",
"HILLARY CLINTON",
"MAYA ANGELOU",
"COCO CHANEL",
"SHERYL SWOOPES",
"MAE WEST",
"MAHATMA GANDHI",
"RICHARD BRABSON",
"GEORGE ELIOT",
"WILLIAM SHAKESPEARE",
"STEVE JOBS",
"ALBERT EINSTEIN",
"LILLY PULITZER",
"NEALE DONALD WALSCH"
]
window.onload=function(){
	var randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
	var randomDegree=Math.floor(Math.random()*360);
	var randompercent=Math.floor(Math.random()*100);
	document.body.style.background="linear-gradient("+randomDegree+"deg, "+randomColor1+" 0%, "+randomColor2+" "+randompercent+"%)";
	var rand=Math.floor(Math.random()*quotes.length);
	document.getElementById("quote").innerHTML+=quotes[rand];
	document.getElementById("author").innerHTML+=authors[rand];
	console.log(quotes[rand]);
	console.log(authors[rand]);
}