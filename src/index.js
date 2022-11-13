// localStorage.clear();
var mealarray;
var storage = [];
function main_page(){
	//  event listener to get the user search text;
	let str = document.getElementById("search");
	var search_string;
	str.addEventListener("input", (e) =>{
		search_string = e.target.value;

	//based on text fetch the Api;
	async function fecthMeals(){
		const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_string}`);
		if (!response.ok) {
			const message = `An error has occured: ${response.status}`;
			throw new Error(message);
		}
		var meals = await response.json();
		if(meals.meals == null){
			meals = null;
		}
		return meals;
	}
	var temp = [];
	fecthMeals().then(meals =>{
		if(meals != null){
							// console.log(meals);
							let array={};
							meals.meals.map(function(m){
								array["id"]=  m.idMeal;
								array["name"] = m.strMeal;
								array["ins"] = m.strInstructions;
								array["img"] = m.strMealThumb;
								temp.push(array);
								localStorage.setItem("storage", JSON.stringify(temp));
								array ={};
							});



							mealarray = meals.meals.map(mealname => `<div class="item row">
								<button onclick="changeColor(this); addFavs(${mealname.idMeal});" class="me-1 btn d-inline col-2 p-2">
								<i class="fa-regular fa-heart fa-2x"></i>
								</button> 
								<a href="./detail.html" onclick="detail_page(${mealname.idMeal}); colorchange(this);" class="col btn">${mealname.strMeal}</a> 
								</div>`);
							document.getElementById("res").innerHTML= mealarray; 
						}else{
				//if no results found;
				var mealarray = `<div class="item row">
				
				<a href="./detail.html" class="col btn">sry, nothing found</a> 
				</div>`;
				document.getElementById("res").innerHTML= mealarray;
			}
			
			
			
		});

	fecthMeals().catch(err => {
		err.message;
	});
});
}

main_page();



function changeColor(e){
	e.classList.add("like");
}
var storeAllFavs = [];
function addFavs(e){
	let item = JSON.parse(localStorage.getItem("storage"));
	var filteredFav = item.filter(function(ele){
		return ele.id == e;
	});
	
	storeAllFavs.push(filteredFav);
	localStorage.setItem("favItems", JSON.stringify(storeAllFavs));
}
function detail_page(id){
	localStorage.setItem("clicked",id);
};



