show();
function show(active=0){
	let str = makeNavbar(active);
	console.log(str);
	document.getElementById('show').innerHTML = str;
}

function showProducts(){
	show(1) ;
}

function addProductForm(){
	show(2); 
}
function makeNavbar(active=0){
	 let str = '<nav class="navbar navbar-expand-lg navabr-light bg-light">';
        str += 	'<a href="#" class="navbar-brand text-decoration-none">Store System</a>';
        str +=  '<button class="navbar-toggler" type="button" data-toggle="collapse"data-target="#navbarNavDropDown">';
        str += 	'<span class="navbar-toggler-icon"></span>';
        str += 	'</button>';
        str +=	'<div class="collapse navbar-collapse" id="navbarNavDropdown">';
        str += 	'<ul class="navnar-nav list-inline">';
		let active1 = active===1 ? 'active' : '' ;
        let active2 = active===2 ? 'active' : '' ; 
        str +=  '<li class="nav-item '+active1+' list-inline-item">';
        str +=  '<a href="#" class="nav-link text-decoration-none" onclick="showProduct()">Show products</a>';     
        str +=  '</li>';
        str += 	'<li class="nav-item '+active2+' list-inline-item">';
        str +=  '<a href="#" class="nav-link" onclick="addProductForm()">Add a products</a>';   
        str +=	'</li>';
        str +=	'</ul>';
                
        str +=  '</div>';
        str +=	'</nav>';
        return str;
}