var  $fragment=document.createDocumentFragment(),
$cards=document.querySelector(".cards"),
cardContent=[
     {
         title:"Tecnologia",
         img:"https://placeimg.com/200/200/tech"
     },
     {
         
        title:"Animals",
        img:"https://placeimg.com/200/200/animals"
     }
 ];
 cardContent.forEach(ele=>{
    var figure=document.createElement("figure"), 
    img=document.createElement("img"), 
    figcation=document.createElement("figcaption"),
    section=document.createElement("section");
     img.setAttribute("src",ele.img);
     img.setAttribute("alt",ele.title);
     figcation.textContent = ele.title;

     
    figure.appendChild(img)
    figure.appendChild(figcation)
    section.appendChild(figure);

     $fragment.appendChild(section);

 })

 $cards.appendChild($fragment);