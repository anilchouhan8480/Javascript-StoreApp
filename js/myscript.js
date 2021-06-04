const products = [

	{product : 'Pepsi',price:25},
	{product : 'Dairy Milk',price:40},
	{product : 'Brade',price:20},
	{product : 'Egg',price:60},
	{product : 'Tea',price:45},
	{product : 'Coffe',price:35},
];

show();
function show(){
	let html = showProducts();
	console.log(html)
	document.getElementById('show').innerHTML = html;
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