const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getDoctorInfoController, updateProfileController, getDoctorByIdController, doctorAppointmentsController,
    updateStatusController } = require('../controllers/doctorCtrl');
const router = express.Router()

//post all doc info
router.post('/getDoctorInfo', authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post('/updateProfile', authMiddleware, updateProfileController);


//Post GET SINGLE DOC INFO
router.post('/getDoctorById', authMiddleware, getDoctorByIdController);

//Post GET SINGLE DOC INFO
router.get('/doctor-appointments', authMiddleware, doctorAppointmentsController);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;