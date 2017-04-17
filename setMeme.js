/*
    Script name: setMeme.js
    Description: Used to alter the contents of the meme.html page to suit the meme selected
    Author: Ednest Petario
    Date Created: April 16, 2017
*/
function load() {
	document.getElementById("confessBear").addEventListener("click", function(){sessionStorage.setItem("meme", "confessBear");}, false);
	document.getElementById("blink").addEventListener("click", function(){sessionStorage.setItem("meme", "blink");}, false);
	document.getElementById("doge").addEventListener("click", function(){sessionStorage.setItem("meme", "doge");}, false);
	document.getElementById("exBrain").addEventListener("click", function(){sessionStorage.setItem("meme", "exBrain");}, false);
	document.getElementById("feelsBad").addEventListener("click", function(){sessionStorage.setItem("meme", "feelsBad");}, false);
	document.getElementById("goodGuy").addEventListener("click", function(){sessionStorage.setItem("meme", "goodGuy");}, false);
	document.getElementById("dump").addEventListener("click", function(){sessionStorage.setItem("meme", "dump");}, false);
	document.getElementById("think").addEventListener("click", function(){sessionStorage.setItem("meme", "think");}, false);
	document.getElementById("sponge").addEventListener("click", function(){sessionStorage.setItem("meme", "sponge");}, false);
	document.getElementById("troll").addEventListener("click", function(){sessionStorage.setItem("meme", "troll");}, false);
	document.getElementById("puffin").addEventListener("click", function(){sessionStorage.setItem("meme", "puffin");}, false);
	document.getElementById("zerg").addEventListener("click", function(){sessionStorage.setItem("meme", "zerg");}, false);
}


document.addEventListener("DOMContentLoaded", load, false);
