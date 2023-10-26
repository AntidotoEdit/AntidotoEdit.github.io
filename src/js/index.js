const API_URL = 'https://antidotoeditorial-default-rtdb.firebaseio.com';

const HTMLResponse = document.querySelector("#app");
const div = document.createElement('div');


fetch(`${API_URL}/books.json`)
    .then((response) => response.json())
    .then((books) => {
        books.forEach((book) => {
            let div = document.createElement("div");
            let a = document.createElement("a");
            let img = document.createElement("img");
            let h2 = document.createElement("h2");
            let h4 = document.createElement("h4");
            let p = document.createElement("p");


            img.innerText = book.image;
            h2.innerText = book.name;
            h4.innerText = book.autor;
            p.innerText = book.precio;


            a.appendChild(img);
            a.appendChild(h2);
            a.appendChild(h4);
            a.appendChild(p);

            
            // Asigna el href al elemento <a>
            a.href = book.url;
            a.target= "_blank";

            img.src = book.image;


            div.appendChild(a);

            HTMLResponse.appendChild(div);
        });
    });
//function onRequestHandler(){
//    if(this.readyState === 4 && this.status === 200){
//        // 0 = unset, 1 = opened, 2= header_recived, 3= loading, 4=done
//        const data = JSON.parse(this.response)
//        console.log(data)
//        const HTMLResponse = document.querySelector("#app")


//        const tpl = data.map(user => `<li>${user.name} --- ${user.email} </li>`)


//        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
//    }
//}

//xhr.addEventListener('load', onRequestHandler)
//xhr.open('GET', `${API_URL}/users`);
//xhr.send();