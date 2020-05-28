window.addEventListener("load", start);

let guestList = ['Sophia Schmit', 'George Connelly', 'Mikael Star', 'Lilly Happer'];
let inputName = null;
let currentIndex = null;
let isEditing = false;

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

    function updateName(newName){
        guestList[currentIndex] = newName;
    }

    function handleTyping(event){
        
        let hasText = !!event.target.value && event.target.value.trim() !== "";

        if (!hasText){
            clearInput();
            return;
        }

        if (event.key === "Enter"){
            if (isEditing){
                updateName(event.target.value)
            }
            else{
                insertName(event.target.value);
            }

            isEditing = false;   
            clearInput();
            render();         
        }
    }

    function insertName(newName){
        guestList.push(newName);
        alert(newName + " was added to the List!");
        render();
    }
}

function render(){

    function createDeleteButton(index){
        let button = document.createElement("button");
        button.classList.add("deleteButton");
        button.textContent= "x";

        button.addEventListener("click", deleteName);

        function deleteName(){
            guestList.splice(index, 1);
            render();
        }

        return button;
    }

    function createSpan(name, index){
        let span = document.createElement("span");
        span.classList.add("clickable");
        span.textContent = name;
        span.addEventListener("click", editItem);

        function editItem(){
            inputName.value = name;
            inputName.focus();
            isEditing = true;
            currentIndex = index;
        }

        return span;
    }

    let divNames = document.querySelector("#names");
    divNames.innerHTML= "";

    let ul = document.createElement("ul");

    for (let i=0; i<guestList.length; i++){
        let currentName = guestList[i];

        let li = document.createElement("li");
        let button = createDeleteButton(i);
        let span = createSpan(currentName, i);
        
        li.appendChild(button);
        li.appendChild(span);

        ul.appendChild(li);
    }

    divNames.appendChild(ul);
    clearInput();
}

function clearInput(){
    inputName.value="";
    inputName.focus();
}
