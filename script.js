    document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    let btn_popup = document.querySelector(".button-24")
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})
    function createBoard(size){
        let container = document.querySelector(".container");

        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        let numDiv = size * size;

        for (let i = 0; i < numDiv; i++){
            let div = document.createElement("div");
            div.addEventListener("mouseover", colorDiv());
            container.insertAdjacentElement("beforeend", div);

        }
    }
    function getSize(){
        let input = prompt("Input the size of the board");
        let message = document.querySelector('#message');

        if (input === ""){
            message.innerHTML = "Please provide a number";
            return null;
        }
        else if (input < 0 || input > 100 || isNaN(input)){
            message.innerHTML = "Provide a number between 1 and 100";
            return null;
        }   
        else{ message.innerHTML = "Now you can play!";
            return parseInt(input);
        }
    }
    function colorDiv(){
        
    }