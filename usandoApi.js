
var url = 'https://swapi.co/api/people/';
var xhttp = new XMLHttpRequest();
var div = document.getElementById('personajes');

xhttp.onreadystatechange = function() {
    console.log(this.readyState + " - " + this.status);
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(xhttp.responseText);
        processData(apiResult.results);
    }
}

var apiConnect = function(xhttp, url) {
    xhttp.open('GET', url, true);
    xhttp.send();
}

var processData = function(data) {
    console.log(data);
    var i = 0;
    var that = this;
    data.forEach(element => {
        var ul = that.createUnorderedList(element.name);
        that.agregarPeliculasAlista(ul, element.films);
        that.div.appendChild(ul);
        i++;
    });
}

/**
 * Crea Lista desordenada y la retorna.
 */
var createUnorderedList = function(name) {
    var ul = document.createElement('ul');
    ul.appendChild(document.createTextNode(name));
    return ul;
}

/**
 * Recorre lista de peliculas y las agrega a ul
 */
var agregarPeliculasAlista = function(ul, peliculas) {
    var that = this;
    peliculas.forEach(element => {
        var numeroPelicula = that.obtieneNumeroPelicula(element);
        ul.appendChild(that.createListItem(numeroPelicula));
    });
}

/**
 * Devuelve numero de pelicula pasando url.
 */
var obtieneNumeroPelicula = function(urlPelicula) {
    return urlPelicula.substring(
        (urlPelicula.length - 2), 
        (urlPelicula.length - 1));
}

/**
 * Crea item de lista y lo retorna
 */
var createListItem = function(pelicula) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(pelicula));
    return item;
}

apiConnect(this.xhttp, this.url);

