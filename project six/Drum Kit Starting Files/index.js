// function sound(filePath ,imgePath) { 
//    let audio = new Audio(filePath)
//    audio.play();
// }

// function setBackground(e ,filePath) { 
//     e.style.setProperty("background", `url(${filePath})`)
//     e.style.setProperty("background-size", "100% 100%")
//     e.style.setProperty("background-color", "#fff");

// }


// let buttons = document.querySelectorAll(".drum"); 
// buttons.forEach((e) => { 

//     switch(e.classList[0]) { 
//         case "w": 
//         e.addEventListener("click", function ()  {  sound("./sounds/crash.mp3")})
//         setBackground(e ,"./images/crash.png")
//         break; 
//         case "a": 
//         e.addEventListener("click", function ()  {  sound("./sounds/kick-bass.mp3")})
//         setBackground(e ,"./images/kick.png")
//         break; 
//         case "s":
//             e.addEventListener("click", function ()  {  sound("./sounds/snare.mp3")})
//             setBackground(e ,"./images/snare.png")
//         break; 
//         case "d": 
//         e.addEventListener("click", function ()  {  sound("./sounds/tom-1.mp3")})
//         setBackground(e ,"./images/tom1.png")
//         break; 
//         case "j": 
//         e.addEventListener("click", function ()  {  sound("./sounds/tom-2.mp3")})
//         setBackground(e ,"./images/tom2.png")
//         break; 
//         case "k": 
//         e.addEventListener("click", function ()  {  sound("./sounds/tom-3.mp3")})
//         setBackground(e ,"./images/tom3.png")
//         break; 
//         case "l": 
//         e.addEventListener("click", function ()  {  sound("./sounds/tom-4.mp3")})
//         setBackground(e ,"./images/tom4.png")
//         break; 
//     }

// })


///let buttons  = document.querySelectorAll(".drum"); 

//constructor function
// function  ButtonSound (sound, picture , e) { 
//      this.sound = sound;
//      this.picture  =picture; 
//      this.e = e; 
//      this.setBackground = function(){ 
//         e.style.setProperty("background-image", `url(${picture})`);
//         e.style.setProperty("background-size", "100% 100%");
//         e.style.setProperty("background-color",  "#fff");
//      }
//      this.setSound = function () { 
       
//         e.addEventListener("click", function() { 
//             let audio = new Audio(sound); 
//             audio.play();
//         })
//         document.addEventListener("keydown", function (event) { 
//             if(event.key.toLowerCase() === e.textContent ) { 
//                 let audio = new Audio(sound); 
//                 audio.play();
//             }
//         })
//      }
    
// }

// buttons.forEach(function (e){ 
//     let drum; 
//     switch(e.classList[0]){ 
//         case "w": 
//         drum =  new ButtonSound("./sounds/crash.mp3", "./images/crash.png",e); 
//         drum.setBackground(); 
//         drum.setSound();
        
//         break; 
//         case "a":
//         drum =  new ButtonSound("./sounds/kick-bass.mp3", "./images/kick.png",e); 
//         drum.setBackground(); 
//         drum.setSound();
//         break; 
//         case "s": 
//         drum =  new ButtonSound("./sounds/snare.mp3", "./images/snare.png",e); 
//         drum.setBackground(); 
//         drum.setSound();
//         break;
//         case "d": 
//         drum =  new ButtonSound("./sounds/tom-1.mp3", "./images/tom1.png",e); 
//         drum.setBackground(); 
//         drum.setSound();
//         break;
//         case"j": 
//         drum =  new ButtonSound("./sounds/tom-2.mp3", "./images/tom2.png",e); 
//         drum.setBackground(); 
//         drum.setSound();
//         break;
//         case "k":
//         drum =  new ButtonSound("./sounds/tom-3.mp3", "./images/tom3.png",e); 
//         drum.setBackground(); 
//         drum.setSound();
//         break; 
//         case"l": 
//         drum =  new ButtonSound("./sounds/tom-4.mp3", "./images/tom4.png",e); 
//         drum.setBackground(); 
//         drum.setSound();
//         break;
//     }
   
// })




function playSound(str ) { 
    switch(str){ 
        case "w": 
        let audio = new Audio("./sounds/crash.mp3"); 
        audio.play();
        
        break; 
        case "a":
        let audio1 = new Audio("./sounds/kick-bass.mp3"); 
        audio1.play();
        break; 
        case "s": 
        let audio2 = new Audio("./sounds/snare.mp3"); 
        audio2.play();
        break;
        case "d": 
        let audio3 = new Audio("./sounds/tom-1.mp3"); 
        audio3.play();
        break;
        case"j": 
        let audio4 = new Audio("./sounds/tom-2.mp3"); 
        audio4.play();
        break;
        case "k":
        let audio5 = new Audio("./sounds/tom-3.mp3"); 
        audio5.play();
        break; 
        case"l": 
        let audio6 = new Audio("./sounds/tom-4.mp3"); 
        audio6.play();
        break;
    }
}

let buttons  = document.querySelectorAll(".drum");  

buttons.forEach((e) => { 
   e.addEventListener("click", function(){ 
       playSound(e.textContent.toLowerCase());
       animation(e.textContent.toLowerCase())
   } ) 
})

document.addEventListener("keydown",  function(e) { 
    playSound(e.key);
    animation(e.key);
})

function animation(str) { 
     let currentButton  =  document.querySelector(`.${str}`); 
     currentButton.classList.add("pressed");
     setTimeout(function() { currentButton.classList.remove("pressed")}, 100);

}