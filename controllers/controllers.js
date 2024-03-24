const fs = require('fs');
const path = require('path');

const inventoryDataPath = path.join(__dirname, '..', 'models','inventory.json');

const staffDataPath = path.join(__dirname, '..', 'models','staff.json');

const getInventoryData =()=>{
    try{
        
        return JSON.parse(fs.readFileSync(inventoryDataPath));

    }catch(e){
        console.error(" Error while reading Inventory data : $(e)" );
        return null;

    }
}
const getInventoryDataById=(Id)=>{
    try{
        const InventoryData= getInventoryData();
     //   console.log(InventoryData);
    const Item= InventoryData.find(Item => Item.id===parseInt(Id));
   // console.log(Item);
    return Item;
        }catch(e){
            console.error(" Error while reading Inventory data by Id : $(e)" );
        return null;
        }

}
const getStaffData =()=>{
    try{
        
        return JSON.parse( fs.readFileSync(staffDataPath));

    }catch(e){
        console.error(" Error while reading Staff data : $(e)" );
        return null;

    }
}


module.exports = {
    getInventoryData,
    getStaffData,
    getInventoryDataById
  };
