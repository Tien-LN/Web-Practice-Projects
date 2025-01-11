const board = document.getElementById("board");

let indexImg = [];
for (let i = 0; i < 100; i++) 
{
    indexImg[i] = parseInt(i / 2) + 1;
}
for (let i = indexImg.length - 1; i > 0; i--)
{
    let j = Math.floor(Math.random() * (i + 1));
    let temp = indexImg[i];
    indexImg[i] = indexImg[j];
    indexImg[j] = temp;
}
for (let i = 0; i < 100; i++)
{
    let square = document.createElement("div");
    
    let img = document.createElement("img");
    img.src = `./pictures/p${indexImg[i]}.png`;
    img.classList.add("card_pic");

    square.appendChild(img);
    square.classList.add("square");
    board.appendChild(square);

    square.addEventListener("click", () => {
        if(square.innerHTML == "") { return; }
        
        let selectedSquares = document.getElementsByClassName("selected");
        if (selectedSquares.length == 0)
        {
            square.classList.add("selected");
        } else {
            if (selectedSquares[0] == square)
            {
                square.classList.remove("selected");
            } else {
                let img1 = square.getElementsByTagName("img")[0];
                let img2 = selectedSquares[0].getElementsByTagName("img")[0];
                if (img1.src == img2.src) {
                    square.innerHTML = "";
                    selectedSquares[0].innerHTML = "";
                }    
                selectedSquares[0].classList.remove("selected");
            }
        }
    });
}

