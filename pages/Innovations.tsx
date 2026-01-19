import React from 'react';
import { Cpu, Wifi, ShieldCheck, Database, Video } from 'lucide-react';

const innovations = [
  {
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    title: "AI Demand Forecasting",
    description: "ใช้ Machine Learning วิเคราะห์ข้อมูลยอดขายในอดีตและปัจจัยภายนอก (เช่น สภาพอากาศ, วันหยุด) เพื่อพยากรณ์ความต้องการสินค้า",
    example: "Amazon ใช้พยากรณ์สินค้าคงคลังล่วงหน้า"
  },
  {
    icon: <Wifi className="w-8 h-8 text-green-500" />,
    title: "IoT Tracking",
    description: "เซ็นเซอร์ IoT ติดตามอุณหภูมิและความชื้นแบบเรียลไทม์ เหมาะสำหรับ Cold Chain Logistics",
    example: "Maersk ใช้ติดตามตู้คอนเทนเนอร์ทั่วโลก"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
    title: "Blockchain for Supply Chain",
    description: "สร้างความโปร่งใสและตรวจสอบย้อนกลับได้ (Traceability) ลดเอกสารและป้องกันการปลอมแปลง",
    example: "IBM Food Trust ตรวจสอบที่มาอาหาร"
  },
  {
    icon: <Database className="w-8 h-8 text-red-500" />,
    title: "Big Data Analytics",
    description: "รวบรวมข้อมูลมหาศาลเพื่อหา Insight ในการลดต้นทุนและปรับปรุงกระบวนการ",
    example: "DHL ใช้ Big Data ปรับปรุงเส้นทางขนส่ง"
  }
];

const Innovations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-4 text-slate-800 dark:text-white animate-fade-in">นวัตกรรม IT ใน Logistics</h1>
      <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
        สำรวจเทคโนโลยีล้ำสมัยที่กำลังเปลี่ยนแปลงโลกของการขนส่งและซัพพลายเชน
      </p>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {innovations.map((item, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">{item.description}</p>
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  ตัวอย่าง: {item.example}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Video className="text-red-500" />
          <h2 className="text-2xl font-bold">เทคโนโลยีหุ่นยนต์ในคลังสินค้า (AGV & Robotics)</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-video bg-black rounded-lg overflow-hidden relative group">
             {/* Simulating YouTube Embed */}
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/4DKrcpa8Z_E?si=placeholder" 
                title="Amazon Robotics" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="opacity-80 group-hover:opacity-100 transition-opacity"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <span className="text-sm bg-black/50 px-2 py-1 rounded">(Video Demo Placeholder)</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Automated Guided Vehicles (AGV)</h3>
            <p className="text-slate-300 leading-relaxed">
              หุ่นยนต์ AGV ทำงานร่วมกับ AI เพื่อจัดเรียงและขนย้ายสินค้าในคลังสินค้าขนาดใหญ่ 
              ช่วยลดเวลาในการหยิบสินค้า (Picking Time) ได้กว่า 50% และทำงานได้ตลอด 24 ชั่วโมง 
              โดยไม่มีความเหนื่อยล้า
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovations;