import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Globe, Clock, ArrowUpRight, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

// Mock data - In a real app, this would come from your backend
const visitorData = [
  { date: '2024-03-10', visitors: 150 },
  { date: '2024-03-11', visitors: 230 },
  { date: '2024-03-12', visitors: 180 },
  { date: '2024-03-13', visitors: 290 },
  { date: '2024-03-14', visitors: 320 },
  { date: '2024-03-15', visitors: 250 },
  { date: '2024-03-16', visitors: 400 },
];

const recentVisitors = [
  { id: 1, ip: '192.168.1.1', timestamp: '2024-03-16 14:30', page: '/projects' },
  { id: 2, ip: '192.168.1.2', timestamp: '2024-03-16 14:25', page: '/blog' },
  { id: 3, ip: '192.168.1.3', timestamp: '2024-03-16 14:20', page: '/technologies' },
];

const stats = [
  { title: 'Total Visitors', value: '1.2k', icon: Users, change: '+12%' },
  { title: 'Unique IPs', value: '856', icon: Globe, change: '+5%' },
  { title: 'Avg. Session', value: '4m 32s', icon: Clock, change: '+8%' },
];

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Nicholas!</h1>
          <p className="text-gray-400">Here's what's happening with your portfolio.</p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://avatars.githubusercontent.com/u/156979022?v=4&size=64"
            alt="Nicholas Pincheira"
            className="w-12 h-12 rounded-full border-2 border-indigo-500"
          />
          <button
            onClick={handleLogout}
            className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors flex items-center space-x-2 text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
              <div className="p-2 bg-indigo-500/20 rounded-lg">
                <stat.icon className="w-6 h-6 text-indigo-400" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <ArrowUpRight className="w-4 h-4 text-green-400 mr-1" />
              <span className="text-green-400">{stat.change}</span>
              <span className="text-gray-400 ml-2">vs last week</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-gray-800 p-6 rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Visitor Traffic</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{ background: '#1F2937', border: 'none' }}
                  labelStyle={{ color: '#9CA3AF' }}
                />
                <Bar dataKey="visitors" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Recent Visitors</h2>
          <div className="space-y-4">
            {recentVisitors.map((visitor) => (
              <div key={visitor.id} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                <div>
                  <p className="font-medium">{visitor.ip}</p>
                  <p className="text-sm text-gray-400">{visitor.page}</p>
                </div>
                <p className="text-sm text-gray-400">{visitor.timestamp}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}