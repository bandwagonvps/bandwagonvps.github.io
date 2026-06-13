import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const navigate = useNavigate();
  const [purpose, setPurpose] = useState('建站');
  const [region, setRegion] = useState('国内');
  const [budget, setBudget] = useState('$100');

  const handleRecommend = () => {
    const params = new URLSearchParams({ purpose, region, budget });
    navigate(`/tools/plan-selector?${params.toString()}`);
  };

  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f59e0b] to-[#fbbf24] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-32 min-h-[calc(100vh-64px)]">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <div className="mt-10 sm:mt-12 lg:mt-0">
            <span className="inline-flex items-center space-x-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold leading-6 text-amber-600 ring-1 ring-inset ring-amber-500/20">
              <span>系统化购买指南</span>
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            搬瓦工官网选购指南与避坑排雷：<br />拒绝盲目下单
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            帮助您在搬瓦工官网正确选择适合自己的中国直连优化线路。<br />不要只看眼花缭乱的测速图表，先通过我们的结构化排雷指南，做对每次购买和续费决策。
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/tools/plan-selector"
              className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-all"
            >
              使用 1 分钟套餐选择器
            </Link>
            <a href="https://bwh81.net" target="_blank" rel="noopener noreferrer" className="group text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1">
              直达官网安全通道 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm leading-6 text-slate-600">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-5 w-5 text-amber-500" />
              <span>不仅是优惠码聚合</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-5 w-5 text-amber-500" />
              <span>覆盖全生命周期</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-5 w-5 text-amber-500" />
              <span>拒绝无意义参数堆砌</span>
            </div>
          </div>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:max-w-none lg:flex-1 lg:pl-10 xl:pl-20">
          <div className="rounded-xl bg-slate-50/50 p-2 ring-1 ring-inset ring-slate-900/5 lg:rounded-2xl lg:p-4 max-w-lg mx-auto lg:mr-0">
            <div className="rounded-md bg-white shadow-2xl ring-1 ring-slate-900/10 overflow-hidden">
               <div className="flex items-center border-b border-slate-100 bg-slate-50 px-4 py-3">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                 </div>
                 <div className="ml-4 text-xs font-mono text-slate-400">tools / plan-selector</div>
               </div>
               <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">1分钟套餐选择器</h3>
                    <p className="text-sm text-slate-500 mt-1">告诉我们你的需求，直接输出推荐。</p>
                  </div>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-between border border-slate-100 gap-4">
                      <span className="text-slate-600 whitespace-nowrap">主要用途</span>
                      <div className="relative w-full max-w-[140px]">
                        <select 
                          value={purpose}
                          onChange={(e) => setPurpose(e.target.value)}
                          className="w-full appearance-none bg-white px-3 py-2 pr-8 rounded shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-700 font-sans cursor-pointer"
                        >
                          <option value="建站">建站 (WordPress)</option>
                          <option value="AI">AI/跨境外贸</option>
                          <option value="测试">学习/折腾测试</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-between border border-slate-100 gap-4">
                      <span className="text-slate-600 whitespace-nowrap">目标人群位置</span>
                      <div className="relative w-full max-w-[140px]">
                        <select 
                          value={region}
                          onChange={(e) => setRegion(e.target.value)}
                          className="w-full appearance-none bg-white px-3 py-2 pr-8 rounded shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-700 font-sans cursor-pointer"
                        >
                          <option value="国内">中国大陆主要</option>
                          <option value="欧美">北美/欧洲</option>
                          <option value="全球">全球混合访问</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-between border border-slate-100 gap-4">
                      <span className="text-slate-600 whitespace-nowrap">年度预算</span>
                      <div className="relative w-full max-w-[140px]">
                        <select 
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full appearance-none bg-white px-3 py-2 pr-8 rounded shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-700 font-sans cursor-pointer"
                        >
                          <option value="$50">极力压缩 ~$50</option>
                          <option value="$100">追求稳定 ~$100</option>
                          <option value="不限">质量优先 不差钱</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleRecommend}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    获取推荐方案 <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
