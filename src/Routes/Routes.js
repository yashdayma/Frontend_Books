import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';
import UserDashboard from '../Components/Dashboard/UserDashboard';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard" element={<UserDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
