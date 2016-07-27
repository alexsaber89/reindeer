var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var hohohoElement = document.getElementById("coloredReindeer");

//Your task is to loop through all the reindeer in the array,
for (var i = 0; i < reindeer.length; i++) {

//and add the name of the reindeer to the single HTML <div> element provided.
//The name of the reindeer should be prepended with the corresponding color from the other array.
  hohohoElement.innerHTML += '<p class="' + colors[i].toLowerCase() + '">' + colors[i] +  " " + reindeer[i] + '</p>';
}