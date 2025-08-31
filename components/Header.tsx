
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  return (
    <header className="bg-gray-800 shadow-md p-4 flex justify-between items-center z-10">
      <h1 className="text-2xl font-bold text-indigo-400">
        <Link to="/">ChitChatter AI</Link>
      </h1>
      <nav>
        {isAdminPage ? (
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            Back to Chat
          </Link>
        ) : (
          <Link to="/admin" className="text-gray-400 hover:text-white transition-colors">
            Admin Dashboard
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
