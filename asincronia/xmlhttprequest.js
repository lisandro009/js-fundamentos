//json place holder

const xmlrequest= new XMLHttpRequest();

xmlrequest.addEventListener("readystatechange",()=>{
    if(xmlrequest.readyState==4){
        console.log(xmlrequest)
        if(xmlrequest.status>=200 && xmlrequest.status<300){
            console.log(xmlrequest.response)
        }
    }

})

xmlrequest.open("GET","https://jsonplaceholder.typicode.com/todos")
xmlrequest.send();