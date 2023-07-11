import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
// import Website from './pages/Website';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import ApplyDoctor from './pages/ApplyDoctor';
import NotificationPage from './pages/NotificationPage';
import Users from './pages/admin/Users';
import Doctors from './pages/admin/Doctors';
import Profile from './pages/Doctor/Profile';
import BookingPage from './pages/BookingPage';
import Appointments from "./pages/Appointments";
import Chatai from "D:/doctor appointment system/client/src/pages/Chatai.js";
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import Website from './pages/Website';
// import Website from './pages/Website';


function App() {
  const { loading } = useSelector(state => state.alerts)
  return (
    <>
      <BrowserRouter>
        {loading ?
          (<Spinner />) :
          (
            <Routes>
              <Route path='/apply-doctor' element={
                <ProtectedRoute>
                  <ApplyDoctor />
                </ProtectedRoute>
              } />

              <Route path='/admin/users' element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              } />

              <Route path='/admin/doctors' element={
                <ProtectedRoute>
                  <Doctors />
                </ProtectedRoute>
              } />

              <Route
                path="/doctor/profile/:id"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route

                path="/doctor/book-appointment/:doctorId"
                element={
                  <ProtectedRoute>
                    <BookingPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/appointments"
                element={
                  <ProtectedRoute>
                    <Appointments />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/doctor-appointments"
                element={
                  <ProtectedRoute>
                    <DoctorAppointments />
                  </ProtectedRoute>
                }
              />

              <Route path='/notification' element={
                <ProtectedRoute>
                  <NotificationPage />
                </ProtectedRoute>
              } />

              <Route path='/login'
                element={
                  <PublicRoute><Login /></PublicRoute>
                } />

              <Route path='/website'
                element={
                  <PublicRoute><Website /></PublicRoute>
                } />



              <Route path='/register'
                element={
                  <PublicRoute><Register /></PublicRoute>
                } />

              <Route path='/' element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              } />

              <Route path='/chat' element={
                <ProtectedRoute>
                  <Chatai />
                </ProtectedRoute>
              } />

            </Routes>)
        }
      </BrowserRouter>
    </>
  );
}


export default App;
