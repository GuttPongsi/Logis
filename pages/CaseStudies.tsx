import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from '../types';
import { MapPin } from 'lucide-react';

const data: ChartData[] = [
  { name: 'Planning Time (Min)', Traditional: 240, AI_Driven: 20, unit: 'minutes' },
  { name: 'On-time Delivery (%)', Traditional: 90, AI_Driven: 98, unit: '%' },
  { name: 'Vehicle Utilization (%)', Traditional: 70, AI_Driven: 95, unit: '%' },
];

const CaseStudies: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-white animate-fade-in">กรณีศึกษาและการวิเคราะห์ข้อมูล</h1>

      {/* Chart Section */}
      <div className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white border-l-4 border-blue-500 pl-4">
          เปรียบเทียบประสิทธิภาพ (Table 4.1 Comparison)
        </h2>
        <p className="mb-8 text-slate-600 dark:text-slate-300">
            กราฟแสดงการเปรียบเทียบตัวชี้วัดประสิทธิภาพหลัก (KPIs) ระหว่างระบบ TMS แบบดั้งเดิม (Traditional) และระบบที่ขับเคลื่อนด้วย AI
        </p>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
              />
              <Legend />
              <Bar dataKey="Traditional" fill="#94a3b8" name="TMS ดั้งเดิม" radius={[4, 4, 0, 0]} />
              <Bar dataKey="AI_Driven" fill="#2563eb" name="AI-Driven TMS" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">ลดลง 90%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">เวลาในการวางแผน</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600">เพิ่มขึ้น 8%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">ความตรงต่อเวลา</div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">เพิ่มขึ้น 25%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">การใช้ประโยชน์ยานพาหนะ</div>
            </div>
        </div>
      </div>

      {/* Map Simulation Section */}
      <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">Real-time Tracking Simulation</h3>
            <p className="text-slate-600 dark:text-slate-400">
                ระบบ AI ช่วยคำนวณเส้นทางใหม่ทันทีเมื่อเกิดอุบัติเหตุหรือรถติด (Dynamic Rerouting)
            </p>
            <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded shadow-sm border-l-4 border-green-500">
                    <MapPin className="text-green-500" size={20} />
                    <div>
                        <div className="font-semibold text-sm dark:text-white">Route A (AI Optimized)</div>
                        <div className="text-xs text-slate-500">ETA: 45 mins (On Time)</div>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded shadow-sm border-l-4 border-red-500 opacity-60">
                    <MapPin className="text-red-500" size={20} />
                    <div>
                        <div className="font-semibold text-sm dark:text-white">Route B (Original)</div>
                        <div className="text-xs text-slate-500">ETA: 85 mins (Delayed)</div>
                    </div>
                </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-slate-200 dark:bg-slate-700 rounded-xl overflow-hidden relative h-[400px]">
            {/* Abstract representation of a map */}
            <div className="absolute inset-0 bg-[url('https://picsum.photos/800/600?blur=1')] bg-cover bg-center opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/90 dark:bg-black/80 backdrop-blur px-6 py-4 rounded-xl text-center">
                    <p className="font-bold text-slate-800 dark:text-white text-lg">Interactive Map Visualization</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">Integrates with Google Maps API</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">View Live Demo</button>
                 </div>
            </div>
            {/* Decorative dots simulating vehicles */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
      </div>
    </div>
  );
};

export default CaseStudies;