const Order = require("../models/order")


const allOrder = async (req,res)=>{

    const order = await Order.find()

    res.json({order: order})

}


const getOrder = async (req,res)=>{

    const orderId = req.params.id
    const order = await Order.findById(orderId)
    res.json({order : order})
}

const createOrder = async (req,res)=>{

    const {customerName,item,price} = req.body
    const order = await Order.create({
        customerName: customerName,
        item: item,
        price: price
    })
    res.json({order : order})
}

const updateOrder = async (req,res)=>{

    const orderId = req.params.id

    const {customerName,item,price} = req.body
    const order = await Order.findByIdAndUpdate(orderId,{
        customerName: customerName,
        item: item,
        price: price
    })
    res.json({order : order})
}

const deleteOrder = async(req, res) => {
     
    const orderId = req.params.id
  
  await Order.findByIdAndDelete(orderId)
   
  res.json({success: "Record has been deleted successfully"})
}

module.exports={
    allOrder,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
}