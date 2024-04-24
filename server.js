require('dotenv').config()

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connectToDb = require ('./config/connectToDb.js');

const cors = require('cors');



const Inventory=require("./models/inventory");
const inventoryController = require("./controllers/inventoryController.js");
const Order=require("./models/order");
const orderController = require("./controllers/orderController.js");
const Employee=require("./models/employee");
const employeeController = require("./controllers/employeeController.js");


connectToDb()
app.use(express.json())
app.use(cors());


// Employee CRUD routes
app.get("/employee", employeeController.allEmployee);

app.get("/employee/:id", employeeController.getEmployee);

app.post("/employee", employeeController.createEmployee);

app.put("/employee/:id", employeeController.updateEmployee);

app.delete("/employee/:id", employeeController.deleteEmployee);

// Inventory CRUD routes
app.get("/inventory", inventoryController.allInventory);

app.get("/inventory/:id", inventoryController.getInventory);

app.post("/inventory", inventoryController.createInventory);

app.put("/inventory/:id", inventoryController.updateInventory);

app.delete("/inventory/:id", inventoryController.deleteInventory);

// Order CRUD routes
app.get("/order", orderController.allOrder);

app.get("/order/:id", orderController.getOrder);

app.post("/order", orderController.createOrder);

app.put("/order/:id", orderController.updateOrder);

app.delete("/order/:id", orderController.deleteOrder);


app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
  });