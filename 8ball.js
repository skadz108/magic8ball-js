/*    Magic 8 Ball 
   ~~~~~~~~~~~~~~~~~~
   
   Responses adapted from Wikipedia [wikipedia.org/wiki/Magic_8_Ball]
   Code edited by Skadz [skadz.net]
   Item Selector stolen from "Kelly" at Stack Overflow [stackoverflow.com/questions/5915096/]
   
   ~~~Usage~~~
   Use however you like! Feel free to adapt or use for your own work.
   
   And remember to shake the Magic 8 until it breaks!    */


var responses = [
    // Positive Responses
    'Signs point to yes.', 'Outlook positive', 'It is certain','As I see it, yes.', 
    // Oops! You have to put the CD in your computer.
    'Ask again later', 'Cannot predict now', 'The true answer lies deep inside you.',
    // Negative Responses
    'Outlook not so good', "Don't count on it.", 'My sources say no.'];

function ShakeTheMagic8() {
    document.getElementById('response-text').innerHTML = responses[Math.floor(Math.random() * responses.length)];
}