const products = [

    {product : 'Pepsi',price:25},
    {product : 'Dairy Milk',price:40},
    {product : 'Brade',price:20},
    {product : 'Egg',price:60},
    {product : 'Tea',price:45},
    {product : 'Coffe',price:35},
];


show();
function show(active=0){
	let str = makeNavbar(active);
    active === 1 ? str += showProducts() : str += '';
    active === 2 ? str += showForm() : str += '';
	console.log(str);
	document.getElementById('show').innerHTML = str;
}

function showProduct(){
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

function showProducts (){
    const arr = products.map(pr=>{
        let {product,price} = pr; 
        let str = '<div class="row border">';
        str += '<div class="col-8">'+product+'</div>';
        str += '<div class="col-4">'+price+'</div>';
        str += '</div>'
        return str;

    });

    let table = '<div class="row bg-dark text-white">';
    table += '<div class="col-8">product</div>';
    table += '<div class="col-4">price</div>';
    table += '</div>';
    table += arr.join('');
    return table;

}

function showForm(){
    let str = makeTextField('prodName','Product name','Enter the Product Name');
    str += makeTextField('price', 'Price', 'Enter the price');
    str += '<button class="btn btn-primary" onclick="submitProduct()">Submit</button>';
    return str;
    // document.getElementById('show').innerHTML = str;
}


function makeTextField(id, label, placeholder=''){
            let str = '<div class="form-group">';
             str +=  '<label>'+label+'</label>';
             str += '<input type="text" class="form-group" id="'+id+'" placeholder="'+placeholder+'">';
             str +=   '</div>';
             return str;
}