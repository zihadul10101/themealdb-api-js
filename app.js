

const searchText = () => {
  const foodText = document.getElementById('inputValue').value;
  // console.log(foodText);
  //load data
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayFoods(data.meals))


}
const displayFoods = meal => {
  // console.log(meal)
  const foodContainer = document.getElementById('food-container');
  if (meal == null) {
    alert('Meal name wrong!')
  }
  else {
    meal.forEach(meal => {
      const foodDiv = document.createElement('div');
      foodDiv.className = 'foodName';
      foodDiv.innerHTML = `

    <div class="meal">
    <img onClick="mealDetails('${meal.idMeal}')"class="img" src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
    <div class="meal-info" data-mealID="${meal.idMeal}">
    <h3>${meal.strMeal}</h3></div>
</div>
    `;
      foodContainer.appendChild(foodDiv);

    })
  }

  //   
}

// load meals details
const mealDetails = strMeal => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strMeal}`
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => mealDetailsInfo(data.meals[0]))

}
const mealDetailsInfo = foodName => {
  console.log(foodName);
  const foodDiv = document.getElementById('foodDetils');
  foodDiv.innerHTML = `
  <div class="details">
  <h1>${foodName.strMeal}</h1>
     <p>
     <li>${foodName.strInstructions}</li>
     
     </p>
     </div>
  `
}