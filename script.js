   let color = "black";
   let click = false;

   document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    document.querySelector("body").addEventListener("click", function(e){
        if (e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector('#draw');
            if (click){
                draw.innerHTML ="You can draw now!";
            }
            else {
                draw.innerHTML ="You can't draw right now!";
            }
        }
    })

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
            div.addEventListener("mouseover", colorDiv);
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
        if(click){
            if (color == "random"){
                this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
            }
            else{
                this.style.backgroundColor = "black";
            }
        }
    }
    
    function setColor(colorChoice){
        color = colorChoice;
    }

    function resetBoard(){
        let divs = document.querySelectorAll("div");
        divs.forEach((div) => div.style.backgroundColor = "bisque");
    }