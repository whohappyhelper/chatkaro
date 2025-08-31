
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: string; // Placeholder for icon name
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
    // A simple mapping for demo icon placeholders
    const renderIcon = () => {
        switch (icon) {
            case 'Users': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM12 13c-3.309 0-6 2.691-6 6v1h12v-1c0-3.309-2.691-6-6-6zm-4 5v-1c0-2.206 1.794-4 4-4s4 1.794 4 4v1H8z"></path></svg>;
            case 'MessageSquare': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h2v4l4-4h8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 12H6V6h12v8z"></path></svg>;
            case 'Clock': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>;
            default: return null;
        }
    };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex items-center space-x-4">
      <div className="bg-indigo-600/20 p-3 rounded-full text-indigo-400">
        {renderIcon()}
      </div>
      <div>
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
