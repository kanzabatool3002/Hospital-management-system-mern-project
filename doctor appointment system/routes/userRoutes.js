const express = require("express");
const { loginController, registerController, authcontroller, applyDoctorcontroller,
    getALLNotificationcontroller, deleteAllNotificationController, getAllDoctorsController,
    bookAppointmentController, bookingAvailabilityController, userAppointmentsController,
    getSingleDoctorController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//LOGIN || method 'post'
router.post('/login', loginController);

//REGISTER || method 'post'
router.post('/register', registerController);

//Auth || method 'post'
router.post('/getUserData', authMiddleware, authcontroller);

//Apply doctor || method 'post'
router.post('/apply-doctor', authMiddleware, applyDoctorcontroller);

//Notification doctor || method 'post'
router.post('/get-all-notification', authMiddleware, getALLNotificationcontroller);

//Notification doctor || method 'post'
router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController);

//GET ALL DOCTOR
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController);

//BOOK APPOINTMENT
router.post('/book-appointment', authMiddleware, bookAppointmentController);

//Booking Availablility
router.post('/booking-availability', authMiddleware, bookingAvailabilityController);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

// //Post GET SINGLE DOC INFO
router.get('/getSingleDoctor', authMiddleware, getSingleDoctorController);

module.exports = router;