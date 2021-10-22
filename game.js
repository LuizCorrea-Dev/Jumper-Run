const character = document.getElementById("character")
const fireball = document.getElementById("fireball")
const game = document.querySelector('.barTexts');
const heartBar = document.createElement('div')
const heart1 = document.getElementById("heart1")
const heart2 = document.getElementById("heart2")
const heart3 = document.getElementById("heart3")
const heart4 = document.getElementById("heart4")
const heart5 = document.getElementById("heart5")
const heart6 = document.getElementById("heart6")
const heart7 = document.getElementById("heart7")
const heart8 = document.getElementById("heart8")
const heart9 = document.getElementById("heart9")
const heart10 = document.getElementById("heart10")

var timer = setInterval(function() {
    var audio = new Audio('music.mp3')
    audio.play()
}, 44995)
var audio = new Audio('music.mp3')
audio.play()



var counter = 0
let isJumping = false
let isGameOver = false
let score = 0 //atingido!
let countScore = 0
let countHeart = 0
let atingido = 0
let checkCoracao = 10

var coracao = 10

if(localStorage.getItem("hank") > 0) {
    document.getElementById("recordSpan").innerHTML = localStorage.getItem("hank")
    console.log("com  score salvo")
}else{   
    localStorage.setItem("hank", 0);
    console.log("sem score salvo")
}



// captura de clique no teclado
function handleKeyUp(event) { 
    if (event.keyCode === 32) {
        isJumping = true
        console.log("pulou!")
        jump()      
    } 
}


function jump() {
    if (character.classList == "animate") {    
        return  
    }
    character.classList.add("animate")
    setTimeout(function () {
         character.classList.remove("animate")
    }, 500)
}


var checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    let fireballLeft = parseInt(window.getComputedStyle(fireball).getPropertyValue("left"))

    if ( fireballLeft < 100 && characterTop <=90) {
       fireball.style.animation = "none"           
        counter++
        console.log(`Escapou! ${counter}`) 
        
       
       
        document.getElementById("recordSpan").innerHTML = counter     
     
        fireball.style.animation = "fireball 1s infinite linear";
    }


    // atingido
    if (fireballLeft > 122 && fireballLeft < 130 && characterTop >=90) {
        counter--
       score = score - 1 
     

       console.log(`atingido! ${score} | pontos ${counter}`)
       controlHeart () 

    }
    if(counter < 0) {
        document.getElementById("scoreSpan").style.color="red"  
    } else {
        document.getElementById("scoreSpan").style.color="yellow"  
    }
    document.getElementById("scoreSpan").innerHTML = counter
}, 10)


function controlHeart () {

    console.log(score)
    if(score < 0) {
        Math.abs(score)  
    } 

    if(score%2 == 0){         
        coracao = coracao - 1
        console.log(`perdendo coração ${coracao}`)

        /** função de escutar mudança na variável */
        x = {
            aInternal: 10,
            aListener: function(val) {},
            set a(val) {
              this.aInternal = val;
              this.aListener(val);
            },
            get a() {
              return this.aInternal;
            },
            registerListener: function(listener) {
              this.aListener = listener;
            }
        }
        // registrar um ouvinte
        x.registerListener(function(val) {
            console.log("deu certo " + val);

            // tirando coração
            if(val == 9) { heart1.style.display = 'none';}
            if(val == 8) { heart2.style.display = 'none';}
            if(val == 7) { heart3.style.display = 'none';}
            if(val == 6) { heart4.style.display = 'none';}
            if(val == 5) { heart5.style.display = 'none';}
            if(val == 4) { heart6.style.display = 'none';}
            if(val == 3) { heart7.style.display = 'none';}
            if(val == 2) { heart8.style.display = 'none';}
            if(val == 1) { heart9.style.display = 'none';}
            if(val <= 0) { heart10.style.display = 'none';}

      

        });
        // se algo alterar o valor de
        x.a = coracao;

    }

    if(coracao == 0) {
        const result = counter  
       // if(localStorage.getItem("hank") < result) {
            localStorage.setItem("hank", result);
       //  } 

        setTimeout(function() {
        window.location.href = "/#Modal";
        }, 1000);

   
    }   
     
}

function heartAdd() { 
    var innerDiv = document.createElement('div')
    innerDiv.className = 'heart'
    heartBar.appendChild(innerDiv)        
}
function heartRemove() {   
   var innerDiv = document.createElement('div')
   innerDiv.className = 'heart'
   heartBar.removeChild(innerDiv)        
}
function modalShow() {

}
 

function volta(){
    window.location.reload();
    window.history.back()
    coracao = 10
    score = 0
    heart1.style.display = 'block'
    heart2.style.display = 'block'
    heart3.style.display = 'block'
    heart4.style.display = 'block'
    heart5.style.display = 'block'
    heart6.style.display = 'block'
    heart7.style.display = 'block'
    heart8.style.display = 'block'
    heart9.style.display = 'block'
    heart10.style.display = 'block'
}

 

document.addEventListener('keyup', handleKeyUp) 