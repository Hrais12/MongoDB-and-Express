const Inventory = require("../models/inventory")

const allInventory = async (req,res)=>{

    const inventory = await Inventory.find()

    res.json({inventory: inventory})

}


const getInventory = async (req,res)=>{

    const inventoryId = req.params.id
    const inventory = await Inventory.findById(inventoryId)
    res.json({inventory : inventory})
}

const createInventory = async (req,res)=>{

    const {name,category,quantity} = req.body
    const inventory = await Inventory.create({
        name : name,
        category : category,
        quantity : quantity
    })
    res.json({inventory : inventory})
}

const updateInventory = async (req,res)=>{

    const inventoryId = req.params.id

    const {name,category,quantity} = req.body
    const inventory = await Inventory.findByIdAndUpdate(inventoryId,{
        name : name,
        category : category,
        quantity : quantity
    },{new:true})
    res.json({inventory : inventory})
}

const deleteInventory = async(req, res) => {
     
    const inventoryId = req.params.id
  
  await Inventory.findByIdAndDelete(inventoryId)
   
  res.json({success: "Record has been deleted successfully"})
}

module.exports={
    allInventory,
    getInventory,
    createInventory,
    updateInventory,
    deleteInventory
}