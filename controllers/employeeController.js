const Employee=require("../models/employee");

const allEmployee = async (req,res)=>{

    const employee = await Employee.find()

    res.json({employee : employee})

}


const getEmployee = async (req,res)=>{

    const employeeId = req.params.id
    const employee = await Employee.findById(employeeId)
    res.json({employee : employee})
}

const createEmployee = async (req,res)=>{

    const {name,position} = req.body
    const employee = await Employee.create({
        name: name,
        position:position
    })
    res.json({employee : employee})
}

const updateEmployee = async (req,res)=>{

    const employeeId = req.params.id

    const {name,position} = req.body
    const employee = await Employee.findByIdAndUpdate(employeeId,{
        name: name,
        position:position
    })
    res.json({employee : employee})
}

const deleteEmployee = async(req, res) => {
     
    const employeeId = req.params.id
  
  await Employee.findByIdAndDelete(employeeId)
   
  res.json({success: "Record has been deleted successfully"})
}

module.exports={
    allEmployee,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}