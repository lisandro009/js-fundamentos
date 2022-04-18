var $template=document.getElementById("template").content,
 $fragment=document.createDocumentFragment(),
 cardContent=[
     {
         title:"Tecnologia",
         img:"https://placeimg.com/200/200/tech"
     },
     {
         
        title:"Animals",
        img:"https://placeimg.com/200/200/animals"
     }
 ],
 $cards=document.querySelector(".cards");
console.log($cards)
 cardContent.forEach(ele=>{
     $template.querySelector("img").setAttribute("src",ele.img);
     $template.querySelector("img").setAttribute("alt",ele.title);
     $template.querySelector("figcaption").textContent = ele.title;

     let clone =document.importNode($template,true);
     $fragment.appendChild(clone);

 })

 $cards.appendChild($fragment);