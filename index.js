var dict = {};
	dict["af1"] = 150;
	dict["converse"] = 100;
	dict["af1-high"] = 180;

var dict2 = {};
	dict2["af1"] = 0;
	dict2["converse"] = 0;
	dict2["af1-high"] = 0;

function addItem(model) {
	if(model != "gol") {
		qty = parseInt(document.getElementById(model + '-qty').value);
		dict2[model] += dict[document.getElementById(model).id] * qty;
	}
	else
	{
		total = 0;
		for (var key in dict2) {
			if (dict2.hasOwnProperty(key))
				total += dict2[key]
		}
		return total;
	}
}

function showTotal() {
	total = addItem("gol");
	console.log(total);
	showCart();
	//return total;
}

function showCart() {
	 cartdata = '<table id = "tab"><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';
	 
	 total = 0;
	 
	 for (var key in dict2) {
		 if (dict2.hasOwnProperty(key)) {
			 if(dict2[key] != 0) {
				total += dict2[key];
				cartdata += "<tr><td>" + key + "</td><td>" + (dict2[key] / dict[key]) + "</td><td>" + dict[key] + "</td><td>" + dict2[key] + "</td></tr>";
			 }
		 }
	 }
	 cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>';
		document.getElementById('abc').innerHTML = cartdata;
}