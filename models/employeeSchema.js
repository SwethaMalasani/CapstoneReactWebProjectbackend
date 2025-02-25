import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },
  employeeName:{type:String,required:true},
  location: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
});

employeeSchema.index({ employeeId: 1 });

export default mongoose.model('employeesystem', employeeSchema);
