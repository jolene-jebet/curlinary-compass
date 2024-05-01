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


// adding a submit event listener to the search form
searchForm.addEventListener('submit',(e) =>{
    //passing prevent default behaviour of form 
    e.preventDefault();
    //getting search value
    searchQuery = e.target.querySelector('input').value;
    //console.log(searchQuery);
    //calling the function that fetches the api
    fetchAPI();
});

//async function for fetching data from api
async function fetchAPI(){
    const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}`;
    //fetching the data
    const response = await fetch(baseURL);
    //converting the data to json
    const recipeData = await response.json();
    console.log(recipeData);
    //calling a function for generating html
    generateHTML(recipeData.hits);
    
}

//function for generating html
function generateHTML(results){
    //variable containing the html elements
    let generatedHTML = '';
    results.map(result => {
        generatedHTML += 
        `
        <div class="item">
            <img src="${result.recipe.image}" alt="">
            <div class="flex-container">
                <h2 class="title">${result.recipe.label}</h2>
                <a class="view-button" href="${result.recipe.url}">view recipe</a>
            </div>
            <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            <p class="item-data">Cuisine type: ${result.recipe.cuisineType}</p>
            <p class="item-data">Diet labels: ${result.recipe.dietLabels}</p>
        </div>
        `
    });
    searchResultDiv.innerHTML = generatedHTML;
}