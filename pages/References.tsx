import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';

const references = [
  {
    citation: "Gartner. (2024, March 27). Magic quadrant for transportation management systems. Gartner Research.",
    link: "https://www.gartner.com/en/documents/5306363"
  },
  {
    citation: "Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep learning. MIT Press.",
    link: "#"
  },
  {
    citation: "Lee, C. K. M., Ho, W., & Ho, G. T. S. (2023). IoT-based asset management system for predictive maintenance in logistics. Journal of Intelligent Manufacturing, 34(1), 123–135.",
    link: "https://doi.org/10.1007/s10845-021-01856-3"
  },
  {
    citation: "McKinsey & Company. (2023, April 20). Supply chain 4.0 – the next-generation digital supply chain.",
    link: "https://www.mckinsey.com/capabilities/operations/our-insights/supply-chain-40--the-next-generation-digital-supply-chain"
  },
  {
    citation: "Pla-Santamaría, D., & Bravo, M. (2021). Artificial intelligence and machine learning in logistics and supply chain management: A systematic literature review.",
    link: "#"
  },
  {
    citation: "Zhang, X., Zhang, Z., & Song, X. (2022). Deep reinforcement learning for dynamic vehicle routing problems with time windows. Transportation Research Part E.",
    link: "https://doi.org/10.1016/j.tre.2022.102947"
  },
  {
    citation: "Russell, S. J., & Norvig, P. (2021). Artificial intelligence: A modern approach (4th ed.). Pearson.",
    link: "#"
  }
];

const References: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
      <div className="flex items-center justify-center gap-3 mb-8">
        <BookOpen className="w-8 h-8 text-slate-800 dark:text-white" />
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">เอกสารอ้างอิง</h1>
      </div>
      
      <div className="bg-white dark:bg-slate-800 shadow-sm rounded-lg border border-slate-200 dark:border-slate-700 divide-y divide-slate-100 dark:divide-slate-700">
        {references.map((ref, index) => (
          <div key={index} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
            <p className="text-slate-700 dark:text-slate-300 mb-2 pl-8 -indent-8 font-serif leading-relaxed">
              {ref.citation}
            </p>
            {ref.link !== '#' && (
              <a 
                href={ref.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mt-1"
              >
                <ExternalLink size={14} className="mr-1" />
                Visit Source
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-slate-500">
        <p>รายงานวิชาการ: การเพิ่มประสิทธิภาพระบบ TMS ด้วยเทคโนโลยี AI เพื่อการวางแผนและติดตามการขนส่งแบบครบวงจร</p>
        <p>จัดทำโดย: ปิยทัศน์ อนุพงษ์กุลกิจ | มหาวิทยาลัยสวนดุสิต</p>
      </div>
    </div>
  );
};

export default References;