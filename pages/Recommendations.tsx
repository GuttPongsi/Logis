import React from 'react';
import { Send, Lightbulb, Users, Database } from 'lucide-react';

const Recommendations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white animate-fade-in">ข้อเสนอแนะและอนาคต</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-xl border border-blue-100 dark:border-slate-700">
          <Database className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-lg font-bold mb-2 dark:text-white">Data Readiness</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            เตรียมความพร้อมของข้อมูล (Clean Data) เป็นสิ่งสำคัญที่สุด องค์กรควรเริ่มจากการจัดระเบียบฐานข้อมูลลูกค้าและพิกัดให้ถูกต้อง
          </p>
        </div>
        <div className="bg-indigo-50 dark:bg-slate-800 p-6 rounded-xl border border-indigo-100 dark:border-slate-700">
          <Users className="w-10 h-10 text-indigo-600 mb-4" />
          <h3 className="text-lg font-bold mb-2 dark:text-white">User Adoption</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            พัฒนาบุคลากรให้เข้าใจว่า AI เป็น "Co-pilot" ผู้ช่วยทำงาน ไม่ใช่คู่แข่ง เพื่อลดแรงต้านและเพิ่มประสิทธิภาพการทำงานร่วมกัน
          </p>
        </div>
        <div className="bg-purple-50 dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-slate-700">
          <Lightbulb className="w-10 h-10 text-purple-600 mb-4" />
          <h3 className="text-lg font-bold mb-2 dark:text-white">Future Outlook</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            ศึกษาการผสาน AI กับ Metaverse เพื่อจำลองคลังสินค้าเสมือนจริง และการใช้ AI เพื่อลด Carbon Footprint ในระยะยาว
          </p>
        </div>
      </div>

      {/* Feedback Form Section */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">ส่งข้อเสนอแนะ</h2>
          <p className="opacity-90">คุณคิดว่า AI จะเปลี่ยนอนาคตโลจิสติกส์อย่างไร?</p>
        </div>
        
        <form className="p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">ชื่อของคุณ</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="ระบุชื่อ"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">อีเมล</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">ความคิดเห็น / คำถาม</label>
            <textarea 
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="พิมพ์ข้อความของคุณที่นี่..."
            ></textarea>
          </div>

          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Send size={20} />
            ส่งข้อความ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recommendations;