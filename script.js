    document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    console.log('hi');
})
    function createBoard(size){
        let container = document.querySelector("#container");

        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        let numDiv = size * size;

        for (let i = 0; i < numDiv; i++){
            let div = document.createElement("div");
            div.style.backgroundColor = "yellow";
            container.insertAdjacentElement("beforeend", div);

        }
    }