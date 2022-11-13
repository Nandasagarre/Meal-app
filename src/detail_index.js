//self calling function
//checks for the id clicked by user in the meals stored in local storage
function detailed_js(){
	let id = localStorage.getItem("clicked");

	let stored_items = JSON.parse(localStorage.storage);

	let display_meal = [];
	for(let i = 0; i < stored_items.length; i++){
		
		if(stored_items[i].id == id){
			display_meal.push(stored_items[i]);

		}
	}

//displaying the name, img and instructions in detail holder
	// console.log(display_meal[0].name, display_meal[0].img, display_meal[0].ins);
	let meal_name = document.getElementById('meal_name');
	console.log(meal_name);
	meal_name.innerText=display_meal[0].name;

	let meal_instruction = document.getElementById('meal_instruction');
	meal_instruction.innerText=display_meal[0].ins;

	let src = display_meal[0].img;
	let imgTag = document.getElementById("img");
	imgTag.setAttribute("src", src);
	

} detailed_js();