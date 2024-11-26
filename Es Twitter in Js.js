/*Creare un prompt che
mi dica quante lettere mi rimangono e
quante ne ho scritte in più per twitter 
bisogna usare anche la fx .lenght
l'output che deve uscire deve essere tipo
you have written var chracters , you have var character left.*/



var Numeri = prompt("Inserisci il testo ");
var NumeriMax = 140;

alert("You have written " + Numeri.length + " characters, you have " + (NumeriMax - Numeri.length) + " characters left.");



// si poteva scrivere anche cosi' che è più corretto

/*
var tweet = prompt("Inserisci il testo");
var tweetCount = tweet.lenght;

alert("You have written " + tweetCount + "characters, you have " + (140 - tweetCount) + "characters remaining" )  */
