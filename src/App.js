// src/App.js
import './App.css';
import React from 'react';
import LoginForm from './Components/LoginForm';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import UserDashboard from './Components/Dashboard/UserDashboard';
import LoginPage from './Components/LoginPage';
import { AuthContext, AuthProvider } from './Contexts/AuthContext';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};
function App() {
  return (
    
    <div className="body" >
          <AuthProvider>
              <Router>
                <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/dashboard" element={<PrivateRoute element={UserDashboard} />} />
                   
                    {/* <Route path="/dashboard" element={<UserDashboard />} /> */}
                </Routes>
            </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
