

const searchText = () => {
    const foodText = document.getElementById('inputValue').value;
   // console.log(foodText);
       const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodText}` 
       fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))


}
const displayFoods = meal => {
 // console.log(meal)
   const foodContainer=document.getElementById('food-container');

  meal.forEach(meal=>{
     const foodDiv=document.createElement('div');
     foodDiv.className='foodName';
     foodDiv.innerHTML=`

     <div class="meal">
     <img onClick="foodDetails('${meal.strMeal}')"class="img" src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
     <div class="meal-info" data-mealID="${meal.idMeal}">
     <h3>${meal.strMeal}</h3></div>
</div>
     `;
 foodContainer.appendChild(foodDiv);

  })
//   
}

const foodDetails=strMeal=>{
   const url=`https://www.themealdb.com/api/json/v1/1/list.php?c=${strMeal}`
  // console.log(url);
  fetch(url)
   .then(res=>res.json())
    .then(data=>console.log(data[0].meals))
   
}