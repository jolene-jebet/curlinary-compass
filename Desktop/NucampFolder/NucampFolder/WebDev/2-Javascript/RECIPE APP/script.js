//grabbing search form
const searchForm = document.querySelector('form');
//grabbing search result
const searchResultDiv= document.querySelector('.search-result');
//grabbing the container
const container = document.querySelector('container');
//assigning a variable to the search value
let searchQuery = '';
//assigning variables to the url,api key and api id
const APP_ID = '9c631f13';
const APP_key = 'fb2145e4d04ff16b75f64ffee3a59e93';
const baseURL = `https://api.edamam.com/api/recipes/v2?q=pizza&app_id=${APP_ID}&app_key=${APP_key}`;

// adding a submit event listener to the search form
searchForm.addEventListener('submit',(e) =>{
    //passing prevent default behaviour of form 
    e.preventDefault();
    //getting search value
    searchQuery = e.target.querySelector('input').value;
    //console.log(searchQuery);
})