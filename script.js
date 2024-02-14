$(document).ready(function(){

  $("button").click(function(){
    
    var usrname = $("#fname").val();
    var namelength = usrname.length;
    var namemsg = "Your name is this many characters long: ";

    $("#nameoutput").text(namemsg + namelength);
    
    reversename = namebutbackwards(usrname);
    reversemsg = "Your name, but reversed: ";
    $("#namereverse").text(reversemsg + reversename);

    var spirit = ["Otter Penguin", "Owl Wolf", "Elephant Koi", "Turtle Duck", "Cranefish", "Iguana Parrot", "Flying Bison", "Badgermole", "Flying Bison"];
    var randspirit = spirit[Math.floor(Math.random() * spirit.length)];

    $("#namearray").text("Your spirit animal is a(n): " + randspirit);


function namebutbackwards(stringVal){
  var revString = stringVal.split("").reverse().join("");
 return revString;
}

  });

});