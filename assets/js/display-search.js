var searchEl = document.getElementById('search-input');
var formatEl = document.getElementById('format-input');
var buttonEl = document.getElementById('search-btn');




var getSearch = function (event) {
    event.preventDefault()
    var searchTerm = searchEl.value
    var format = formatEl.value
    console.log( searchTerm)
    var endpoint = 'https://www.loc.gov/';

    if (format){
        endpoint += format +"/";
    } else {
        endpoint += 'search/';
    }

    var query = '?q=' + searchTerm + '&fo=json';

    var apiUrl = endpoint + query;

    fetch(apiUrl)
        .then(function(response) {
            console.log(response);
        });
   
};

buttonEl.addEventListener('click', getSearch) ;