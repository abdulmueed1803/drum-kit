//finding the no of buttons 
let len = document.querySelectorAll(".drum").length;

//switch function to play the sound associated
//to the alphabet
function switchFun(str){
    switch (str) {
        case "w":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;

        case "a":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;

        case "s":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
    
        case "d":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        
        case "j":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;

        case "k":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;

        case "l":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        default:
            alert(str);
            break;
    }
}



//for button clicking
for(let i=0; i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let buttonText = this.innerHTML ;
        console.log(buttonText);
        switchFun(buttonText);
        addAnimation(buttonText);
        
    });
}


//adding keyboard listener
document.addEventListener("keypress",function(event){
    let keyPressed = event.key ;
    switchFun(keyPressed);
    addAnimation(keyPressed);
    
});

//animation function
function addAnimation(key){
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        
        activeButton.classList.remove("pressed");
    },120);
}









