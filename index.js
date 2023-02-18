const plantas = [
    {
        "id": 1,
        "name": "Euphorbia eritrea",
        "sun": "high",
        "water": "rarely",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/euphorbia-eritrea.png",
        "price": 25,
        "toxicity": "false"
    },
    {
        "id": 2,
        "name": "Succulent Bowl",
        "sun": "high",
        "water": "rarely",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/succulent-bowl.png",
        "price": 30,
        "toxicity": "false"
    },
    {
        "id": 3,
        "name": "Bunny ears cacti",
        "sun": "high",
        "water": "rarely",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/bunny-ears-cacti.png",
        "price": 20,
        "toxicity": "false"
    },
    {
        "id": 4,
        "name": "Ficus lyrata",
        "sun": "high",
        "water": "regularly",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/ficus-lyrata.png",
        "price": 30,
        "toxicity": "false"
    },
    {
        "id": 5,
        "name": "Bamboo",
        "sun": "low",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/lucky-bamboo.png",
        "water": "regularly",
        "price": 15,
        "toxicity": "false"
    },
    {
        "id": 6,
        "name": "Ponytail Palm",
        "sun": "low",
        "water": "regularly",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/ponytail-palm.png",
        "price": 50,
        "toxicity": "false"
    },
    {
        "id": 7,
        "name": "Pilea peperomioides",
        "sun": "no",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/pilea-peperomioides.png",
        "water": "regularly",
        "price": 50,
        "toxicity": "true"
    },
    {
        "id": 8,
        "name": "Calathea triostar",
        "sun": "no",
        "water": "daily",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/calathea-triostar.png",
        "price": "50",
        "toxicity": "true"
    },
    {
        "id": 9,
        "name": "Monstera deliciosa",
        "sun": "no",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/monstera-deliciosa.png",
        "water": "daily",
        "price": "50",
        "toxicity": "true"
    }
]

function filtrarPlantas(sun, water, toxicity) {
  return plantas.filter(planta => {
    return planta.sun === sun && planta.water === water && planta.toxicity === toxicity;
  });
}

function exibirResultado(resultado) {
  const container = document.getElementById('resultado');
  container.innerHTML = '';

  if (resultado.length === 0) {
    const noResultsElement = document.createElement('div');
    noResultsElement.innerHTML = `<div class="no-results-container"><div class="no-product">No results yet…</div> <div class="no-result-image-container"><img class="no-result" src="images/illustrations/no-results.png"/></div></div><p class="no-product-p">Use the filters above to find the plant that best fits your environment :)</p>`;
    container.appendChild(noResultsElement);
} else {
  
  resultado.forEach(planta => {
    const elemento = document.createElement('div');
    elemento.innerHTML = `<div class="picks-container"><img class="pick" src="images/illustrations/pick.png"/></br><div class="our-picks">Our picks for you</div></div><div class="card-container"><div class="card-products"><img class="img-roduct" src="${planta.url}">` + `<div class="product-name">${planta.name}</div>` + `<div class="product-name">$${planta.price}</div></div></div>` ;
    container.appendChild(elemento);
  });                                                                                 
}
}
const sunSelect = document.getElementById('sun');
const waterSelect = document.getElementById('water');
const toxicitySelect = document.getElementById('toxicity');

sunSelect.addEventListener('change', filtrarEExibir);
waterSelect.addEventListener('change', filtrarEExibir);
toxicitySelect.addEventListener('change', filtrarEExibir);

function filtrarEExibir() {
    const sunValue = sunSelect.value;
    const waterValue = waterSelect.value;
    const toxicityValue = toxicitySelect.value;
    
    const resultado = filtrarPlantas(sunValue, waterValue, toxicityValue);
    exibirResultado(resultado);
  }
  