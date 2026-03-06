function abrirCarta(){
    document.getElementById("carta").style.display="block";

    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
    });
}

function criarCoracao(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=Math.random()*20+10+"px";

    heart.style.animationDuration=Math.random()*3+3+"s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(criarCoracao,300);


function atualizarTempo(){

    const inicio=new Date("2023-06-10"); // COLOQUE A DATA QUE VOCÊS COMEÇARAM

    const agora=new Date();

    const diff=agora-inicio;

    const dias=Math.floor(diff/(1000*60*60*24));

    document.getElementById("tempo").innerHTML=dias+" dias juntos ❤️";

}

setInterval(atualizarTempo,1000);