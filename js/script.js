function jokeProspector(){
  var jokeStarter = prompt("First, generate a list of possible topics to talk about!");
  var jokeContinue = alert("Great, you chose the following: " + jokeStarter);
  var decision = prompt("Now, of these topics, choose one that you would like to pursue further!")

  document.getElementById("header").innerHTML = "<h1><b>" + decision +"</b></h2><br />"

// negative statements -- These are the setup premises!

  var negState1 = prompt("Now, write at least 5 negative statements about one of these topics! Write your first one below!");
  var negState2 = prompt("Now write your second negative statement");
  var negState3 = prompt("Now your third one");
  var negState4 = prompt("Fourth");
  var negState5 = prompt("Last one!");
  var congrats = alert("Congratulations! Now for every negative statement, write the opposite of this statement! It must be positive! This is called your setup premise!");

// list of negative statements
  document.getElementById("inside").innerHTML = "<b>Negative Statement #1: </b>" + negState1 + "<br>" + "<b>Negative Statement #2: </b>" +  negState2 + "<br>" + "<b>Negative Statement #3: </b>" +   negState3 + "<br>" + "<b>Negative Statement #4: </b>" +   negState4 + "<br>" + "<b>Negative Statement #5: </b>" +  negState5;

// Positive statements

  var posState1 = prompt("First one!");
  var posState2 = prompt("Second one!");
  var posState3 = prompt("Third one!");
  var posState4 = prompt("Fourth!");
  var posState5 = prompt("Fifth! You did it!!");

// list of positive statements

  document.getElementById("inside2").innerHTML = "<b>Positive Statement #1: </b>" + posState1 + "<br>" + "<b>Positive Statement #2: </b>" +  posState2 + "<br>" + "<b>Positive Statement #3: </b>" +   posState3 + "<br>" + "<b>Positive Statement #4: </b>" +   posState4 + "<br>" + "<b>Positive Statement #5: </b>" +  posState5;


  alert("You can now write setups for jokes for each of the positive statements. Choose just one that you're interested in and then write five setups for the joke that you're going to make!");

// the actual setups!

  var setUp = prompt("First one!");
  var setUp2 = prompt("Second one!");
  var setUp3 = prompt("Third one!");
  var setUp4 = prompt("Fourth!");
  var setUp5 = prompt("Fifth! You did it!!");

document.getElementById("inside3").innerHTML= "<b>SetUp #1: </b>" + setUp + "<br>" + "<b>SetUp #2: </b>" + setUp2 + "<br>" + "<b>SetUp #3: </b>" +  setUp3 + "<br>" + "<b>SetUp #4: </b>" +  setUp4 + "<br>" + "<b>SetUp #5: </b>" + setUp5;

var favoriteSetUp = prompt("Awesome! Now select your favorite setup.");
alert("Awesome! You chose this as your favorite setup: " + favoriteSetUp);

document.getElementById("inside3a").innerHTML = "<b>Favorite Setup: </b>" + favoriteSetUp + ".";
var targetAssumption = prompt("Now, determine a target assumption based on the connector in the sentence. The connector is the one word that makes people assume something about your life without you having to say anything.");

alert("Awesome! You chose the following connector: " + targetAssumption);
document.getElementById("inside4").innerHTML = "<b>Target Assumption: </b> " + targetAssumption + ".";

var punch = prompt("Finally, you are going to write five punchlines (negative statements) about the positive statement based on the connector you chose. You are going to write a negative statement that is the opposite of the positive statement, based on the connector! Write five of these!");
var punch2 = prompt("Second one!");
var punch3 = prompt("Third one!");
var punch4 = prompt("Fourth! Almost there!");
var punch5 = prompt("Finished!");

alert("Congratulations! You have finished your joke prospecting! The results for your first joke are written below! Thank you for playing!");

document.getElementById("inside5").innerHTML =
"<h1>Joke Results</h1><p><b>Joke 1: </b>" + favoriteSetUp + " ... " + punch + "<br /><b>Joke 2: </b>" +  favoriteSetUp + " ... " + punch2 + "<br /><b>Joke 3: </b>" +  favoriteSetUp + " ... " + punch3 + "<br /><b> Joke 4: </b>" +  favoriteSetUp + " ... " + punch4 + "<br /><b>Joke 5: </b>" +  favoriteSetUp + " ... " + punch5;

} // this curly bracket marks the end of the function



jokeProspector();
