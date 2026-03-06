/* SLIDES DAS FOTOS */

let slides = document.querySelectorAll(".slide");
let index = 0;

function trocarFoto(){

    if(slides.length === 0) return;

    slides[index].classList.remove("active");

    index++;

    if(index >= slides.length){
        index = 0;
    }

    slides[index].classList.add("active");

}

setInterval(trocarFoto,3000);



/* CORAÇÕES */

function criarCoracao(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(Math.random()*3+2)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);

}

setInterval(criarCoracao,300);



/* MUSICA AUTOMATICA */

window.addEventListener("load",function(){

    const musica=document.getElementById("musica");

    if(musica){

        musica.play();

        setTimeout(()=>{
            musica.muted=false;
        },1000);

    }

});