fetch("https://jsonplaceholder.typicode.com/users",{
    method: "get",
    headers: {
        Accept: "application/json, plain/text, */*",
        "Content-Type": "application/json",
    }
})
.then((response) => response.json())
  .then((data) => {
    let i = 0;
    console.log(data);
    
     data.forEach((person) => {
        
        if(i<=12){
            celula= document.createElement("td");
            celula.classList.add("a"+ i);
            document.querySelector(".a" + i).innerText = person.id;
            i++;
            document.querySelector(".a" + i).innerText = person.name;
            i++;
            document.querySelector(".a" + i).innerText = person.address.city;
            i++;
            document.querySelector(".a" + i).innerText = person.phone;
            i++;
            }    
        });
  });

