// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
// .then(res => res.json())
// .then(data => console.log(data.meals[0].strMeal));


function displaySearchName (){
    const search = document.getElementById('search').value;
    console.log(search);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
.then(res => res.json())
.then(data => {
    console.log(data.meals[0].strMeal);

    for (let i = 0; i < data.meals.length; i++) {
        if(search == data.meals[i].strMeal)
        {
           const mealsDiv = document.getElementById('meal');
            const mealDiv = document.createElement("div");

            const mealInfo = `
        <h1> ${data.meals[i].strMeal} </h1>
        <img src="${data.meals[i].strMealThumb}" alt=""> </img>
        `
        mealDiv.innerHTML = mealInfo; 
        mealsDiv.appendChild(mealDiv);

        }
        else{
            console.log('sorry');
        }
        
    }
});

       
//     //     for (let i = 0; i < abbe.length; i++) {
//     //          if(search == abbe[i].strMeal)
//     //          {
//     //             const mealsDiv = document.getElementById('meal');
//     //              const mealDiv = document.createElement("div");
     
//     //              const mealInfo = `
//     //          <h1> ${abbe[i].strMeal} </h1>
//     //          <img src="${abbe[i].strMealThumb}" alt=""> </img>
//     //          `
//     //          mealDiv.innerHTML = mealInfo; 
//     //          mealsDiv.appendChild(mealDiv);
     
//     //          }
//     //          else{
//     //              console.log('sorry');
//     //          }
             
//     //      }
         
//     // return search;
}

// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
// .then(res => res.json())
// .then(data => console.log(data));

// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
// .then(res => res.json())
// .then(data => displayMeal(data));


const submit = document.getElementById('submit');
const mealEl = document.getElementById('meals');



function searchMeal(e){
    e.preventDefault();
}


submit.addEventListener('submit', searchMeal);

// console.log(search.Value);

// const displayMeal = meals =>{
   
//     const abbe = meals.meals;

//         console.log(abbe[0].strMeal)
//         var mealName = displaySearchName();
//         for (let i = 0; i < abbe.length; i++) {
//              if(mealName == abbe[i].strMeal)
//              {
//                 const mealsDiv = document.getElementById('meal');
//                  const mealDiv = document.createElement("div");
     
//                  const mealInfo = `
//              <h1> ${abbe[i].strMeal} </h1>
//              <img src="${abbe[i].strMealThumb}" alt=""> </img>
//              `
//              mealDiv.innerHTML = mealInfo; 
//              mealsDiv.appendChild(mealDiv);
     
//              }
//              else{
//                  console.log('sorry');
//              }
             
//          }
         
     
        // abbe.forEach(food => {
        
        
        // const mealInfo = `
        // <h1> ${food.strMeal} </h1>
        // <img src="${food.strMealThumb}" alt=""> </img>
        // `
        // mealDiv.innerHTML = mealInfo; 
        // mealsDiv.appendChild(mealDiv);
        // });

// }
