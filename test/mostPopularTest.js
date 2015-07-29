var assert = require("assert");

var products = require("../mostPopular");
describe("Find data in file:", function(){
    

    it("should return a unique list of products in an array", function(){
        
        var productList = products.linesInFiles('./Nelisa Sales History.csv')
        var expectedProducts = ["Milk 1l","Imasi","Bread","Chakalaka Can","Gold Dish Vegetable Curry Can","Fanta 500ml","Coke 500ml","Cream Soda 500ml","Iwisa Pap 5kg","Top Class Soy Mince","Shampoo 1 litre","Soap Bar","Bananas - loose","Apples - loose","Mixed Sweets 5s","Heart Chocolates","Rose (plastic)","Valentine Cards"];
        assert.deepEqual(expectedProducts, productList);
        
    });
    
    it("it should return the number of items sold: name and quantity ", function(){

        var productNames = products.productsSold("./Nelisa Sales History.csv");
        var expectedMap =  {'Milk 1l':142, 'Imasi':125, 'Bread': 130, 'Chakalaka Can':94, 'Gold Dish Vegetable Curry Can':86, 'Fanta 500ml':94, 'Coke 500ml':159, 'Cream Soda 500ml':75, 'Iwisa Pap 5kg':47, 'Top Class Soy Mince':98, 'Shampoo 1 litre':26, 'Soap Bar':50, 'Bananas - loose':114, 'Apples - loose':114, 'Mixed Sweets 5s':172, 'Heart Chocolates':20, 'Rose (plastic)':14, 'Valentine Cards':14};
        assert.deepEqual(expectedMap,productNames);    
            
        
        }); 


 it('should return the Most Popular Product', function(){

        var popularProducts = products.popularProducts("./Nelisa Sales History.csv");
        assert.deepEqual({prodName:'Mixed Sweets 5s', amount:172},popularProducts);
    });

 });                            

