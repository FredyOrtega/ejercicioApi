const validador = () => {
  let claveUs = document.getElementById("usuario").value;
  let claveps = document.getElementById("contraseña").value;
  if (claveUs == "a" && claveps == "a") {
    location.href =
      "file:///C:/Users/User/Desktop/clase%20mean/ejercicioApi/consulta.html";
  } else {
   alert("Inválido, Verifique su usuario y contraseña")
  }
};

const main = async () => {
  let num = document.getElementById(`cantidad`).value;
  for (let i = 1; i <= num; i++) {
    let url = `https://rickandmortyapi.com/api/character/${i}`;


    await fetch(url)
      .then((res) => res.json())
      .then((data) => print(data))
      .catch((err) => console.log(err));
  }
};

const npers = async () => {
  let num = document.getElementById(`persn`).value;

  let url = `https://rickandmortyapi.com/api/character/${num}`;

  await fetch(url)
    .then((res) => res.json())
    .then((data) => print1(data))
    .catch((err) => console.log(err));
};


const print = (data) => {
  let num1 = document.getElementById(`cantidad`).innerHTML;
  console.log(data);
  
 
  let card = `<div class="card" style="width: 18rem;">
      <img src="${data.image}" class="card-img-top" alt="...">
      <div class="card-body">
      <h4>personaje numero: ${data.id}</h4>
      <h4>${data.name}</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>`;

  document.getElementById(`cardsContainer`).innerHTML += card;

  num1.resert();


};

const print1 = (data) => {
  let num1 = document.getElementById(`persn`).innerHTML;
  console.log(data);
  let card = `<div class="card" style="width: 18rem;">
      <img src="${data.image}" class="card-img-top" alt="...">
      <div class="card-body">
      <h4>personaje numero: ${data.id}</h4>
      <h4>${data.name}</h4>
       
      </div>
    </div>`;

  document.getElementById(`cardsContainer`).innerHTML = card;
  num1.resert();
};

function limpiar() {
  document.getElementById("cardsContainer").innerHTML = "";
}
