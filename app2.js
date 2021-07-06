fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
.then(res => res.json())
.then(data => displayMeal(data));

const displayMeal = meals =>{
   
        const abbe = meals.meals;

        meals.meals.forEach(meal => {
            const mealsDiv = document.getElementById('meal');
            const mealDiv = document.createElement("div");
            
            const mealInfo = `
            <h1> ${meal.strMeal} </h1>
            <img src="${meal.strMealThumb}" alt=""> </img>
            `
            mealDiv.innerHTML = mealInfo; 
            mealsDiv.appendChild(mealDiv);

            
        });   
}

