let btn = document.querySelectorAll(".btns")

const enviar = document.getElementById('enviar');

const avaliação = document.getElementById('textChange');
let btnSelecionado = document.getElementById('selecionado');

let avaliar = document.querySelector('.avaliar');



enviar.addEventListener('click', function (){
    let mainDiv = document.getElementById('ulRate');
    avaliar.style.display = 'flex';

    btn.forEach(mainDiv => {
        mainDiv.addEventListener('click', () => {
        mainDiv.value = btnSelecionado.innerHTML

        console.log(mainDiv.value)
        
        })
        })
})