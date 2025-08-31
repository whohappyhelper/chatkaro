
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import ChatPage from './components/ChatPage';
import AdminDashboard from './components/AdminDashboard';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col h-screen bg-gray-900 text-gray-100 font-sans">
        <Header />
        <main className="flex-grow overflow-auto">
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/" element={<ChatPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
