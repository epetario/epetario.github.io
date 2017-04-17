/*
    Script name: meme.js
    Description: Used to alter the contents of the meme.html page to suit the meme selected
    Author: Ednest Petario
    Date Created: April 16, 2017
*/


function confessBear(){
	sessionStorage.removeItem("meme");

	document.getElementById("name").innerHTML = "Confession Bear";
}

function blink(){
	sessionStorage.removeItem("meme");

	document.getElementById("name").innerHTML = "Drew Scanlon";
}

function doge(){
	sessionStorage.removeItem("meme");

	document.getElementById("name").innerHTML = "Doge";
}

function exBrain(){
	sessionStorage.removeItem("meme");

	document.getElementById("name").innerHTML = "Expanding Brain";
}

function feelsBad(){
	sessionStorage.removeItem("meme");

	document.getElementById("name").innerHTML = "FeelsBadMan";
}

function goodGuy(){
	sessionStorage.removeItem("meme");

	document.getElementById("name").innerHTML = "Good Guy Greg";
}

function dump(){
	sessionStorage.removeItem("meme");
	
	document.getElementById("name").innerHTML = "Meme Dumps";
}

function think(){
	sessionStorage.removeItem("meme");
	document.getElementById("name").innerHTML = "Roll Safe";
}

function sponge(){
	sessionStorage.removeItem("meme");
	document.getElementById("name").innerHTML = "SpongeBob Memes";
}

function troll(){
	sessionStorage.removeItem("meme");
	document.getElementById("name").innerHTML = "TrollFace";
}

function puffin(){
	sessionStorage.removeItem("meme");
	document.getElementById("name").innerHTML = "UnPopular Opinion Puffin";
}

function zerg(){
	sessionStorage.removeItem("meme");
	document.getElementById("name").innerHTML = "Zerg Rush";
}

function load() {
	var x = sessionStorage.getItem("meme");
	window[x]();

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
