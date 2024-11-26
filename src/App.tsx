import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Education from './pages/Education';
import Blog from './pages/Blog';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Experience from './pages/Experience';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Public Routes */}
          <Route
            path="/*"
            element={
              <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <Navbar />
                <main className="container mx-auto px-4 pt-20 pb-12">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/experience" element={<Experience />} />
                  </Routes>
                </main>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;