showForm()
function showForm(){
	let str = makeTextField('prodName','Product name','Enter the Product Name');
	str += makeTextField('price', 'Price', 'Enter the price');
	str += '<button class="btn btn-primary" onclick="submitProduct()">Submit</button>';
	document.getElementById('show').innerHTML = str;
}


function makeTextField(id, label, placeholder=''){
            let str = '<div class="form-group">';
             str +=  '<label>'+label+'</label>';
             str += '<input type="text" class="form-group" id="'+id+'" placeholder="'+placeholder+'">';
             str +=   '</div>';
             return str;
}