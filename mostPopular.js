var fs = require("fs");

/*all items in Nelisa Sales History*/
var findFiles = function (fileName) {
   
    var productList = []; 
    var productMap = {};

        var fileContent = fs.readFileSync(fileName, 'utf8'); 
        var products = fileContent.split("\r"); 
     
    products.forEach(function (product) { 
      var hold = product.split(";");
      var prodName = hold[2];
      if(productMap[prodName] === undefined && prodName !== "stock item"){
        productList.push(prodName);
        productMap[prodName] = 0;  
      };
       
    }); 

console.log(productList)  
return productList;

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
var findMostPopular = function (fileName) {
	// body...
	var mostPopularProdct = {};
    var productsMap = {};
    var quantitySold = [];
         

    var fileContent = fs.readFileSync(fileName, "utf8");
    var products = fileContent.split("\r");
         

    products.forEach( function (product) {
          
   	var productColumns = product.split(";");
   	var productName = productColumns[2];
   	var quantity = Number(productColumns[3]);

        if (productsMap[productName] === undefined ) {
            quantitySold.push(productName);
            productsMap[productName] = 0; 
        }

       	productsMap[productName] += quantity;
       
        
    });

    
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





exports.linesInFiles = function(fileName){
   var productList = findFiles(fileName);
   return productList;
};

exports.productsSold = function(fileName){
    var productsMap = findProductsSold(fileName)
    return productsMap
};

exports.popularProducts = function(fileName){
    var mostPopularProdct = findMostPopular(fileName)
    return mostPopularProdct;
};
