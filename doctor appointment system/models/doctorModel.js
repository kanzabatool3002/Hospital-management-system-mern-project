const mongoose = require('mongoose')
const doctorSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    firstName: {
        type: String,
        required: [true, "first name is requires"],
    },
    lastName: {
        type: String,
        required: [true, "last name is requires"],
    },
    Phone: {
        type: String,
        required: [true, "phone number is requires"],
    },
    email: {
        type: String,
        required: [true, "email is requires"],
    },
    address: {
        type: String,
        required: [true, "address is requires"],
    },
    website: {
        type: String,
    },
    specialization: {
        type: String,
        required: [true, "specialization is requires"],
    },
    experience: {
        type: String,
        required: [true, "experience is requires"],
    },
    feesPerCunsaltation: {
        type: Number,
        required: [true, "fee is requires"],
    },
    status: {
        type: String,
        default: 'pending',
    },
    timings: {
        type: Object,
        required: [true, "work timing is requires"],
    },

}, { timestamps: true });

const doctorModel = mongoose.model('doctors', doctorSchema);
module.exports = doctorModel
