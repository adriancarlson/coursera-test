(function (){
'use strict';

angular.module('ShopingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service ('ShoppingListCheckOffService', ShoppingListCheckOffService);    
    
    
ToBuyController.$inject =['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var buyList = this;
        
        buyList.items = ShoppingListCheckOffService.getToBuyitems();
        buyList.transfer = function (itemIndex){
            ShoppingListCheckOffService.transfer(itemIndex);
        }
    }

AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var boughtList = this;
        
        boughtList.items = ShoppingListCheckOffService.getboughtItems();
    }

function ShoppingListCheckOffService() {
    var service = this; 
    
    // 2 list of shopping items 
    var toBuyitems = [
        {
            name: "Tacos",
            quantity: "10"
        },
        {
            name: "Burritos",
            quantity: "5"
        },
        {
            name: "Queso",
            quantity: "3"
        },
        {
            name: "Salsa",
            quantity: "1"
        },
        {
            name: "Chips",
            quantity: "10"
        },
    ];
    
   var boughtItems = [];
    
      service.transfer = function(itemIndex){
        var temp = toBuyitems[itemIndex];
          toBuyitems.splice(itemIndex, 1);
          boughtItems.push(temp);
    };
    
    service.getToBuyitems = function (){
        return toBuyitems;
    };
    
     service.getboughtItems = function (){
        return boughtItems;
    };
    
  
};
    

   
})();

