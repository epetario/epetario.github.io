/*
    Script name: setMeme.js
    Description: Used to alter the contents of the meme.html page to suit the meme selected
    Author: Ednest Petario
    Date Created: April 16, 2017
*/

function randomMeme(){
	var memes = ["confessBear", "blink", "doge", "exBrain", "feelsBad", "goodGuy","dump","think","sponge","troll","puffin","zerg"];

	var ranInt = Math.floor(Math.random() * 12);

	localStorage.setItem("meme", memes[ranInt]);

}

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
}


document.addEventListener("DOMContentLoaded", load, false);
