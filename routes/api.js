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
  router.get('/staff', async (req, res) => {
    try {
      const stockData = await controllers.getStaffData();
      res.status(200).json(stockData);
    } catch (error) {
      console.error(`Error fetching stock data: ${error}`);
      res.status(500).json('Error fetching stock data.');
    }
  });

  module.exports=router;