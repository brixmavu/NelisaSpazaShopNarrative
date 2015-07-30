var fs = require("fs");

/*all items in Nelisa Sales History*/
exports.linesInFiles = function (fileName) {

	var productMap = findProductsSold(fileName);
	return Object.keys(productMap);

}

/*all files and the number of products sold*/
var findProductsSold = function ( fileName) {
    var productNames= [];
    var productsMap = {};
    var quantitySold = [];     

    var fileContent = fs.readFileSync(fileName, "utf8");
    var products = fileContent.split("\r");
         
    // remove the first line from the list
    products = products.splice(1);

    products.forEach( function (product) {
          
   		var productColumns = product.split(";");
   		var productName = productColumns[2];
   		var quantity = Number(productColumns[3]);

   		if (productName === ""){
   			return;
   		}

      	if (productsMap[productName] === undefined ) {
        	quantitySold.push(productName);
        	productsMap[productName] = 0;   
      	}

      productsMap[productName] += quantity;
    
    });
          
	console.log(productsMap);
	return productsMap;
};


/*most popular product sold*/
exports.popularProducts = function (fileName) {
	// body...
	var productsMap = findProductsSold(fileName);

	var mostPopularProdct = {};
    
    var max = 0;
    for(var prop in productsMap) {
        var value = productsMap[prop];

        if(productsMap[prop] > max) {
            max = productsMap[prop];
          mostPopularProdct = {
                prodName: prop,
                    amount: max
            }
       }
    } 
    console.log(mostPopularProdct);
    return mostPopularProdct;
}

exports.productsSold = findProductsSold;
