import React, { useState, useEffect } from 'react';
import { ArrowRight, Box, BarChart3, Clock, Globe } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const slides = [
  {
    image: "https://picsum.photos/1200/600?grayscale",
    title: "AI-Driven Logistics",
    desc: "ยกระดับการจัดการขนส่งด้วยปัญญาประดิษฐ์เพื่อความแม่นยำสูงสุด"
  },
  {
    image: "https://picsum.photos/1200/600?blur=2",
    title: "Dynamic Route Optimization",
    desc: "ลดต้นทุนเชื้อเพลิง 10-20% ด้วยการจัดเส้นทางแบบเรียลไทม์"
  },
  {
    image: "https://picsum.photos/1200/600",
    title: "Predictive ETA",
    desc: "พยากรณ์เวลาถึงหมายแม่นยำ เพิ่มความพึงพอใจลูกค้า"
  }
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden bg-slate-900 text-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-50' : 'opacity-0'
            }`}
          >
            <img src={slide.image} alt={slide.title} className="object-cover w-full h-full" />
          </div>
        ))}
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            นวัตกรรม AI ใน <span className="text-blue-400">Logistics & Supply Chain</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-slate-200">
            การเพิ่มประสิทธิภาพระบบ TMS ด้วยเทคโนโลยี AI เพื่อการวางแผนและติดตามการขนส่งแบบครบวงจร
          </p>
          <button
            onClick={() => onNavigate(Page.TOPIC)}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 transform hover:scale-105"
          >
            เรียนรู้เพิ่มเติม
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-blue-400 w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">วัตถุประสงค์ของโครงการ</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            เว็บไซต์นี้จัดทำขึ้นเพื่อนำเสนอผลการศึกษาเกี่ยวกับการประยุกต์ใช้เทคโนโลยี AI ในระบบจัดการการขนส่ง (TMS) 
            โดยมุ่งเน้นการเปรียบเทียบประสิทธิภาพระหว่างระบบดั้งเดิมและระบบอัจฉริยะในด้านการวางแผน การติดตาม และการลดต้นทุน
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-300">
              <Box size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Route Optimization</h3>
            <p className="text-slate-600 dark:text-slate-400">
              การจัดเส้นทางอัจฉริยะแบบ Dynamic ช่วยลดระยะทางและต้นทุนเชื้อเพลิง
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 text-green-600 dark:text-green-300">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Predictive ETA</h3>
            <p className="text-slate-600 dark:text-slate-400">
              พยากรณ์เวลาถึงหมายด้วยความแม่นยำสูง ลดความคลาดเคลื่อนได้ถึง 40%
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-300">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Cost Reduction</h3>
            <p className="text-slate-600 dark:text-slate-400">
              ลดการวิ่งรถเปล่า (Empty Miles) และเพิ่มอัตราการใช้พื้นที่บรรทุก (Load Factor)
            </p>
          </div>
        </div>
      </div>
      
      {/* Call to Action for Abstract */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-blue-300" />
            <h2 className="text-2xl font-bold mb-4">Abstract</h2>
            <p className="mb-8 italic text-blue-100 leading-relaxed">
            "The study finds that AI integration in TMS improves efficiency in three main areas: 
            1) Dynamic Route Optimization, reducing mileage and fuel costs by 10-20%, 
            2) Predictive ETA with higher accuracy, and 
            3) Proactive Tracking. However, implementation requires consideration of Data Quality and System Integration."
            </p>
            <button 
                onClick={() => onNavigate(Page.TOPIC)}
                className="bg-white text-blue-800 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
                อ่านรายงานฉบับเต็ม
            </button>
        </div>
      </div>
    </div>
  );
};

export default Home;