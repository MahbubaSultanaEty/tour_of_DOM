// accessing chilNodes

// accessing players-section
console.log(document.getElementById('players-section'));

// accessing all the childs of players-section
console.log(document.getElementById('players-section').childNodes);

// accessing ul element in this section which is in index 3
console.log(document.getElementById('players-section').childNodes[3]);

// accessing all the childs of ul
console.log(document.getElementById('players-section').childNodes[3].childNodes);

// accessing the 2nd li in the ul which is at index 4 in ul 
console.log(document.getElementById('players-section').childNodes[3].childNodes[3]);


// theres also parentNode
console.log(document.getElementById('players-section').childNodes[3].childNodes[3].parentNode.parentNode.parentNode);


// accessing  "zindegi gulzar hain"
console.log(document.getElementById("pak-drama").childNodes[5].childNodes[3]);



// create element and set innerText or innerHTML
const newChild = document.createElement("li");
newChild.innerText = "new Drama";

// find the parent where you will add the child
const dramas = document.getElementById('dramas');

// append the child to the parent 
dramas.appendChild(newChild)
