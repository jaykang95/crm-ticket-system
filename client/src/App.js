import "./index.css";
import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewTicket from "./pages/NewTicket/NewTicket";
import SignInPage from "./pages/SigninPage/SignInPage";
import Ticket from "./pages/Ticket/Ticket";
import TicketList from "./pages/TicketList/TicketList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import VerificationPage from "./pages/Verification/VerificationPage";
import ResetPasswordPage from "./pages/ResetPassword/ResetPasswordPage";
import UpdatePasswordPage from "./pages/UpdatePassword/UpdatePasswordPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AdminSignInPage from "./pages/AdminSigninPage/AdminSignInPage";
import { useSelector } from "react-redux";
import AdminPrivateRoute from "./components/AdminPrivateRoute/AdminPrivateRoute";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";

function App() {
  const { isAdmin } = useSelector((state) => state.adminSignin);
  return (
    <div className="text-2xl">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignInPage />} />
          <Route exact path="/admin" element={<AdminSignInPage />} />
          <Route exact path="/registration" element={<RegistrationPage />} />
          <Route exact path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            exact
            path="/update-password/:pin/:email"
            element={<UpdatePasswordPage />}
          />
          <Route
            exact
            path="/verification/:_id"
            element={<VerificationPage />}
          />

          <Route
            exact
            path="/admin/dashboard"
            element={
              <AdminPrivateRoute>
                <AdminDashboard />
              </AdminPrivateRoute>
            }
          />

          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path="/new-ticket"
            element={
              <PrivateRoute>
                <NewTicket />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/tickets"
            element={
              <PrivateRoute>
                <TicketList />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/admin/tickets"
            element={
              <AdminPrivateRoute>
                <TicketList />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/ticket/:tId"
            element={
              <PrivateRoute>
                <Ticket />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/ticket/:tId"
            element={
              <AdminPrivateRoute>
                <Ticket />
              </AdminPrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
