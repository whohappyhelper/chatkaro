
import React from 'react';
import type { AdminStats } from '../types';
import StatCard from './StatCard';
import InterestChart from './InterestChart';
import { Users, MessageSquare, Clock, BarChart } from 'lucide-react'; // Using a placeholder for icons

// Mock Data
const mockStats: AdminStats = {
  activeUsers: 142,
  chatsToday: 891,
  avgChatDuration: '4m 32s',
  topInterests: [
    { name: 'music', value: 240 },
    { name: 'gaming', value: 198 },
    { name: 'movies', value: 154 },
    { name: 'travel', value: 121 },
    { name: 'art', value: 98 },
    { name: 'tech', value: 85 },
  ],
};

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-900 min-h-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-100 mb-6">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard title="Active Users" value={mockStats.activeUsers.toString()} icon="Users" />
          <StatCard title="Chats Today" value={mockStats.chatsToday.toString()} icon="MessageSquare" />
          <StatCard title="Avg. Chat Duration" value={mockStats.avgChatDuration} icon="Clock" />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold text-gray-100 mb-4 flex items-center">
            <span className="w-6 h-6 mr-2 text-indigo-400"> {/* Placeholder for BarChart icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3 12h3v9H3v-9zm4 2h3v7H7v-7zm4-5h3v12h-3V9zm4-3h3v15h-3V6z"></path></svg>
            </span>
            Most Popular Interests
          </h2>
          <div className="h-80">
            <InterestChart data={mockStats.topInterests} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
