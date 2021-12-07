var searchEl = document.getElementById('search-input');
var formatEl = document.getElementById('format-input');
var buttonEl = document.getElementById('search-btn');




var getSearch = function (event) {
    event.preventDefault()
    var searchTerm = searchEl.value
    var format = formatEl.value
    console.log( searchTerm)
    var endpoint;

    if(format){
        endpoint=format +"/";
    }
   
};
buttonEl.addEventListener('click',getSearch) ;

fetch(apiUrl){

 }



  
    var apiUrl = ' https://www.loc.gov/' + endpoint + searchTerm + 'fo=json';