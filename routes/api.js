const express = require('express');
const controllers = require("../controllers/controllers");

const router = express.Router();

router.get('/inventory', async (req, res) => {
    try {
      const inventoryData = await controllers.getInventoryData();
      res.status(200).json(inventoryData);
    } catch (error) {
      console.error(`Error fetching inventory data: ${error}`);
      res.status(500).json('Error fetching inventory data.');
    }
  });
  router.get('/inventory/:id', async (req, res) => {
    
    try {
      const {id}= req.params;
      const inventoryById = await controllers.getInventoryDataById(id);
      
      res.status(200).json(inventoryById);
    } catch (error) {
      console.error(`Error fetching inventory data By Id: ${error}`);
      res.status(500).json('Error fetching inventory data By Id.');
    }
  });
  router.put('/inventory/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const inventoryDetails = req.body;
        await controllers.updateInventoryItem(id, inventoryDetails);
        res.status(200).json({ message: 'Inventory item updated successfully' });
    } catch (error) {
        console.error(`Error updating inventory item by ID: ${error}`);
        res.status(500).json('Error updating inventory item by ID.');
    }
});
  router.get('/staff/:id', async (req, res) => {
    const {id}= req.params;
    try {
      const staffById = await controllers.getStaffDataById(id);
      
      res.status(200).json(staffById);
    } catch (error) {
      console.error(`Error fetching saff data By Id: ${error}`);
      res.status(500).json('Error fetching staff data By Id.');
    }
  });
  router.get('/staff', async (req, res) => {
    try {
      const stockData = await controllers.getStaffData();
      res.status(200).json(stockData);
    } catch (error) {
      console.error(`Error fetching stock data: ${error}`);
      res.status(500).json('Error fetching stock data.');
    }
  });

  router.put('/staff/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const staffDetails = req.body;
        await controllers.updateStaffItem(id, staffDetails);
        res.status(200).json({ message: 'Staff info updated successfully' });
    } catch (error) {
        console.error(`Error updating inventory item by ID: ${error}`);
        res.status(500).json('Error updating inventory item by ID.');
    }
});
  
  

  module.exports=router;