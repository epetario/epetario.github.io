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
	document.getElementById("eco").innerHTML = "The trend of the Confession Bear meme is going down, as confessions now a days can easily be traced to the person who made the confession. Some confessions can also be illegal or crime related, only leading to the arrest of the confessor. Most confessions though are usually down voted for they are more like whining and complaining, than an actual confession truly worthy of Confession Bear."

	document.getElementById("memeTitle").innerHTML = "Confession Bear";
	document.getElementById("memeBorn").innerHTML = "Born: June 21, 2012";
	document.getElementById("memeUsed").innerHTML = "Usability: Declining";
	document.getElementById("memeFreq").innerHTML = "Frequently used during: April 2013";
	document.getElementById("memeOrigin").innerHTML = "Origin: Clemens Bilan April 12, 2007";

	var img = document.getElementById("img0");
	img.setAttribute("src","images/confessBear0.jpg");
	img.setAttribute("alt", "Confession Bear 0");
	var img1 = document.getElementById("img1");
	img1.setAttribute("src","images/confessBear1.jpg");
	img1.setAttribute("alt", "Confession Bear 1");
	var img2 = document.getElementById("img2");
	img2.setAttribute("src","images/confessBear2.jpg");
	img2.setAttribute("alt", "Confession Bear 2");
}

function blink(){

	var image = document.getElementById("memeImage");
	image.setAttribute("src", "images/blinking.gif");

	document.getElementById("name").innerHTML = "Drew Scanlon";
	document.getElementById("summary").innerHTML = "Drew Scanlon is a GIF of Drew Scanlon, video editor and podcaster at video game website Giant Bomb. The GIF of Scanlon is used as a reaction image capturing feeling slightly insulted or confused.";
	document.getElementById("creation").innerHTML = "The GIF comes from the GiantBomb video \“Unprofessional Fridays.\” Drew’s reaction comes when Jeff Gershman says \“Farming with my hoe” while playing a game. The GIF had been around for nearly two years, it was not until February 2017 that it spiked in popularity on Twitter. On February 5th, user @eksbl used it in a tweet describing his reaction in biology class, gaining nearly 50,000 retweets.";
	document.getElementById("eco").innerHTML = "The meme is still common, but it is slowly phasing out, sell sell sell! The days of Drew Scanlon memes are over and will soon be declining.";

	document.getElementById("memeTitle").innerHTML = "Drew Scanlon";
	document.getElementById("memeBorn").innerHTML = "Born: February 5, 2017";
	document.getElementById("memeUsed").innerHTML = "Usability: Stable";
	document.getElementById("memeFreq").innerHTML = "Frequently used during: February 2017";
	document.getElementById("memeOrigin").innerHTML = "Origin: Drew Scanlon July 27, 2015";

	var img = document.getElementById("img0");
	img.setAttribute("src","images/blink0.png");
	img.setAttribute("alt", "Blinking Meme 0");
	var img1 = document.getElementById("img1");	
	img1.setAttribute("src","images/blinking1.png");
	img1.setAttribute("alt", "Blinking Meme 1");
	var img2 = document.getElementById("img2");
	img2.setAttribute("src","images/blink2.png");
	img2.setAttribute("alt", "Blinking Meme 2");
}

function doge(){
	
	var image = document.getElementById("memeImage");
	image.setAttribute("src", "images/doge0.jpg");

	document.getElementById("name").innerHTML = "Doge";
	document.getElementById("summary").innerHTML = "Doge is a slang term for \“dog\” that is primarily associated with pictures of Shiba Inus (nicknamed \“Shibe\”) and internal monologue captions on Tumblr. These photos may be photoshopped to change the dog’s face or captioned with interior monologues in Comic Sans font. Most memes with Doge uses short phrases that are purposefully incorrect. Such phrases start with words like, Wow!, Such, Much, and So.";
	document.getElementById("creation").innerHTML = "On February 23rd, 2010, Japanese kindergarten teacher Atsuko Sato posted several photos of her rescue-adopted Shiba Inu dog Kabosu to her personal blog. Among the photos included a peculiar shot of Kabosu sitting on a couch while glaring sideways at the camera with raised eyebrows (shown on the image on the right).";
	document.getElementById("eco").innerHTML = "Although always easily recognized, the Doge meme is a dead meme. It can be posted once in a while and will garner some upvotes, but will never return to its past upvote gains.";

	document.getElementById("memeTitle").innerHTML = "Doge";
	document.getElementById("memeBorn").innerHTML = "Born: June 2017";
	document.getElementById("memeUsed").innerHTML = "Usability: Dead";
	document.getElementById("memeFreq").innerHTML = "Frequently used during: December 2013";
	document.getElementById("memeOrigin").innerHTML = "Origin: Atsuko Sato February 23, 2010";

	var img = document.getElementById("img0");
	img.setAttribute("src","images/doge.jpg");
	img.setAttribute("alt", "Doge 0");
	var img1 = document.getElementById("img1");	
	img1.setAttribute("src","images/doge1.jpg");
	img1.setAttribute("alt", "Doge 1");
	var img2 = document.getElementById("img2");
	img2.setAttribute("src","images/doge2.jpg");
	img2.setAttribute("alt", "Doge 2");
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
