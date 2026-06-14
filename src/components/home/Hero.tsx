import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, CheckCircle, XCircle, AlertTriangle, X } from 'lucide-react';
import { useState, useMemo } from 'react';
import { pickRecommendation } from '../../data/toolData';

export function Hero() {
  const [purpose, setPurpose] = useState('cn_site');
  const [region, setRegion] = useState('mainland');
  const [budget, setBudget] = useState('qtr50');
  const [showModal, setShowModal] = useState(false);

  const recommendation = useMemo(() => {
    return pickRecommendation({
      purpose: purpose,
      audience: region,
      load: 'wp_light',
      budget: budget,
      priority: 'balanced',
    });
  }, [purpose, region, budget]);

  const handleRecommend = () => {
    setShowModal(true);
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
            帮助您在搬瓦工官网正确选择适合自己的<strong className="text-slate-900 font-semibold">中国直连优化线路</strong>。<br />不要只看眼花缭乱的测速图表，先通过我们的<strong className="text-slate-900 font-semibold">结构化排雷指南</strong>，做对每次购买和续费决策。
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <button
              onClick={() => {
                document.getElementById('plan-selector-card')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-all cursor-pointer"
            >
              使用 1 分钟套餐选择器
            </button>
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
          <div id="plan-selector-card" className="rounded-xl bg-slate-50/50 p-2 ring-1 ring-inset ring-slate-900/5 lg:rounded-2xl lg:p-4 max-w-lg mx-auto lg:mr-0">
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
                          className="w-full appearance-none bg-white px-3 py-2 pr-8 rounded shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-700 font-sans cursor-pointer text-xs sm:text-sm"
                        >
                          <option value="cn_site">建站起步 / 个人博客</option>
                          <option value="wp_long">长期网站 / SEO / 多插件</option>
                          <option value="learn">学习 Linux / 跑脚本</option>
                          <option value="overseas_site">外贸站 / 跨境项目</option>
                          <option value="ai">AI 部署 / Docker 应用</option>
                          <option value="low_latency">低延迟 / 交互优先</option>
                          <option value="business">企业业务 / 稳定性优先</option>
                          <option value="unsure">还不确定，求稳妥方案</option>
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
                          className="w-full appearance-none bg-white px-3 py-2 pr-8 rounded shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-700 font-sans cursor-pointer text-xs sm:text-sm"
                        >
                          <option value="mainland">中国大陆用户</option>
                          <option value="global">国内外兼顾</option>
                          <option value="north_america">北美 / 海外用户</option>
                          <option value="europe">欧洲用户</option>
                          <option value="japan_asia">日本/亚洲</option>
                          <option value="mobile_unicom">移动/联通优先</option>
                          <option value="unknown">暂不确定</option>
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
                          className="w-full appearance-none bg-white px-3 py-2 pr-8 rounded shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-700 font-sans cursor-pointer text-xs sm:text-sm"
                        >
                          <option value="qtr50">~$170/年 或 季付</option>
                          <option value="low49">控制 ~$49.99/年</option>
                          <option value="year300">接受 ~$299.99/年</option>
                          <option value="month50">接受 ~$49.99/月</option>
                          <option value="month90">接受 ~$89.99/月以上</option>
                          <option value="business_budget">企业业务预算</option>
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
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm" style={{ zIndex: 100 }}>
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-6 md:p-8 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 pr-10">
                你的定制推荐方案
              </h3>
              
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-lg text-white relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
                
                <div className="text-amber-400 font-bold text-xs tracking-wider uppercase mb-2">主推荐套餐</div>
                <h2 className="text-2xl sm:text-3xl font-black mb-4">{recommendation.main.name}</h2>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">{recommendation.reason}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-slate-700 border border-slate-600 px-3 py-1.5 rounded-full text-xs font-semibold">{recommendation.main.price}</span>
                  <span className="bg-slate-700 border border-slate-600 px-3 py-1.5 rounded-full text-xs font-semibold">{recommendation.main.tag}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={recommendation.main.link} target="_blank" rel="sponsored nofollow noopener" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-bold py-3 px-5 rounded-xl transition-colors w-full sm:w-auto">
                    访问官网选购 <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="https://stock.bwg.net" target="_blank" rel="nofollow noopener" className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white text-sm font-semibold py-3 px-5 rounded-xl transition-colors w-full sm:w-auto">
                    查看实时库存
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    适合人群与场景
                  </div>
                  <ul className="space-y-1.5">
                    {recommendation.main.fit.map((item, i) => (
                      <li key={i} className="text-slate-600 text-xs flex gap-2">
                        <span className="text-slate-300">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500" />
                    不适合的情况
                  </div>
                  <ul className="space-y-1.5">
                    {recommendation.main.notFit.map((item, i) => (
                      <li key={i} className="text-slate-600 text-xs flex gap-2">
                        <span className="text-slate-300">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="font-bold text-amber-900 text-sm mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  为什么不是更便宜的那个？
                </div>
                <p className="text-amber-800 text-xs leading-relaxed">{recommendation.main.cheaper}</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="font-bold text-slate-900 text-sm mb-1">备选方案：{recommendation.backup.name}</div>
                      <div className="text-slate-500 text-xs line-clamp-2">{recommendation.backup.desc}</div>
                    </div>
                    <a href={recommendation.backup.link} target="_blank" rel="sponsored nofollow noopener" className="whitespace-nowrap shrink-0 text-xs font-bold text-amber-600 hover:text-amber-700">查看 &rarr;</a>
                 </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 text-blue-800 text-xs p-3 rounded-lg leading-relaxed">
                {recommendation.note} 下单前请关注：价格、库存、可用机房。
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
