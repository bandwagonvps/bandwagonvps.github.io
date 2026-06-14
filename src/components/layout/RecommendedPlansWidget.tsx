import React from 'react';
import { ShoppingCart } from 'lucide-react';

const plans = [
  {
    title: '1. 搬瓦工美国 KVM（入门）',
    items: [
      { spec: 'A. 1TB/月，49.99美元/年', link: 'https://bwh81.net/aff.php?aff=80471&pid=44' },
      { spec: 'B. 2TB/月，52.99美元/半年', link: 'https://bwh81.net/aff.php?aff=80471&pid=45' },
    ]
  },
  {
    title: '2. 搬瓦工美国 CN2 GIA-E',
    highlight: true,
    items: [
      { spec: 'A. 1TB/月，49.99美元/季度', link: 'https://bwh81.net/aff.php?aff=80471&pid=87' },
      { spec: 'B. 2TB/月，89.99美元/季度', link: 'https://bwh81.net/aff.php?aff=80471&pid=88' },
    ]
  },
  {
    title: '3. 搬瓦工中国香港 CN2 GIA（高端）',
    items: [
      { spec: 'A. 500GB/月，89.99美元/月', link: 'https://bwh81.net/aff.php?aff=80471&pid=95' },
      { spec: 'B. 1TB/月，155.99美元/月', link: 'https://bwh81.net/aff.php?aff=80471&pid=96' },
    ]
  },
  {
    title: '4. 搬瓦工日本东京 CN2 GIA（高端）',
    items: [
      { spec: 'A. 500GB/月，89.99美元/月', link: 'https://bwh81.net/aff.php?aff=80471&pid=108' },
      { spec: 'B. 1TB/月，155.99美元/月', link: 'https://bwh81.net/aff.php?aff=80471&pid=109' },
    ]
  }
];

export function RecommendedPlansWidget() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center gap-2 mb-5">
        <ShoppingCart className="w-5 h-5 text-amber-500" />
        <h3 className="font-bold text-slate-900 text-lg">搬瓦工推荐方案</h3>
      </div>
      
      <div className="space-y-4">
        {plans.map((plan, idx) => (
          <div key={idx} className="bg-slate-50 p-4 rounded-xl ring-1 ring-slate-100">
            <h4 className={`font-semibold mb-3 flex flex-wrap items-center gap-2 ${plan.highlight ? 'text-amber-600' : 'text-slate-800'}`}>
              <span>{plan.title}</span>
              {plan.highlight && (
                <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">推荐</span>
              )}
            </h4>
            <div className="space-y-3 mt-4">
              {plan.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 text-sm text-slate-600 border-t border-slate-200/60 pt-3 first:border-0 first:pt-0">
                  <span className="leading-tight">{item.spec}</span>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-4 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-amber-400 no-underline transition-colors shrink-0 xl:w-auto w-full text-center"
                  >
                    前往选购
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
