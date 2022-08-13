let gotCitiesCSV =
"King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
let lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad",
];
let bestThing =
"The best thing about a boolean is even if you are wrong you are only off by a bit";

console.log(lotrCitiesArray);
console.log(bestThing);
// ----------------------------------------------------------------------
// Complete the Following Katas
// ----------------------------------------------------------------------

// Remember to also append the results to your HTML page for every kata!
// Use document.createElement() to create the HTML with JavaScript
// This should be in the format:
// <h3>Kata 0</h3>
// <div>["Your", "array", "result", "here"]</div>

// Remember to render your arrays with JSON.stringify();

// Hint: You could create a function which renders any result to the DOM,
// then just call this function inside each kata!  That way you only have to write code to render
// to the DOM once :)

let kataNumber1 = [0];

function createHeader(){
  for(let index = 0; index < kataNumber1.length; index += 1){
    let header = document.createElement("h3");
    let kata = "Kata";
    let kataNumber = kataNumber1[index] += 1;
    header.textContent = `${kata}  ${kataNumber}`;
    document.body.append(header); 
  }
}

// Write a function that returns an array with the cities in 'gotCitiesCSV'.

function kata1() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  let newArray = gotCitiesCSV.split();
  newElement.textContent = JSON.stringify(newArray);
  return newArray; 
}
kata1(); 

// Write a function that returns an array of words from the sentence in 'bestThing'.

function kata2() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  let theMethod = bestThing.split(" ");
  newElement.innerText = JSON.stringify(theMethod);
  return theMethod;
}
kata2();

// Write a function that returns a string separated by semi-colons instead of commas from 'gotCitiesCSV'.

function kata3() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  let wordToArray = gotCitiesCSV.replaceAll(",", ';');
  newElement.innerText = JSON.stringify(wordToArray);
  return wordToArray;
}
kata3();

// Write a function that returns a CSV (comma-separated) string from the 'lotrCitiesArray'.

function kata4() {
  createHeader();
  let commaDiv = document.createElement("div");
  document.body.append(commaDiv);
  let wordsCopyNoCommas = lotrCitiesArray.toString();
  commaDiv.innerText = JSON.stringify(wordsCopyNoCommas);
  return wordsCopyNoCommas; 
  
}
kata4();



// Write a function that returns an array with the first 5 cities in 'lotrCitiesArray'.

function kata5() {
  createHeader();
  let fivesDiv = document.createElement("div");
  document.body.append(fivesDiv);
  let firstFive = lotrCitiesArray.slice(0, 5);
  fivesDiv.innerText = JSON.stringify(firstFive);
  return firstFive; 
}
kata5();

// Write a function that returns an array with the last 5 cities in 'lotrCitiesArray'.

function kata6() {
  createHeader();
  let lastCitiesDiv = document.createElement("div");
  document.body.append(lastCitiesDiv);
  let lastFive = lotrCitiesArray.slice(-5);
  lastCitiesDiv.innerText = JSON.stringify(lastFive);
  return lastFive; 
}
kata6();

// Write a function that returns an array with the 3rd to 5th city in 'lotrCitiesArray'.
function kata7() {
  createHeader();
  let betweenDiv = document.createElement("div");
  document.body.append(betweenDiv);
  let betweenTheArray = lotrCitiesArray.slice(2, 5);
  betweenDiv.innerText = JSON.stringify(betweenTheArray);
  return betweenTheArray; 
}
kata7(); 

// Write a function that uses 'splice' to remove 'Rohan' from 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata8() {
  createHeader();
  let removeValueDiv = document.createElement("div");
  document.body.append(removeValueDiv);
  let removingItem = lotrCitiesArray.splice(lotrCitiesArray.indexOf("Rohan"), 1);
  removeValueDiv.innerText = JSON.stringify(lotrCitiesArray);
  return lotrCitiesArray;  
}
kata8();

// Write a function that uses 'splice' to remove all cities after 'Dead Marshes' in 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata9() {
  createHeader();
  let afterCityDiv = document.createElement("div");
  document.body.append(afterCityDiv);
  lotrCitiesArray.splice(lotrCitiesArray.indexOf("Dead Marshes")+1, 2);
  afterCityDiv.innerText = JSON.stringify(lotrCitiesArray)
  return lotrCitiesArray; 
}
kata9();


// Write a function that uses 'splice' to add 'Rohan' back to 'lotrCitiesArray' right after 'Gondor' and returns the modified 'lotrCitiesArray'.
function kata10() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  lotrCitiesArray.splice(lotrCitiesArray.indexOf("Beleriand"), 0, "Rohan");
  newElement.innerText = JSON.stringify(lotrCitiesArray);
  return lotrCitiesArray;
}
kata10();

// Write a function that uses 'splice' to rename 'Dead Marshes' to 'Deadest Marshes' in 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata11() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  lotrCitiesArray.splice(lotrCitiesArray.indexOf("Dead Marshes"), 1, "Deadest Marshes");
  newElement.innerText = JSON.stringify(lotrCitiesArray);
  return lotrCitiesArray;
} 
kata11(); 

// Write a function that uses 'slice' to return a string with the first 14 characters from 'bestThing'.
function kata12() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  let theMethod = bestThing.slice(69, 81);
  newElement.innerText = JSON.stringify(theMethod);
  return theMethod;
}
kata12();
console.log(bestThing.length)
// Write a function that uses 'slice' to return a string with the last 12 characters from 'bestThing'.
function kata13() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  let theMethod = bestThing.slice(0, 12);
  newElement.innerText = JSON.stringify(theMethod);
  return theMethod;
}
kata13();

// Write a function that uses 'slice' to return a string with the characters between the 23rd and 38th position of 'bestThing' (i.e., 'boolean is even').
function kata14() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  let theMethod = bestThing.slice(23, 38);
  newElement.innerText = JSON.stringify(theMethod);
  return theMethod;
}  
kata14();

// Write a function that does the exact same thing as #13 but use the 'substring' method instead of 'slice'.
function kata15() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  let theMethod = bestThing.substring(0, 12);
  newElement.innerText = JSON.stringify(theMethod);
  return theMethod;
}  
kata15();

// Write a function that does the exact same thing as #14 but use the 'substring' method instead of 'slice'.
function kata16() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  let theMethod = bestThing.substring(23, 38);
  newElement.innerText = JSON.stringify(theMethod);
  return theMethod;
}
kata16();

// Write a function that uses 'pop' to remove the last city from 'lotrCitiesArray' and returns the modified array.
function kata17() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  lotrCitiesArray.pop(lotrCitiesArray.indexOf("Harad"));
  newElement.innerText = JSON.stringify(lotrCitiesArray);
  return lotrCitiesArray;
}
kata17();

// Write a function that uses 'push' to add back the city from 'lotrCitiesArray' that was removed in #17 to the back of the array and returns the modified array.
function kata18() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  lotrCitiesArray.push("Harad");
  newElement.innerText = JSON.stringify(lotrCitiesArray);
  return lotrCitiesArray;
} 
kata18();

// Write a function that uses 'shift' to remove the first city from 'lotrCitiesArray' and returns the modified array.
function kata19() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  lotrCitiesArray.shift();
  newElement.innerText = JSON.stringify(lotrCitiesArray);
  return lotrCitiesArray;
}
kata19(); 

// Write a function that uses 'unshift' to add back the city from 'lotrCitiesArray' that was removed in #19 to the front of the array and returns the modified array.
function kata20() {
  createHeader();
  let newElement = document.createElement("div");
  document.body.append(newElement);
  lotrCitiesArray.unshift("Mordor");
  newElement.innerText = JSON.stringify(lotrCitiesArray);
  return lotrCitiesArray;
} 
kata20();

// ----------------------------------------------------------------------
// Optional Practice Problems - Complete these for extra practice
// ----------------------------------------------------------------------

// Remember to append the results of each kata to the page as well as return the result!

// Write a function that finds and returns the index of 'only' in 'bestThing'.
function kata21() {
  // Your Code Here
}
// Write a function that finds and returns the index of the last word in 'bestThing'.
function kata22() {
  // Your Code Here
}
// Write a function that finds and returns an array of all cities from 'gotCitiesCSV' that use double vowels ('aa', 'ee', etc.).
function kata23() {
  // Your Code Here
}
// Write a function that finds and returns an array with all cities from 'lotrCitiesArray' that end with 'or'.
function kata24() {
  // Your Code Here
}
// Write a function that finds and returns an array with all the words in 'bestThing' that start with a 'b'.
function kata25() {
  // Your Code Here
}
// Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Mirkwood'.
function kata26() {
  // Your Code Here
}
// Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Hollywood'.
function kata27() {
  // Your Code Here
}
// Write a function that returns the index of 'Mirkwood' in 'lotrCitiesArray'.
function kata28() {
  // Your Code Here
}
// Write a function that finds and returns the first city in 'lotrCitiesArray' that has more than one word.
function kata29() {
  // Your Code Here
}
// Write a function that reverses the order of 'lotrCitiesArray' and returns the modified array.
function kata30() {
  // Your Code Here
}
// Write a function that sorts 'lotrCitiesArray' alphabetically and returns the modified array.
function kata31() {
  // Your Code Here
}
// Write a function that sorts 'lotrCitiesArray' by the number of characters in each city (i.e., shortest city names go first) and return the modified array.
function kata32() {
  // Your Code Here
}

