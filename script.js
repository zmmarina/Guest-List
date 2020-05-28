window.addEventListener("load", start);

let guestList = ['Sophia Schmit', 'George Connelly', 'Mikael Star', 'Lilly Happer'];
let inputName = null;

function start(){

    inputName = document.querySelector("#inputName");
   
    preventFormSubmit();
    activateInput();    
    render();
}

function preventFormSubmit(){

    let form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
        
    function handleFormSubmit(event){
        event.preventDefault();
    }
}

function activateInput(){

    inputName.focus();
    inputName.addEventListener("keyup", handleTyping);

    function handleTyping(event){
        if (event.key === "Enter"){
            insertName(event.target.value);
        }
    }

    function insertName(newName){
        guestList.push(newName);
        alert(newName + " was added to the List!");
        render();
    }
}

function render(){

    let divNames = document.querySelector("#names");
    divNames.innerHTML= "";

    let ul = document.createElement("ul");

    for (let i=0; i<guestList.length; i++){
        let currentName = guestList[i];

        let li = document.createElement("li");
        li.textContent = currentName;
        ul.appendChild(li);
    }
    
    divNames.appendChild(ul);
}

function clearInput(){
    inputName.clear();
    inputName.focus
}
