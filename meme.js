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
	document.getElementById("memeBorn").innerHTML = "Born: June 2013";
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
	
	var image = document.getElementById("memeImage");
	image.setAttribute("src", "images/brain.png");

	document.getElementById("name").innerHTML = "Expanding Brain";
	document.getElementById("summary").innerHTML = "Expanding Brain is a meme in which a series of images compare the brain size of a person relative to a certain factor. Though the expanding brain is usually implied to showcase intellectual superiority over various objects, it is more often used in an ironic sense to imply the opposite, where objects of derision are implied to be of higher standard than objects that are usually highly regarded. For example, when used with Whomst, a person who uses \“who\” will be shown with the smallest brain, while a person who uses the most ridiculous variation, i.e. \“whomst’d’ve\”, will be shown with the largest brain.";
	document.getElementById("creation").innerHTML = "This meme originated as part of the \“Whomst\” meme where the left column was derivations of the word \“Who\” were paired with increasingly elaborate pictures of brains depending on how intense the \“who\” variation was. One of the most popular early examples was posted to /r/dankmemes on January 31st, 2017 by janskishimanski in a post that gained nearly 1,200 upvotes.";
	document.getElementById("eco").innerHTML = "The meme has its ups and downs, getting used quite frequently with other memes using its format. The meme is stable to invest in, but it is soon to be on the decline. The Expanding Brain is not going to expand any longer.";

	document.getElementById("memeTitle").innerHTML = "Expanding Brain";
	document.getElementById("memeBorn").innerHTML = "Born: January 31 2017";
	document.getElementById("memeUsed").innerHTML = "Usability: Stable";
	document.getElementById("memeFreq").innerHTML = "Frequently used during: February 2017";
	document.getElementById("memeOrigin").innerHTML = "Origin: Jankishmanski January 31, 2017";

	var img = document.getElementById("img0");
	img.setAttribute("src","images/brain0.jpg");
	img.setAttribute("alt", "Brain 0");
	var img1 = document.getElementById("img1");	
	img1.setAttribute("src","images/brain1png.png");
	img1.setAttribute("alt", "Brain 1");
	var img2 = document.getElementById("img2");
	img2.setAttribute("src","images/brain2.jpg");
	img2.setAttribute("alt", "Brain 2");
}

function feelsBad(){
	
	var image = document.getElementById("memeImage");
	image.setAttribute("src", "images/logo.png");

	document.getElementById("name").innerHTML = "FeelsBadMan";
	document.getElementById("summary").innerHTML = "FeelsBadMan is a cartoon drawing of a depressed-looking frog, often accompanied by the text \“Feels Bad Man\” or \“You Will Never X\”. It is used to denote feelings of failure or disappointment, either by posting the image or using the phrase \“feelsbadman.jpg.\” FeelsBadMan may be seen as the antithesis of Feels Good Man.";
	document.getElementById("creation").innerHTML = "The original FeelsBadMan artwork is based on Matt Furie’s drawing of Pepe the frog. The earliest archived 4chan thread was posted on January 22nd, 2009, in which an altered version of Furie’s original image with the mouth flipped, saying \“Feels Bad Man.\" On August 17th, 2009, a user on the Body Building Forums posted the FeelsBadMan image with the caption \“not good man.\”";
	document.getElementById("eco").innerHTML = "FeelsBadMan has always been a stable meme, but with President Trump as the President of the USA, FeelsBadMan is getting wide use once again. As Trump continues to stay in power, it will always be FeelsBadMan.";

	document.getElementById("memeTitle").innerHTML = "FeelsBadMan";
	document.getElementById("memeBorn").innerHTML = "Born: August 17, 2009";
	document.getElementById("memeUsed").innerHTML = "Usability: Popular";
	document.getElementById("memeFreq").innerHTML = "Frequently used during: April 2015";
	document.getElementById("memeOrigin").innerHTML = "Origin: Matt Furie January 22, 2009";

	var img = document.getElementById("img0");
	img.setAttribute("src","images/feels0.jpg");
	img.setAttribute("alt", "FeelsBadMan 0");
	var img1 = document.getElementById("img1");	
	img1.setAttribute("src","images/feels1.png");
	img1.setAttribute("alt", "FeelsBadMan 1");
	var img2 = document.getElementById("img2");
	img2.setAttribute("src","images/feels2.png");
	img2.setAttribute("alt", "FeelsBadMan 2");
}

function goodGuy(){
	
	var image = document.getElementById("memeImage");
	image.setAttribute("src", "images/goodGuy.jpg");

	document.getElementById("name").innerHTML = "Good Guy Greg";
	document.getElementById("summary").innerHTML = "Good Guy Greg (GGG) is an advice animal image macro series featuring a photo of a square-jawed man smiling at the camera with a marijuana cigarette in his mouth. As the antithesis of Scumbag Steve, the captions generally depict the character as kind, generous or empathetic to other people.";
	document.getElementById("creation").innerHTML = "Good Guy Greg is rumored to have started on 4chan’s /b/ (random) board but an archived thread has yet to be found. On April 26th, 2011, the template photo was uploaded to the image remixing site Canvas with the description \“This is Good Guy Greg.\” The Canvas thread received over 570 remix replies within 11 months.";
	document.getElementById("eco").innerHTML = "Good Guy Greg is a stable investment, he will always be a popular meme. People like to see the good in the world, and thats what Good Guy Greg is all about. Good Guy Greg brings faith to humanity.";

	document.getElementById("memeTitle").innerHTML = "Good Guy Greg";
	document.getElementById("memeBorn").innerHTML = "Born: April 26, 2011";
	document.getElementById("memeUsed").innerHTML = "Usability: Stable";
	document.getElementById("memeFreq").innerHTML = "Frequently used during: April 2015";
	document.getElementById("memeOrigin").innerHTML = "Origin: 4chan's /b/ Date Unknown";

	var img = document.getElementById("img0");
	img.setAttribute("src","images/goodGuy0.jpg");
	img.setAttribute("alt", "GoodGuyGreg 0");
	var img1 = document.getElementById("img1");	
	img1.setAttribute("src","images/goodGuy1.png");
	img1.setAttribute("alt", "GoodGuyGreg 1");
	var img2 = document.getElementById("img2");
	img2.setAttribute("src","images/goodGuy2.png");
	img2.setAttribute("alt", "GoodGuyGreg 2");
}

function dump(){
	
	var image = document.getElementById("memeImage");
	image.setAttribute("src", "images/dump.jpg");

	document.getElementById("name").innerHTML = "Meme Dumps";
	document.getElementById("summary").innerHTML = "Meme dumps are a common type of pose among most image sharing sites. These meme dumps are usually filled with a wide variety of different types of memes ranging from confession bear to sponge bob memes. Meme dumps are a compilation of great memes, and because of this, these meme dumps are mostly reposts. These reposts are not bad though, althought some memes might have been seen by others, it is very rare that all memes have been seen by one person. They are all good memes regardless.";
	document.getElementById("creation").innerHTML = "Meme dumps are said to have been created by someone making a compilation of good memes. After this, meme dumps now just generally contain memes other have found to be funny or worth sharing. No one can trace back the origin of the first meme dump, but meme dumps bring all memes together, literally. Meme dumps are always created everyday, and are very popular throughout the Internet.";
	document.getElementById("eco").innerHTML = "Meme dumps are very stable, and very profitable. You can invest in meme dumps all day. Everyone likes and can use a meme dump every now and then. Not everyone can see and browse every meme, but with meme dumps they are one step closer to seeing all memes. Buy buy buy!!";

	document.getElementById("memeTitle").innerHTML = "Meme Dumps";
	document.getElementById("memeBorn").innerHTML = "Born: Unknown";
	document.getElementById("memeUsed").innerHTML = "Usability: Popular";
	document.getElementById("memeFreq").innerHTML = "Frequently used during: Used Daily";
	document.getElementById("memeOrigin").innerHTML = "Origin: Unknown";

	var img = document.getElementById("img0");
	img.setAttribute("src","images/goodGuy0.jpg");
	img.setAttribute("alt", "Dump 0");
	var img1 = document.getElementById("img1");	
	img1.setAttribute("src","images/feels1.png");
	img1.setAttribute("alt", "Dump 1");
	var img2 = document.getElementById("img2");
	img2.setAttribute("src","images/doge1.jpg");
	img2.setAttribute("alt", "Dump 2");
}

function think(){
	
	var image = document.getElementById("memeImage");
	image.setAttribute("src", "images/think.JPG");

	document.getElementById("name").innerHTML = "Roll Safe";
	document.getElementById("summary").innerHTML = "Roll Safe is an image macro serious featuring a screenshot of actor Kayode Ewumi grinning and pointing to his temple while portraying the character Reece Simpson (a.k.a. \“Roll Safe\”) in the web series Hood Documentary. The image is often captioned with various jokes mocking poor decision making and failures in critical thinking.";
	document.getElementById("creation").innerHTML = "On June 1st, 2016, the BBC Three YouTube channel uploaded a mini documentary on the Hood Documentary series, in which the Ewumi is shown pointing to his head and smiling. Within eight months, the video gained over 1.04 million views and 1,300 comments.";
	document.getElementById("eco").innerHTML = "The roll safe meme is a very recent meme, and is a meme that has no similarity with any other meme used in the past. Roll safe memes, just like the name are very safe to invest in. They are still popular and will continue to grow or atleast stay stable in the future.";

	document.getElementById("memeTitle").innerHTML = "Roll Safe";
	document.getElementById("memeBorn").innerHTML = "Born: January 22, 2017";
	document.getElementById("memeUsed").innerHTML = "Usability: Popular";
	document.getElementById("memeFreq").innerHTML = "Frequently used during: February 2017";
	document.getElementById("memeOrigin").innerHTML = "Origin: BBC Three June 1, 2016";

	var img = document.getElementById("img0");
	img.setAttribute("src","images/think0.jpg");
	img.setAttribute("alt", "Thinking 0");
	var img1 = document.getElementById("img1");	
	img1.setAttribute("src","images/think1.jpg");
	img1.setAttribute("alt", "Thinking 1");
	var img2 = document.getElementById("img2");
	img2.setAttribute("src","images/think2.jpg");
	img2.setAttribute("alt", "Thinking 2");
}

function sponge(){
	
	var image = document.getElementById("memeImage");
	image.setAttribute("src", "images/sponge.jpg");

	document.getElementById("name").innerHTML = "SpongeBob";
	document.getElementById("summary").innerHTML = "SpongeBob SquarePants is a long-running American television series created by Stephen Hillenburg, airing on Nickelodeon. Currently on its ninth season, the series revolves around its titular character, SpongeBob SquarePants, and his many misadventures in the underwater town of Bikini Bottom. With all kinds of entertaining and humorous moments and scenes, the show has produced several memes.";
	document.getElementById("creation").innerHTML = "Stephen Hillenburg conceived SpongeBob SquarePants in 1984, while he was teaching and studying marine biology at what is now the Orange County Ocean Institute. He became interested in animation, writing a comic book entitled \"The Intertidal Zone\" that featured various anthropomorphic forms of sea creatures, many of which would evolve into SpongeBob SquarePants characters.";
	document.getElementById("eco").innerHTML = "SpongeBob memes have a very large fandom, and the show itself has created a large amount of memes. The trend for SpongeBob memes fluctuate often, and are not very good for investment. Although every now and then someone does make a new meme from this show. New SpongeBob memes are always worth to buy!";

	document.getElementById("memeTitle").innerHTML = "SpongeBob";
	document.getElementById("memeBorn").innerHTML = "Born: May 1999";
	document.getElementById("memeUsed").innerHTML = "Usability: Fluctuating";
	document.getElementById("memeFreq").innerHTML = "Frequently used during: Used Daily";
	document.getElementById("memeOrigin").innerHTML = "Origin: Stephen Hillenburg 1984";

	var img = document.getElementById("img0");
	img.setAttribute("src","images/sponge0.jpg");
	img.setAttribute("alt", "Sponge 0");
	var img1 = document.getElementById("img1");	
	img1.setAttribute("src","images/sponge1.gif");
	img1.setAttribute("alt", "Sponge 1");
	var img2 = document.getElementById("img2");
	img2.setAttribute("src","images/sponge2.jpeg");
	img2.setAttribute("alt", "Sponge 2");
}

function troll(){
	
	var image = document.getElementById("memeImage");
	image.setAttribute("src", "images/troll.png");

	document.getElementById("name").innerHTML = "TrollFace";
	document.getElementById("summary").innerHTML = "Trollface is a rage comic character wearing a mischievous smile that is meant to represent the facial expression of an Internet troll. The image is most commonly used to portray a character as a troll in rage comics, or alternatively, to identify oneself or another participant as such in online discussions.";
	document.getElementById("creation").innerHTML = "The Trollface was originally drawn by Carlos Ramirez, an Oakland-based artist known by his deviantART handle Whynne, as part of a MS Paint webcomic webcomic about the pointless nature of trolling on 4chan’s /v/ (video games) board. The comic was uploaded to deviantART on September 19, 2008.";
	document.getElementById("eco").innerHTML = "Trollface is a dead and slowly dying meme. Most people who have previously upvoted trollface has just grown up and gotten more mature. Trollface was frequently used during the early days of call of duty, but now is a dead meme. Do not invest in trollface.";

	document.getElementById("memeTitle").innerHTML = "TrollFace";
	document.getElementById("memeBorn").innerHTML = "Born: September 19, 2008";
	document.getElementById("memeUsed").innerHTML = "Usability: Dead";
	document.getElementById("memeFreq").innerHTML = "Frequently used during: Early 2009";
	document.getElementById("memeOrigin").innerHTML = "Origin: Carlos Ramirez September 2008";

	var img = document.getElementById("img0");
	img.setAttribute("src","images/troll0.gif");
	img.setAttribute("alt", "Troll 0");
	var img1 = document.getElementById("img1");	
	img1.setAttribute("src","images/troll1.jpg");
	img1.setAttribute("alt", "Troll 1");
	var img2 = document.getElementById("img2");
	img2.setAttribute("src","images/troll2.jpg");
	img2.setAttribute("alt", "Troll 2");
}

function puffin(){

	var image = document.getElementById("memeImage");
	image.setAttribute("src", "images/puffin.jpg");

	document.getElementById("name").innerHTML = "UnPopular Opinion Puffin";
	document.getElementById("summary").innerHTML = "Unpopular Opinion Puffin is an advice animal image macro series featuring a photograph of a baby puffin and various captions conveying opinions that are thought to be unpopular, in similar vein to other non-conformist advice animal characters like Confession Bear and Angry Walter.";
	document.getElementById("creation").innerHTML = "The photographer of the original stock photo is Andreas Mulder, a student in Netherlands. The image has been included in a photography book, early titled as \“Silly Walk\”.The image appeared online as early as July 2010 on That Cute Site. On July 24th, 2013, it was used as an image macro for the first time in a submission to the /r/AdviceAnimals subreddit. In the post, the OP suggested using it as an alternative to Confession Bear, which had been frequently used on the subreddit as a way to express an unpopular opinion disguised as a confession.";
	document.getElementById("eco").innerHTML = "Invest in the UnPopular Opinion Puffin, although most posts are repeats making the meme hypocritical of its own name, the UnPopular Opinion Puffin has always been a great source upvotes.";

	document.getElementById("memeTitle").innerHTML = "UnPopular Opinion Puffin";
	document.getElementById("memeBorn").innerHTML = "Born: July 24, 2013";
	document.getElementById("memeUsed").innerHTML = "Usability: Popular";
	document.getElementById("memeFreq").innerHTML = "Frequently used during: Used Daily";
	document.getElementById("memeOrigin").innerHTML = "Origin: Andreas Mulder July 2010";

	var img = document.getElementById("img0");
	img.setAttribute("src","images/puffin0.jpg");
	img.setAttribute("alt", "Puffin 0");
	var img1 = document.getElementById("img1");	
	img1.setAttribute("src","images/puffin1.jpg");
	img1.setAttribute("alt", "Puffin 1");
	var img2 = document.getElementById("img2");
	img2.setAttribute("src","images/puffin2.jpg");
	img2.setAttribute("alt", "Puffin 2");
}

function zerg(){
	
	var image = document.getElementById("memeImage");
	image.setAttribute("src", "images/zerg.jpg");

	document.getElementById("name").innerHTML = "Zerg Rush";
	document.getElementById("summary").innerHTML = "Zerg Rush is an online gaming term used to describe an overwhelming scale of attack carried out by one player against another in real time strategy (RTS) games. The term originates from the popular RTS game Starcraft, in which the \“Zerg\” race is notoriously known for its ability to mass-produce offensive units within a short time frame, thus allowing the player to overpower the opponent by sheer number.";
	document.getElementById("creation").innerHTML = "Similar to \"You must construct additional pylons!\" and \"In Ur Base\", Zerg Rush came from StarCraft, a military science real time strategy game originally released on March 31st, 1998. In the game, each player can choose to play as one of the three species: Terran (humans), Protoss (humanoids) or Zerg (insectoids).";
	document.getElementById("eco").innerHTML = "Zerg rush is a declining meme, investing in it is only for the future. There will be a for sure rise in the zerg rush meme when StarCraft 3 releases sometime in the future. For now, do not invest in the zerg rush meme.";

	document.getElementById("memeTitle").innerHTML = "Zerg Rush";
	document.getElementById("memeBorn").innerHTML = "Born: May 2004";
	document.getElementById("memeUsed").innerHTML = "Usability: Declining";
	document.getElementById("memeFreq").innerHTML = "Frequently used during: April 2012";
	document.getElementById("memeOrigin").innerHTML = "Origin: Starcraft March 31, 1998";

	var img = document.getElementById("img0");
	img.setAttribute("src","images/zerg0.jpeg");
	img.setAttribute("alt", "Dump 0");
	var img1 = document.getElementById("img1");	
	img1.setAttribute("src","images/zerg1.jpg");
	img1.setAttribute("alt", "Dump 1");
	var img2 = document.getElementById("img2");
	img2.setAttribute("src","images/zerg2.jpg");
	img2.setAttribute("alt", "Dump 2");
}

function randomMeme(){
	var memes = ["confessBear", "blink", "doge", "exBrain", "feelsBad", "goodGuy","dump","think","sponge","troll","puffin","zerg"];

	var ranInt = Math.floor(Math.random() * 12);

	localStorage.setItem("meme", memes[ranInt]);

	var x = localStorage.getItem("meme");
	window[x]();
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
	document.getElementById("random").addEventListener("click", randomMeme, false);
}


document.addEventListener("DOMContentLoaded", load, false);
