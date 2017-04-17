/*
    Script name: meme.js
    Description: Used to alter the contents of the meme.html page to suit the meme selected
    Author: Ednest Petario
    Date Created: April 16, 2017
*/


function confessBear(){
	var image = document.getElementById("memeImage");
	image.setAttribute("src", "images/confessBear.jpg");
	document.getElementById("name").innerHTML = "Confession Bear";
	document.getElementById("summary").innerHTML =  "Confession Bear is an advice animal image macro series featuring a photo of a Malayan sun bear leaning against a log." +
	" The pictures are inscribed with admissions about unthinkable practices and questionable assessments that are frequently kept mystery because of a paranoid fear of being segregated.";
	document.getElementById("creation").innerHTML = "The original bear photo (shown below, left) was taken by photojournalist Clemens Bilan and was submitted to the stock photo website Getty Images on April 12th, 2007. Several years later on June 21st, 2012, Redditor F-18Bro submitted a post titled \“I have a lot of weird stuff that I’d like to b able to confess to reddit so i can get it off my chest, so I made Confession Bear\”. The post was well received and garnered thousands of upvotes, birthing the meme as we know it today.";

	var div = document.getElementById("content");

	for(var i = 0; i < 3; i++)
	{
		var img = document.createElement("img");
		img.setAttribute("src","images/confessBear" + i + ".jpg");
		img.setAttribute("alt", "Confession Bear" + i);
		div.appendChild(img);
	}
}

function blink(){
	

	document.getElementById("name").innerHTML = "Drew Scanlon";
	document.getElementById("summary").innerHTML = "";
}

function doge(){
	

	document.getElementById("name").innerHTML = "Doge";
	document.getElementById("summary").innerHTML = "";
}

function exBrain(){
	

	document.getElementById("name").innerHTML = "Expanding Brain";
	document.getElementById("summary").innerHTML = "";
}

function feelsBad(){
	

	document.getElementById("name").innerHTML = "FeelsBadMan";
	document.getElementById("summary").innerHTML = "";
}

function goodGuy(){
	
	document.getElementById("summary").innerHTML = "";

	document.getElementById("name").innerHTML = "Good Guy Greg";
	document.getElementById("summary").innerHTML = "";
}

function dump(){
	

	document.getElementById("name").innerHTML = "Meme Dumps";
	document.getElementById("summary").innerHTML = "";
}

function think(){
	
	document.getElementById("name").innerHTML = "Roll Safe";
	document.getElementById("summary").innerHTML = "";
}

function sponge(){
	
	document.getElementById("name").innerHTML = "SpongeBob Memes";
	document.getElementById("summary").innerHTML = "";
}

function troll(){
	
	document.getElementById("name").innerHTML = "TrollFace";
	document.getElementById("summary").innerHTML = "";
}

function puffin(){
	document.getElementById("name").innerHTML = "UnPopular Opinion Puffin";
	document.getElementById("summary").innerHTML = "";
}

function zerg(){
	document.getElementById("name").innerHTML = "Zerg Rush";
	document.getElementById("summary").innerHTML = "";
}

function load() {
	var x = localStorage.getItem("meme");
	window[x]();

	// document.getElementById("confessBear").addEventListener("click", confessBear, false);
	// document.getElementById("blink").addEventListener("click", blink, false);
	// document.getElementById("doge").addEventListener("click", doge, false);
	// document.getElementById("exBrain").addEventListener("click", exBrain, false);
	// document.getElementById("feelsBad").addEventListener("click", feelsBad, false);
	// document.getElementById("goodGuy").addEventListener("click", goodGuy, false);
	// document.getElementById("dump").addEventListener("click", dump, false);
	// document.getElementById("think").addEventListener("click", think, false);
	// document.getElementById("sponge").addEventListener("click", sponge, false);
	// document.getElementById("troll").addEventListener("click", troll, false);
	// document.getElementById("puffin").addEventListener("click", puffin, false);
	// document.getElementById("zerg").addEventListener("click", zerg, false);

	document.getElementById("confessBear").addEventListener("click", function(){localStorage.setItem("meme", "confessBear");var x = localStorage.getItem("meme");window[x]();}, false);
	document.getElementById("blink").addEventListener("click", function(){localStorage.setItem("meme", "blink");var x = localStorage.getItem("meme");window[x]();}, false);
	document.getElementById("doge").addEventListener("click", function(){localStorage.setItem("meme", "doge");var x = localStorage.getItem("meme");window[x]();}, false);
	document.getElementById("exBrain").addEventListener("click", function(){localStorage.setItem("meme", "exBrain");var x = localStorage.getItem("meme");window[x]();}, false);
	document.getElementById("feelsBad").addEventListener("click", function(){localStorage.setItem("meme", "feelsBad");var x = localStorage.getItem("meme");window[x]();}, false);
	document.getElementById("goodGuy").addEventListener("click", function(){localStorage.setItem("meme", "goodGuy");var x = localStorage.getItem("meme");window[x]();}, false);
	document.getElementById("dump").addEventListener("click", function(){localStorage.setItem("meme", "dump");var x = localStorage.getItem("meme");window[x]();}, false);
	document.getElementById("think").addEventListener("click", function(){localStorage.setItem("meme", "think");var x = localStorage.getItem("meme");window[x]();}, false);
	document.getElementById("sponge").addEventListener("click", function(){localStorage.setItem("meme", "sponge");var x = localStorage.getItem("meme");window[x]();}, false);
	document.getElementById("troll").addEventListener("click", function(){localStorage.setItem("meme", "troll");var x = localStorage.getItem("meme");window[x]();}, false);
	document.getElementById("puffin").addEventListener("click", function(){localStorage.setItem("meme", "puffin");var x = localStorage.getItem("meme");window[x]();}, false);
	document.getElementById("zerg").addEventListener("click", function(){localStorage.setItem("meme", "zerg");var x = localStorage.getItem("meme");window[x]();}, false);
}


document.addEventListener("DOMContentLoaded", load, false);
