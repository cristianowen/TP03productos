function productos(params) {
    console.log("Hago consulta - fetch");
    let url = "https://dummyjson.com/products/search?q=";
    let datos = document.getElementById("search-input").textContent;
    let array = datos.split(" ");
    array.forEach(actual => {
      if (actual != array[array.length - 1]) {
        url = url + actual + "+";
      }
      else {
        url = url + actual;
      }
    })
    
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log("obtuve respuesta")
        res.forEach(actual => {
          let card = `
                <div class="card" style="width: 18rem;">
                    <img src="${actual.thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${actual.title}</h5>
                        <p class="card-text">${actual.description}</p>
                        <h5 class="card-title">Precio: $${actual.price}</h5>
                        <a href="detail.html" class="btn btn-primary">Mas Info</a>
                    </div>
                </div>
                `
          document.getElementById("search-body").innerHTML = card;
        })
      })
      .catch(err => console.error("error", err));
    console.log("Fin consulta - fetch");
}