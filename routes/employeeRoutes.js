import express from 'express';
import employeeCTRL from '../controllers/employeemgmtControllers.js';


const router = express.Router();

// Create/ReadALl
router
  .route('/')
  .post(employeeCTRL.createEmployee)
  .get(employeeCTRL.getAllEmployees);

// Update/Delete
router
  .route('/:id')
  .put(employeeCTRL.updateOneEmployee)
  .delete(employeeCTRL.deleteOneEmployee)
  .get(employeeCTRL.getOneEmployee);



export default router;
