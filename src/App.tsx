import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute.tsx';
import { AuthProvider } from './context/AuthContext';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails.tsx';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/tours"
            element={
              <PrivateRoute element={<Tours />} />
            }
          />
          <Route
            path='/tour/:id'
            element={
              <PrivateRoute element={<TourDetails />} />
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
