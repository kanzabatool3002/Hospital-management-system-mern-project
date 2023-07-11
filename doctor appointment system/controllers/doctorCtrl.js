const appointmentModel = require('../models/appointmentModel');
const doctorModel = require('../models/doctorModel');
const userModel = require('../models/userModels');
const { applyDoctorcontroller } = require('./userCtrl');
const getDoctorInfoController = async (req, res) => {
    try {
        const doctor = await doctorModel.findOne({ userId: req.body.userId })
        res.status(200).send({
            success: true,
            message: "Doctor data fetch success",
            data: doctor,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: 'Error in fetching doctor details.'
        });

    }
};

//update doc profile
const updateProfileController = async (req, res) => {
    try {
        const doctor = await doctorModel.findOneAndUpdate(
            { userId: req.body.userId }, req.body);
        res.status(201).send({
            success: true,
            message: 'Doctor Profile Updated',
            ddata: doctor,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Doctor Profile Update Issue',
            error,
        });
    }
};

//get single doctor
const getDoctorByIdController = async (req, res) => {
    try {
        const doctor = await doctorModel.findOne({ _id: req.body.doctorId })
        res.status(200).send({
            success: true,
            message: "Single Doctor Info Fetched",
            data: doctor,
        })
    } catch {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Single Doctor Info"
        })
    }
};


const doctorAppointmentsController = async (req, res) => {
    try {
        const doctor = await doctorModel.findOne({ userId: req.body.userId })
        const appointments = await appointmentModel.find({ doctorId: doctor._id })
        res.status(200).send({
            success: true,
            message: 'Doctor Appointments fetch successfully',
            data: appointments,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: 'Error in Doctor Appointments'
        })
    }
}
const updateStatusController = async (req, res) => {
    try {
        const { appointmentsId, status } = req.body;
        const appointments = await appointmentModel.findByIdAndUpdate(
            appointmentsId,
            { status }
        );
        const user = await userModel.findOne({ _id: appointments.userId });
        const notification = user.notification;
        notification.push({
            type: "status-updated",
            message: `your appointment has been updated ${status}`,
            onCLickPath: "/doctor-appointments",
        });
        await user.save();
        res.status(200).send({
            success: true,
            message: "Appointment Status Updated",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error In Update Status",
        });
    }
}
module.exports = {
    getDoctorInfoController, updateProfileController, getDoctorByIdController,
    doctorAppointmentsController, updateStatusController
};