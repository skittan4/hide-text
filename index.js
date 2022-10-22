// select the button and the paragraph
let buttons = document.getElementsByClassName("button");
let stat=true
buttons[0].addEventListener("click", function () {
     
    let line = document.getElementById("line")
    /* line.classList.toggle("hide") */
    if (stat ==true){
       line.classList.add("hide")
    //line.style.display='none';
      stat= false
     }

     else  {
        line.classList.remove("hide")
        //line.style.display='initial'
         stat =true
    }
});


// add an event listener that runs when someone clicks the button