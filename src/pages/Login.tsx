import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
