import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Clearance System</h1>
      <div className="space-x-4">
        <Link to="/">Login</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/department">Department</Link>
        <Link to="/student">Student</Link>
      </div>
    </nav>
  );
}
