/*
    Script name: setMeme.js
    Description: Used to alter the contents of the meme.html page to suit the meme selected
    Author: Ednest Petario
    Date Created: April 16, 2017
*/

/*
	From an array of all the memes available on the site, using a random int, set the meme to that name
*/
function randomMeme(){
	var memes = ["confessBear", "blink", "doge", "exBrain", "feelsBad", "goodGuy","dump","think","sponge","troll","puffin","zerg"];

	var ranInt = Math.floor(Math.random() * 12);

	localStorage.setItem("meme", memes[ranInt]);

}

/*
	Adds all the event listeners for all the links in the html, plus additional listeners only available to links on the index.html page
*/
function load() {
	document.getElementById("confessBear").addEventListener("click", function(){localStorage.setItem("meme", "confessBear");}, false);
	document.getElementById("blink").addEventListener("click", function(){localStorage.setItem("meme", "blink");}, false);
	document.getElementById("doge").addEventListener("click", function(){localStorage.setItem("meme", "doge");}, false);
	document.getElementById("exBrain").addEventListener("click", function(){localStorage.setItem("meme", "exBrain");}, false);
	document.getElementById("feelsBad").addEventListener("click", function(){localStorage.setItem("meme", "feelsBad");}, false);
	document.getElementById("goodGuy").addEventListener("click", function(){localStorage.setItem("meme", "goodGuy");}, false);
	document.getElementById("dump").addEventListener("click", function(){localStorage.setItem("meme", "dump");}, false);
	document.getElementById("think").addEventListener("click", function(){localStorage.setItem("meme", "think");}, false);
	document.getElementById("sponge").addEventListener("click", function(){localStorage.setItem("meme", "sponge");}, false);
	document.getElementById("troll").addEventListener("click", function(){localStorage.setItem("meme", "troll");}, false);
	document.getElementById("puffin").addEventListener("click", function(){localStorage.setItem("meme", "puffin");}, false);
	document.getElementById("zerg").addEventListener("click", function(){localStorage.setItem("meme", "zerg");}, false);
	document.getElementById("random").addEventListener("click", randomMeme, false);
	document.getElementById("footerRand").addEventListener("click", randomMeme, false);

	var path = window.location.pathname;
	var page = path.split("/").pop();

	if(page == "index.html")
	{
		document.getElementById("relFeels").addEventListener("click", function(){localStorage.setItem("meme", "feelsBad");}, false);
		document.getElementById("relPuffin").addEventListener("click", function(){localStorage.setItem("meme", "puffin");}, false);
		document.getElementById("relBrain").addEventListener("click", function(){localStorage.setItem("meme", "exBrain");}, false);
		document.getElementById("relDump").addEventListener("click", function(){localStorage.setItem("meme", "dump");}, false);
		document.getElementById("relDoge").addEventListener("click", function(){localStorage.setItem("meme", "doge");}, false);
		document.getElementById("relDoge2").addEventListener("click", function(){localStorage.setItem("meme", "doge");}, false);
		document.getElementById("relSponge").addEventListener("click", function(){localStorage.setItem("meme", "sponge");}, false);
		document.getElementById("relTroll").addEventListener("click", function(){localStorage.setItem("meme", "troll");}, false);
	}

}

//Checks if the html has loaded
document.addEventListener("DOMContentLoaded", load, false);
