const formBuscar = document.getElementById('form-buscar');
const resultadoBusca = document.getElementById('resultado');
const caixaBuscar = document.getElementById('caixa-buscar');
const mostrarMais = document.getElementById('mostrar-mais');
const accessKey = "YOUR_UNSPLASH_API_KEY"

let keyword = "";
let page = 1;

async function buscarImagem(){
    keyword = caixaBuscar.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        resultadoBusca.innerHTML = "";
    }

    const results = data.results;

    results.map(result =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        resultadoBusca.appendChild(imageLink);
    })
    mostrarMais.style.display = "block";
}

formBuscar.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    buscarImagem();

})
mostrarMais.addEventListener('click', () => {
    page++;
    buscarImagem();
})