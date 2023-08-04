const teclas = document.querySelectorAll('.conteiner,.teclas,.negritas');
 teclas.forEach(teclas =>{
    teclas.addEventListener("click",() => playTune())
    console.log(teclas.dataset.teclas);
 })