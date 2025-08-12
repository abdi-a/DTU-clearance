import React from 'react';

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input type="text" placeholder="Username" className="border p-2 w-full mb-4" />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 w-full rounded">
          Login
        </button>
      </form>
    </div>
  );
}
