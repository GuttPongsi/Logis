import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, AlertTriangle } from 'lucide-react';
import { QuizQuestion } from '../types';

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "AI สามารถลดระยะทางรวม (Total Mileage) ในการขนส่งได้เฉลี่ยกี่เปอร์เซ็นต์?",
    options: ["1-5%", "10-20%", "30-40%", "50% ขึ้นไป"],
    correctAnswer: 1,
    explanation: "จากการศึกษาพบว่า Dynamic Route Optimization ช่วยลดระยะทางรวมได้ 10-20% เมื่อเทียบกับการจัดเส้นทางแบบคงที่"
  },
  {
    id: 2,
    question: "ข้อใดคือปัจจัยสำคัญที่สุดในการทำให้ AI ใน TMS ประสบความสำเร็จ?",
    options: ["จำนวนรถบรรทุก", "ความเร็วอินเทอร์เน็ต", "คุณภาพของข้อมูล (Data Quality)", "งบประมาณโฆษณา"],
    correctAnswer: 2,
    explanation: "คุณภาพของข้อมูล (Data Quality) สำคัญที่สุด เพราะหากข้อมูลผิดพลาด (Garbage In) ผลลัพธ์ก็จะผิดพลาด (Garbage Out)"
  }
];

const Content: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'intro' | 'lit' | 'method' | 'results' | 'discussion'>('intro');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [quizState, setQuizState] = useState<{ [key: number]: number | null }>({});

  const toggleAccordion = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const handleQuizAnswer = (qId: number, optionIdx: number) => {
    setQuizState({ ...quizState, [qId]: optionIdx });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-white">เนื้อหารายงานฉบับสมบูรณ์</h1>
      
      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
        {[
          { id: 'intro', label: '1. บทนำ' },
          { id: 'lit', label: '2. ทบทวนวรรณกรรม' },
          { id: 'method', label: '3. วิธีการศึกษา' },
          { id: 'results', label: '4. ผลการศึกษา' },
          { id: 'discussion', label: '5. อภิปรายผล' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 md:p-10 min-h-[500px]">
        
        {/* Intro Tab */}
        {activeTab === 'intro' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">บทนำ: ที่มาและความสำคัญ</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                ในยุค Digital Economy อุตสาหกรรมโลจิสติกส์ต้องเผชิญกับสภาวะ <strong>"VUCA World"</strong> (ความผันผวน, ความไม่แน่นอน, ความซับซ้อน, ความคลุมเครือ) 
                ระบบ TMS แบบดั้งเดิม (Rule-based) เริ่มมีข้อจำกัดในการจัดการกับตัวแปรที่ซับซ้อน เช่น สภาพจราจรแบบเรียลไทม์
              </p>
              <div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded-r-lg">
                <h3 className="font-bold text-lg mb-2">วัตถุประสงค์หลัก</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>ศึกษาการประยุกต์ใช้ AI ในระบบ TMS</li>
                  <li>วิเคราะห์ประสิทธิภาพอัลกอริทึม Route Optimization และ Predictive ETA</li>
                  <li>เสนอแนวทางปรับเปลี่ยนสู่ Smart Logistics</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Lit Review Tab */}
        {activeTab === 'lit' && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">ทบทวนวรรณกรรม</h2>
            
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleAccordion('ev-tms')}
                className="w-full flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="font-semibold text-lg">2.1 วิวัฒนาการของระบบ TMS</span>
                {expandedSection === 'ev-tms' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'ev-tms' && (
                <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-bold bg-slate-200 dark:bg-slate-600 px-2 rounded">ยุคที่ 1</span>
                      <span>Traditional / On-Premise: เน้นบันทึกข้อมูล ใช้คนวางแผน ขาดความยืดหยุ่น</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 rounded">ยุคที่ 2</span>
                      <span>Cloud-based: เชื่อมต่อผ่านเน็ต เข้าถึงข้อมูลได้ทุกที่ แต่การวิเคราะห์ยังจำกัด</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 rounded">ยุคที่ 3</span>
                      <span>AI-Driven / Smart TMS: ใช้ AI/Big Data เป็น "ผู้ช่วยตัดสินใจ" พยากรณ์ล่วงหน้าได้</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleAccordion('ai-concepts')}
                className="w-full flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="font-semibold text-lg">2.2 เทคโนโลยีหลัก</span>
                {expandedSection === 'ai-concepts' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'ai-concepts' && (
                <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 grid md:grid-cols-2 gap-4">
                  <div className="p-3 border border-slate-100 dark:border-slate-600 rounded">
                    <h4 className="font-bold text-blue-600">Machine Learning (ML)</h4>
                    <p className="text-sm mt-1 text-slate-600 dark:text-slate-300">เรียนรู้จากอดีตเพื่อทำนายอนาคต ใช้กับรูปแบบจราจร</p>
                  </div>
                  <div className="p-3 border border-slate-100 dark:border-slate-600 rounded">
                    <h4 className="font-bold text-blue-600">Deep Learning</h4>
                    <p className="text-sm mt-1 text-slate-600 dark:text-slate-300">โครงข่ายประสาทเทียม ซับซ้อนสูง เช่น วิเคราะห์ภาพ, แปลงที่อยู่</p>
                  </div>
                  <div className="p-3 border border-slate-100 dark:border-slate-600 rounded md:col-span-2">
                    <h4 className="font-bold text-blue-600">Optimization Algorithms</h4>
                    <p className="text-sm mt-1 text-slate-600 dark:text-slate-300">Genetic Algorithm, Ant Colony เพื่อแก้ปัญหา Vehicle Routing Problem (VRP)</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Methodology Tab */}
        {activeTab === 'method' && (
          <div className="space-y-6 animate-fade-in">
             <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">วิธีการศึกษา</h2>
             <p className="text-slate-600 dark:text-slate-300">
               เป็นการวิจัยเชิงคุณภาพ (Qualitative Research) เน้นการวิจัยเอกสาร (Documentary Research) 
               จากแหล่งข้อมูลทุติยภูมิที่น่าเชื่อถือในช่วงปี 2021-2025
             </p>
             <div className="grid md:grid-cols-3 gap-6 text-center">
               <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                 <div className="font-bold text-lg mb-2">1. รวบรวม</div>
                 <p className="text-sm">จาก IEEE, ScienceDirect, Gartner, McKinsey</p>
               </div>
               <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                 <div className="font-bold text-lg mb-2">2. วิเคราะห์</div>
                 <p className="text-sm">เปรียบเทียบประสิทธิภาพ (Comparative Analysis)</p>
               </div>
               <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                 <div className="font-bold text-lg mb-2">3. สรุปผล</div>
                 <p className="text-sm">สังเคราะห์และเสนอแนะ (Synthesis)</p>
               </div>
             </div>
          </div>
        )}

        {/* Results Tab */}
        {activeTab === 'results' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">ผลการศึกษา: TMS แบบดั้งเดิม vs AI</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                   <CheckCircle className="text-green-500" />
                   ประสิทธิภาพด้านการวางแผน
                </h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc pl-5">
                  <li><strong>Dynamic Route Optimization:</strong> ลดระยะทางรวมได้เฉลี่ย 10-20%</li>
                  <li><strong>Fleet Usage:</strong> ลดจำนวนรถที่ต้องใช้ลง 5-10%</li>
                  <li><strong>3D Load Optimization:</strong> เพิ่มอัตราการบรรทุก (Load Factor) เป็น 85-95% (จากเดิม 60-70%)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                   <CheckCircle className="text-green-500" />
                   ประสิทธิภาพด้านการติดตาม
                </h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc pl-5">
                  <li><strong>Predictive ETA:</strong> ลดความคลาดเคลื่อนได้กว่า 40%</li>
                  <li><strong>Proactive Risk:</strong> แจ้งเตือนความเสี่ยงล่วงหน้าก่อนเกิดปัญหา (เช่น รถเสีย, รถติด)</li>
                </ul>
              </div>
            </div>

            {/* Interactive Quiz Section */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-center">ทดสอบความเข้าใจ</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {quizQuestions.map((q) => (
                  <div key={q.id} className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
                    <p className="font-semibold mb-3">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuizAnswer(q.id, idx)}
                          disabled={quizState[q.id] !== undefined}
                          className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                            quizState[q.id] !== undefined
                              ? idx === q.correctAnswer
                                ? 'bg-green-100 text-green-800 border border-green-300'
                                : idx === quizState[q.id]
                                ? 'bg-red-100 text-red-800 border border-red-300'
                                : 'bg-gray-100 text-gray-400'
                              : 'bg-white dark:bg-slate-600 hover:bg-blue-50 dark:hover:bg-slate-500'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {quizState[q.id] !== undefined && (
                      <div className={`mt-3 text-sm p-2 rounded ${
                        quizState[q.id] === q.correctAnswer ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                      }`}>
                        {quizState[q.id] === q.correctAnswer ? 'ถูกต้อง! ' : 'ยังไม่ถูกครับ '}
                        {q.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Discussion Tab */}
        {activeTab === 'discussion' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">อภิปรายผล</h2>
            <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
              <p className="mb-4">
                การที่ AI เข้ามาช่วยนั้นสอดคล้องกับทฤษฎี <strong>"ความมีเหตุผลที่มีขอบเขตจำกัด" (Bounded Rationality)</strong> 
                เนื่องจากสมองมนุษย์ไม่สามารถประมวลผลตัวแปรนับล้านในเวลาจำกัดได้ แต่ AI ทำได้ ทำให้เปลี่ยนจาก 
                <em> "Static Planning"</em> เป็น <em>"Dynamic Planning"</em>
              </p>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-md">
                <h3 className="font-bold text-yellow-800 dark:text-yellow-200 flex items-center gap-2">
                  <AlertTriangle size={20} />
                  ความท้าทาย (Challenges)
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-yellow-900 dark:text-yellow-100">
                  <li><strong>Data Quality:</strong> ข้อมูลต้องสะอาด (Clean Data) เพื่อเลี่ยง Garbage In, Garbage Out</li>
                  <li><strong>User Adoption:</strong> พนักงานอาจไม่ไว้ใจระบบ หรือกลัวถูกแทนที่</li>
                  <li><strong>System Integration:</strong> ต้องเชื่อมต่อกับ ERP/WMS ได้ราบรื่น</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;