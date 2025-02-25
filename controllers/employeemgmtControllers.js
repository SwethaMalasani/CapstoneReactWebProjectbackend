import employeesystem from '../models/employeeSchema.js';

// Create a new employee
async function createEmployee(req, res) {
  try {
    let newEmployee = new employeesystem(req.body);
    await newEmployee.save();
    res.json(newEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

// Get all employees
async function getAllEmployees(req, res) {
  try {
    let allEmployees = await employeesystem.find({});
    res.json(allEmployees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

// Get one employee by employeeId
async function getOneEmployee(req, res) {
  try {
    let oneEmployee = await employeesystem.findOne({ employeeId: req.params.id });
    if (!oneEmployee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    res.json(oneEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

// Update one employee by employeeId
async function updateOneEmployee(req, res) {
  try {
    let updatedEmployee = await employeesystem.findOneAndUpdate(
      { employeeId: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    res.json(updatedEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

// Delete one employee by employeeId
/*async function deleteOneEmployee(req, res) {
  try {
    let deletedEmployee = await employeesystem.findOneAndDelete({ employeeId: req.params.id });
    if (!deletedEmployee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    res.json({ msg: 'Employee Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}*/
async function deleteOneEmployee(req, res) {
  try {
    // Find and delete the employee by employeeId
    let deletedEmployee = await employeesystem.findOneAndDelete({ employeeId: req.params.id });

    // If no employee was found, return a 404 error
    if (!deletedEmployee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    // If deletion is successful, return a success message
    res.json({ msg: 'Employee Deleted Successfully' });
  } catch (err) {
    // Log the error and send a 500 status code if something goes wrong
    console.error('Error deleting employee:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

// Seed the database (optional)
async function seedDB(req, res) {
  try {
    await employeesystem.deleteMany({}); // Delete all records
    res.json({ msg: 'DB Seeded' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

export default {
  createEmployee,
  getAllEmployees,
  getOneEmployee,
  updateOneEmployee,
  deleteOneEmployee,
  seedDB,
};
