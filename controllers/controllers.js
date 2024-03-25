const { Console } = require('console');
const fs = require('fs');
const path = require('path');
require('dotenv').config();



const inventoryDataPath = path.join(__dirname, '..', 'models','inventory.json');

const staffDataPath = path.join(__dirname, '..', 'models','staff.json');
const staffData=JSON.parse(fs.readFileSync(staffDataPath));
const InventoryData=JSON.parse(fs.readFileSync(inventoryDataPath));

const getInventoryData =()=>{
    try{
        
        return InventoryData;

    }catch(e){
        console.error(" Error while reading Inventory data : $(e)" );
        return null;

    }
}

const saveInventoryData = (inventoryData) => {
    try {
        fs.writeFileSync(inventoryDataPath, JSON.stringify(inventoryData, null, 1));
    } catch (error) {
        console.error(`Error saving inventory data: ${error}`);
        throw error;
    }
};

const updateInventoryItem = (id, details) => {
    try {
        const inventoryData = getInventoryData();
        const updatedInventory = inventoryData.map(item => {
            if (item.id === parseInt(id)) {
                return { ...item, ...details };
            }
            return item;
        });

        saveInventoryData(updatedInventory);
       // return updatedInventory.find(item => item.id === parseInt(id));
    } catch (error) {
        console.error(`Error updating inventory item by ID: ${error}`);
       // throw error;
    }
};

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
const getStaffDataById=(Id)=>{
    try{
        const StaffData= getStaffData();
    
    const Item= StaffData.find(Item => Item.id===parseInt(Id));
 
    return Item;
        }catch(e){
            console.error(" Error while reading Staff data by Id : {$(e)}" );
        return null;
        }

}

const saveStaffData = (staffData) => {
    try {
        fs.writeFileSync(staffDataPath, JSON.stringify(staffData, null, 1));
    } catch (error) {
        console.error(`Error saving staff data: ${error}`);
        throw error;
    }
};

const updateStaffItem = (id, details) => {
    try {
        const staffData = getStaffData();
        const updatedStaff = staffData.map(item => {
            if (item.id === parseInt(id)) {
                return { ...item, ...details };
            }
            return item;
        });
        
        saveStaffData(updatedStaff);
       // return updatedInventory.find(item => item.id === parseInt(id));
    } catch (error) {
        console.error(`Error updating staff item by ID: ${error}`);
       // throw error;
    }
};




module.exports = {
    getInventoryData,
    getStaffData,
    getInventoryDataById,
    getStaffDataById,
    updateInventoryItem,
    updateStaffItem
  };
