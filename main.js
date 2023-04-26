function productos() {
  let datos = document.getElementById("search-input").value;
  console.log("Hago consulta - fetch");
  let card;
  let search = document.getElementById("search-body");
  fetch(`https://dummyjson.com/products/search?q=${datos}`)
    .then(res => res.json())
    .then(res => {
      console.log("obtuve respuesta")
      res.products.forEach(actual => {
        card = `
                <div class="card text-white bg-dark mb-3" style="width: 18rem;">
                    <img src="${actual.thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${actual.title}</h5>
                        <p class="card-text">${actual.description}</p>
                        <h5 class="card-title">Precio: $${actual.price}</h5>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${actual.id}">
                          Mas Info
                        </button>
                    </div>
                </div>
                `
        if (actual == res.products[0]) {
          search.innerHTML = card;
        }
        else {
          search.innerHTML += card;
        }

      });
    })
    .catch(err => console.error("error", err));
  console.log("Fin consulta - fetch");
  return alert("los datos cargaron correctamente");
}