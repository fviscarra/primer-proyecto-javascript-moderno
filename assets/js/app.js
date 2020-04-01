// variables 
const listaTweets = document.querySelector('#lista-tweets');




// Event Listener
function eventListener() {
document.querySelector('#formulario').addEventListener('submit', AgregarTweet);

listaTweets.addEventListener('click', borrarTweet);
// contenidos cargados 
document.addEventListener('DOMContentLoaded', localStorageListo);
}



eventListener();


// Funciones
function AgregarTweet(e) {
 e.preventDefault();
 const tweet = document.getElementById('tweet').value;
// crear boton de agregar 
const botonBorrar = document.createElement('a');
botonBorrar.classList = 'borrar-tweet';
botonBorrar.innerText = 'X';
 // la constante li sera el listado de tweets que vamos a ir agregando a travez del valor de imput
 const li = document.createElement('li');
 li.innerText = tweet;
 // añandimos el boton borrar a la lista de tweets que se crean de forma dinamica
 li.appendChild(botonBorrar);
 //añade el tweet a la lista de tweet
 listaTweets.appendChild(li);
 //vamos a agregar el contenido del twees al local storage
 agregarTweetAlLocalStorage(tweet);
}
// borrar tweet del dom
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet' ) {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}
function localStorageListo() {
    let tweets;
    tweets = obtenerTweetDelLocalStoreage();
    tweets.forEach(function(tweet) {
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';
         // la constante li sera el listado de tweets que vamos a ir agregando a travez del valor de imput
         const li = document.createElement('li');
         li.innerText = tweet;
         // añandimos el boton borrar a la lista de tweets que se crean de forma dinamica
         li.appendChild(botonBorrar);
         //añade el tweet a la lista de tweet
         listaTweets.appendChild(li);    
    });
}
// Agregar el tweet al local storage

function agregarTweetAlLocalStorage(tweet) {
  // agregaremos una variale tweets para leer todos los tweets que tengamos
  let tweets;

  tweets = obtenerTweetDelLocalStoreage();

  tweets.push(tweet);

  localStorage.setItem('tweets', JSON.stringify(tweets) );
}
function obtenerTweetDelLocalStoreage() {
    let tweets;
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
        return tweets;
}

function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;
    tweetBorrar = tweet.substring(0, tweet.length -1)

    tweets = obtenerTweetDelLocalStoreage();
    tweets.forEach(function(tweet, index) {
        if(tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });
        localStorage.setItem('tweets', JSON.stringify(tweets) );
}

