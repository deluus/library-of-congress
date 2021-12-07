var searchEl = document.getElementById('search-input');
var formatEl = document.getElementById('format-input');
var buttonEl = document.getElementById('search-btn');




var getSearch = function (event) {
    event.preventDefault()
    var searchTerm = searchEl.value
    var format = formatEl.value
  console.log( searchTerm)
};
buttonEl.addEventListener('click',getSearch) ;





  
    var apiUrl = ' https://www.loc.gov/'