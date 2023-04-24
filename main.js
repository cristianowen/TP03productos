function productos() {
    let datos = document.getElementById("search-input").value;
    console.log("Hago consulta - fetch");
    let card;
    let search = document.getElementById("search-body");
    fetch(`https://dummyjson.com/products/search?q=${datos}`)
      .then(res => res.json())
      .then(res => {
        console.log("obtuve respuesta")
        search.innerHTML = card;
        res.products.forEach(actual => {
          card = `
                <div class="card" style="width: 18rem;">
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
                <!-------------------------- Modal -------------------------->
                <div class="modal fade" id="exampleModal${actual.id}  " tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        ${actual.description}
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                `
          search.innerHTML += card;
        });
      })
      .catch(err => console.error("error", err));
    console.log("Fin consulta - fetch");
    return alert("los datos cargaron correctamente");
}