async function  getGifs  () {
    let search = document.querySelector('#search').value;
    document.querySelector('.gifs').innerHTML = '<div class="col-12 fs-5">Carregando...</div>';
    let url = `https://tenor.googleapis.com/v2/search?q=${search}&key=AIzaSyD2c5Efc-0m53ZWlDASNypLKYRzP1WBliU&client_key=my_test_app&limit=16`;
    let json = await fetch(url);
    json = await json.json();
    
    let html = '';
    for(let i in json.results){
        html += `<div class="col-md-3 col-sm-6"><div class="d-flex justify-content-center p-3"><img class="img-fluid gif img-thumbnail" src="${json.results[i].media_formats.gif.url}" alt="${json.results[i].content_description}"></div></div>`;
    };
    
    document.querySelector('.gifs').innerHTML = html;
}

let time ;
document.querySelector('#search').addEventListener('input',()=>{
    clearTimeout(time);
    time = setTimeout(getGifs,500)
});
