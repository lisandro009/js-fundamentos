var section=document.getElementById("seccion");

var figure=document.createElement("figure"), 
img=document.createElement("img"), 
figcation=document.createElement("figcaption"),
figcationText=document.createTextNode("Animal");
// console.log(section)

img.setAttribute("src","https://placeimg.com/200/200/animals");
img.setAttribute("alt","Animals");

figcation.appendChild(figcationText)
figure.appendChild(img)
figure.appendChild(figcation)
section.appendChild(figure);
