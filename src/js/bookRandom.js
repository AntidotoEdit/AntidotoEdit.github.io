const API_URL = "https://antidotoeditorial-default-rtdb.firebaseio.com/";
const HTMLResponse = document.querySelector("#resultGo");
let numeroDeElementos;
const goButton = document.getElementById('go');
const resultGo = document.getElementById('resultGo');


function resultGenerate(numberRandom) {
    fetch(`${API_URL}books.json`)
    .then((response) => response.json())
    .then((books) => {
        const bookToPrint = books[numberRandom];
        let a = document.createElement("a");
        let img = document.createElement("img");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");

        img.src = bookToPrint.image;
        h2.innerText = bookToPrint.name;
        h3.innerText = bookToPrint.autor;
        
        a.appendChild(img);
        a.appendChild(h2);
        a.appendChild(h3);
        
        a.href = bookToPrint.url;
        a.target= "_blank";

        img.src = bookToPrint.image;

        HTMLResponse.appendChild(a);

    });

}
function cambiaStyles(){
    resultGo.classList.remove("resultGo-desactive")
    resultGo.classList.add("resultGo-active");
    goButton.classList.add("button-active");

    
}

document.addEventListener('DOMContentLoaded', function(){
    goButton.addEventListener('click', () => {
        console.log("me diste click")
        fetch(`${API_URL}books.json`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          numeroDeElementos = Object.keys(data).length;
          console.log("Número de elementos en la API: " + numeroDeElementos);
      
          numberRandom = Math.floor(Math.random() * numeroDeElementos);
          resultGenerate(numberRandom);
          console.log(numberRandom);
          cambiaStyles();

        })
    });


})