
function fav_button_clicked(e){
	e.classList.toggle("like");
}

let r = JSON.parse(localStorage.getItem("favItems"));

let mapped = r.map(e => 
	 // console.log(e);
	 `<div class="item row">
	 <button onclick="fav_button_clicked(this); deleteId(${e[0].id})" class="me-1 btn d-inline col-2 p-2">
	 <i class="fa-solid fa-trash-can fa-2x"></i>
	 </button> 
	 <a href="./detail.html" onclick="detail_page(${e[0].id});" class="col btn">${e[0].name}</a> 
	 </div>`
	 );

document.getElementById("favs").innerHTML=mapped;


function detail_page(id){
	localStorage.setItem("clicked",id);
};


function deleteId(id){
	let item = JSON.parse(localStorage.getItem("favItems"));
	let newFav = item.filter(function(ele){
		// let check = ele[0];
		// console.log(check, id);
		return ele[0].id != id;
	});
	
	console.log(newFav);
	localStorage.setItem("favItems", JSON.stringify(newFav));
	location.reload();
}	