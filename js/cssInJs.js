// const sections = document.getElementsByTagName("section");
const sections = document.querySelectorAll("section");

// console.log(sections);
// for (const section of sections) {
//     console.log(section);
//     section.style.backgroundColor = "beige";
//     section.style.border = "2px solid green";
//     section.style.margin = "30px";
//     section.style.borderRadius = "5px";

// }

for (const section of sections) {
    section.classList.add("italic");
    console.log("section")
}
