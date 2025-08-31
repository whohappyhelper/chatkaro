
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface InterestChartProps {
  data: { name: string; value: number }[];
}

const InterestChart: React.FC<InterestChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
        <XAxis type="number" stroke="#A0AEC0" />
        <YAxis dataKey="name" type="category" stroke="#A0AEC0" width={80} />
        <Tooltip
          cursor={{ fill: 'rgba(128, 90, 213, 0.1)' }}
          contentStyle={{
            backgroundColor: '#2D3748',
            borderColor: '#4A5568',
            color: '#E2E8F0'
          }}
        />
        <Bar dataKey="value" fill="#667EEA" name="Chats" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default InterestChart;
