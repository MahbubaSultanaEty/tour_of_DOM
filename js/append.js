// 1.parent Node
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

// 2. create Child Node
const placeSection = document.createElement("section");

// h1
const h1 = document.createElement("h1");
h1.innerText = "Flowers I want to buy";

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Sunflower";

const li2 = document.createElement("li");
li2.innerText = "Tulip";

// 3. places the section to the main-container
mainContainer.appendChild(placeSection).appendChild(h1);
placeSection.appendChild(ul).appendChild(li1);
placeSection.appendChild(ul).appendChild(li2);



// easier or shortcut way to create childs
const bookSection = document.createElement("section");
