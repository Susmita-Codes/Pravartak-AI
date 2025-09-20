'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { MoreHorizontal, Users, Download, Calendar } from 'lucide-react';

// Sample data matching the dashboard image
const revenueData = [
  { month: 'Jan', value: 120 },
  { month: 'Feb', value: 180 },
  { month: 'Mar', value: 150 },
  { month: 'Apr', value: 280 },
  { month: 'May', value: 320 },
  { month: 'Jun', value: 400 },
  { month: 'Jul', value: 360 },
  { month: 'Aug', value: 420 },
  { month: 'Sep', value: 380 },
  { month: 'Oct', value: 450 },
  { month: 'Nov', value: 490 },
  { month: 'Dec', value: 520 },
];

const usersByService = [
  { name: 'Desktop users', value: 15624, color: '#8b5cf6' },
  { name: 'Phone app users', value: 5548, color: '#06b6d4' },
  { name: 'Laptop users', value: 2478, color: '#10b981' },
];

const countriesData = [
  { country: 'United States', users: '4.7K', percentage: 32 },
  { country: 'United Kingdom', users: '2.8K', percentage: 19 },
  { country: 'Canada', users: '1.9K', percentage: 13 },
  { country: 'Australia', users: '1.5K', percentage: 10 },
  { country: 'Russia', users: '1.2K', percentage: 8 },
];

const recentOrders = [
  { id: '#3210', date: 'Dec 30, 6:00 AM', status: 'Delivered', total: '$105.98' },
  { id: '#3209', date: 'Dec 29, 7:00 AM', status: 'Delivered', total: '$167.22' },
  { id: '#3208', date: 'Dec 28, 8:15 AM', status: 'Pending', total: '$85.60' },
  { id: '#3207', date: 'Dec 27, 9:30 AM', status: 'Delivered', total: '$142.90' },
  { id: '#3206', date: 'Dec 26, 10:45 AM', status: 'Failed', total: '$98.45' },
];

export default function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Welcome back, John</h1>
          <p className="text-slate-400">Monitor your data and track web visits to traffic.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-700">
            Export data
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            Create report
          </Button>
        </div>
      </div>

      {/* Revenue Chart */}
      <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/60 transition-all duration-200">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
          <div>
            <CardTitle className="text-lg font-medium text-white">Total revenue</CardTitle>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-2xl sm:text-3xl font-bold text-white">$240.8K</span>
              <span className="text-green-500 text-sm font-medium">+23.5%</span>
            </div>
          </div>
          <MoreHorizontal className="h-4 w-4 text-slate-500 cursor-pointer hover:text-slate-300" />
        </CardHeader>
        <CardContent>
          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="month" 
                  stroke="#64748b"
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke="#64748b"
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Users by Service */}
        <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/60 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-white">Reports overview</CardTitle>
            <MoreHorizontal className="h-4 w-4 text-slate-500 cursor-pointer hover:text-slate-300" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={usersByService}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={60}
                      strokeWidth={0}
                      dataKey="value"
                    >
                      {usersByService.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-white">23,648</span>
                  <span className="text-xs text-slate-400">Users by service</span>
                </div>
              </div>
              <div className="space-y-2 w-full">
                {usersByService.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-slate-300 text-sm">{item.name}</span>
                    </div>
                    <span className="text-white text-sm font-medium">{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/60 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-white">Recent orders</CardTitle>
            <MoreHorizontal className="h-4 w-4 text-slate-500 cursor-pointer hover:text-slate-300" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-medium">
                        {order.id.slice(-2)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{order.id}</div>
                      <div className="text-slate-400 text-xs">{order.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white text-sm font-medium">{order.total}</div>
                    <div className={`text-xs ${
                      order.status === 'Delivered' ? 'text-green-500' : 
                      order.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'
                    }`}>
                      {order.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Countries */}
      <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/60 transition-all duration-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium text-white">Users by country</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold text-white">12.4 K</span>
            <span className="text-green-500 text-sm cursor-pointer hover:text-green-400">Export ↗</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {countriesData.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-4 bg-slate-600 rounded-sm" />
                  <span className="text-slate-300">{country.country}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-white font-medium">{country.users}</span>
                  <div className="w-16 bg-slate-700 rounded-full h-1">
                    <div 
                      className="bg-purple-600 h-1 rounded-full"
                      style={{ width: `${country.percentage}%` }}
                    />
                  </div>
                  <span className="text-slate-400 text-sm w-8">{country.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}