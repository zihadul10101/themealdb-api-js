const search = document.getElementById("suarch");
const submit = document.getElementById("submit");
const mealsEl = document.getElementById("meals");
const resultHeading = document.getElementById("result-heading");
const singleMeal = document.getElementById("single-meal");



submit.addEventListener("click", function () {
    resultHeading.innerHTML = "";

    const term = document.getElementById("Search").value;
    console.log(term);
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                resultHeading.innerHTML = `<h2>Search results for '${term}': <h2>`
                if (data === null) {
                    resultHeading.innerHTML = `
<p>There are no search results.Try again!</p>
`   } else {
                    mealsEl.innerHTML = data.meals
                        .map(
                            (meal) => `
<div class="meal">
<img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
<div class="meal-info" data-mealID="${meal.idMeal}">
<h3>${meal.strMeal}</h3></div>
`)
                        .json("");
                }
            });
        const valuen = document.getElementById("Search").value = "";
        console.log(valuen);
    }
    else {
        alert("Please enter a search term");
    }
});