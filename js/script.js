function createSquares(numOfSquareGroups){
    for(let i = 0; i < numOfSquareGroups; i++) {
        document.getElementById("layout3-wrapper").innerHTML+="<section class='squares'><section class='square1'></section><section class='square2'></section><section class='square3'></section><section class='square4'></section></section>";      
    }
    let wrapper_height = 0;
    for(let i = 0; i < numOfSquareGroups/2; i++){
        wrapper_height+=500;
        document.getElementById("layout3-wrapper").style.height = wrapper_height+'px';
    }
}

let numOfSquareGroups = 4;
createSquares(numOfSquareGroups);


for(let i = 0; i < numOfSquareGroups+1; i++)
{
    var square = document.getElementsByClassName("squares")[i].getElementsByTagName("section");
    for(let j = 0; j < 4; j++)
    {
        // square[j].addEventListener("click", (e)=>{
        //     e.target.style.backgroundColor = "red";
        // })
        square[j].onclick = function(e){
            if(e.target.style.backgroundColor == "red")
                e.target.style.backgroundColor = "white";
            else
                e.target.style.backgroundColor = "red";
        }
    }
}

var plus = document.getElementsByClassName("layout3-header")[0].getElementsByTagName("img")[0];
console.log(plus);

plus.addEventListener("click", function(){
    sq=document.getElementsByClassName("squares")[1].getElementsByTagName("section")[0];
    sq.style.opacity += 0.1;
    alert("I GOT CLICKED!");
    });