import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { useSEO } from '../lib/useSEO';
import { pickRecommendation, quickProducts } from '../data/toolData';

export function ToolPage() {
  useSEO({
    title: '搬瓦工VPS选择工具',
    description: '通过回答5个简单问题，快速帮你选出最适合你的搬瓦工VPS套餐。'
  });

  const location = useLocation();
  const [purpose, setPurpose] = useState('cn_site');
  const [audience, setAudience] = useState('mainland');
  const [load, setLoad] = useState('wp_light');
  const [budget, setBudget] = useState('qtr50');
  const [priority, setPriority] = useState('balanced');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlPurpose = params.get('purpose');
    const urlRegion = params.get('region');
    const urlBudget = params.get('budget');
    
    // Map URL params to tool values
    if (urlPurpose === 'AI') setPurpose('ai');
    else if (urlPurpose === '测试') setPurpose('learn');
    else if (urlPurpose === '建站') setPurpose('cn_site');

    if (urlRegion === '欧美') setAudience('global');
    else if (urlRegion === '全球') setAudience('global');
    else if (urlRegion) setAudience('mainland');

    if (urlBudget === '$50') setBudget('low49');
    else if (urlBudget === '$100') setBudget('qtr50');
    else if (urlBudget === '不限') setBudget('month90');
  }, [location.search]);

  const recommendation = useMemo(() => {
    return pickRecommendation({ purpose, audience, load, budget, priority });
  }, [purpose, audience, load, budget, priority]);

  const handleReset = () => {
    setPurpose('cn_site');
    setAudience('mainland');
    setLoad('wp_light');
    setBudget('qtr50');
    setPriority('balanced');
  };

  const { main, backup, avoid, reason, note } = recommendation;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50"></div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4 relative z-10">
              搬瓦工 VPS 选择工具 · 最后核查 2026-06-13
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 relative z-10">
              不知道搬瓦工买哪个套餐？<br />先按用途选，不要先盯价格表。
            </h1>
            <p className="text-slate-600 text-lg mb-6 relative z-10">
              回答 5 个问题，工具会给出主推荐、备选方案、需要避开的套餐，以及为什么不建议盲目买更便宜或更贵的方案。
            </p>
            <div className="text-sm text-slate-500 bg-slate-50 border border-slate-100 rounded-xl p-4 relative z-10">
              说明：本工具可能包含推广链接。推荐顺序主要依据用途、访客地区、配置需求、预算和稳定性要求，不按佣金高低排序。搬瓦工价格、库存、优惠码和可选机房会变化，付款前请以官方结算页和 KiwiVM 后台显示为准。
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 text-lg mb-4">推荐原则</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-600">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0"></div>
                <span>学习测试先省钱，正式中文站不要只看最低价。</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0"></div>
                <span>WordPress 长期站点优先看 CN2 GIA-E 40G。</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0"></div>
                <span>香港/大阪是低延迟方案，不是所有新手的默认答案。</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0"></div>
                <span>AI 工具要看内存，Dify 完整部署不建议 1GB 硬跑。</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main interactive area */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">按你的真实用途选择</h2>
            <p className="text-slate-500 text-sm mb-6">优先选最接近的场景。预算只是限制条件，不应该反过来决定用途。</p>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">1. 你准备用这台 VPS 做什么？</label>
                <select value={purpose} onChange={e => setPurpose(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block p-3">
                  <option value="cn_site">中文网站 / 个人博客 / WordPress 起步</option>
                  <option value="wp_long">长期 WordPress / SEO 内容站 / 插件较多</option>
                  <option value="learn">学习 Linux / 跑脚本 / 临时测试</option>
                  <option value="overseas_site">外贸站 / 海外访客网站 / 跨境项目</option>
                  <option value="ai">部署 n8n / Dify / FastGPT / Docker 应用</option>
                  <option value="low_latency">追求大陆低延迟 / 交互体验优先</option>
                  <option value="business">企业业务 / 重要项目 / 更看重稳定性</option>
                  <option value="unsure">还不确定，想要稳妥通用方案</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">2. 主要访客或管理地点在哪里？</label>
                <select value={audience} onChange={e => setAudience(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block p-3">
                  <option value="mainland">中国大陆用户为主</option>
                  <option value="global">国内外都要兼顾</option>
                  <option value="north_america">北美 / 海外用户为主</option>
                  <option value="europe">欧洲用户为主</option>
                  <option value="japan_asia">日本 / 东亚 / 亚洲用户为主</option>
                  <option value="mobile_unicom">移动 / 联通用户体验更重要</option>
                  <option value="unknown">暂时不确定</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">3. 你的网站或应用大概有多重？</label>
                <select value={load} onChange={e => setLoad(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block p-3">
                  <option value="wp_light">轻量 WordPress / Typecho / 普通博客</option>
                  <option value="wp_heavy">WordPress + 宝塔 + 多插件 / 图片较多</option>
                  <option value="static">静态站 / 小工具 / 轻量脚本</option>
                  <option value="docker_light">n8n / 轻量 Docker / 一个小服务</option>
                  <option value="docker_ai">Dify / FastGPT / 多 Docker 服务</option>
                  <option value="important">业务站 / 客户系统 / 不能频繁折腾</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">4. 你能接受的预算范围？</label>
                <select value={budget} onChange={e => setBudget(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block p-3">
                  <option value="qtr50">能接受 $49.99/季 或 $169.99/年</option>
                  <option value="low49">只想控制在 $49.99/年左右</option>
                  <option value="year300">能接受 $299.99/年左右</option>
                  <option value="month50">能接受 $49.99/月左右</option>
                  <option value="month90">能接受 $89.99/月以上</option>
                  <option value="business_budget">业务预算，优先稳定和长期体验</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">5. 你最在乎什么？</label>
                <select value={priority} onChange={e => setPriority(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block p-3">
                  <option value="balanced">综合性价比</option>
                  <option value="save">尽量省钱</option>
                  <option value="speed">访问速度和低延迟</option>
                  <option value="stability">稳定性和业务保障</option>
                  <option value="upgrade">后期可升级、可迁移空间</option>
                </select>
              </div>

              <div className="flex gap-4 pt-2">
                <button type="button" onClick={handleReset} className="px-5 py-3 bg-slate-100 font-medium text-slate-600 rounded-xl hover:bg-slate-200 transition-colors">
                  重置
                </button>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-lg text-white relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
              
              <div className="text-amber-400 font-bold text-sm tracking-wider uppercase mb-2">推荐结果</div>
              <h2 className="text-3xl font-black mb-4">{main.name}</h2>
              <p className="text-slate-300 mb-6 leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">{reason}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-slate-700 border border-slate-600 px-3 py-1.5 rounded-full text-sm font-semibold">{main.price}</span>
                <span className="bg-slate-700 border border-slate-600 px-3 py-1.5 rounded-full text-sm font-semibold">{main.tag}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={main.link} target="_blank" rel="sponsored nofollow noopener" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3.5 px-6 rounded-xl transition-colors w-full sm:w-auto">
                  访问官网选购 <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://stock.bwg.net" target="_blank" rel="nofollow noopener" className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors w-full sm:w-auto">
                  查看实时库存
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  适合人群与场景
                </div>
                <ul className="space-y-2">
                  {main.fit.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm flex gap-2">
                      <span className="text-slate-300">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-500" />
                  不适合的情况
                </div>
                <ul className="space-y-2">
                  {main.notFit.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm flex gap-2">
                      <span className="text-slate-300">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                为什么不是更便宜的那个？
              </div>
              <p className="text-amber-800 text-sm">{main.cheaper}</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
               <div className="font-bold text-slate-900 mb-2">推荐机房 / Location</div>
               <p className="text-slate-600 text-sm">{main.dc}</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-slate-900 text-sm mb-1">备选方案：{backup.name}</div>
                    <div className="text-slate-500 text-sm">{backup.desc}</div>
                  </div>
                  <a href={backup.link} target="_blank" rel="sponsored nofollow noopener" className="whitespace-nowrap shrink-0 text-sm font-bold text-amber-600 hover:text-amber-700">查看备选方案 &rarr;</a>
               </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-slate-900 text-sm mb-1">不建议盲目购买：{avoid.name}</div>
                    <div className="text-slate-500 text-sm">{avoid.cheaper}</div>
                  </div>
                  <a href={avoid.link} target="_blank" rel="sponsored nofollow noopener" className="whitespace-nowrap shrink-0 text-sm font-bold text-amber-600 hover:text-amber-700">仍要查看该方案 &rarr;</a>
               </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm p-4 rounded-xl">
              {note} 下单前请重点核对三件事：价格是否变化、是否有库存、当前套餐能否选择你想要的机房。
            </div>

          </div>
        </div>

        {/* Quick Products */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">常用套餐快速入口</h3>
          <p className="text-slate-500 mb-6">这里保留真正高频的选择，不把所有套餐堆成价格表。点击前建议再核对库存、价格和 Location。</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickProducts.map((p) => (
              <div key={p.key} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col hover:border-amber-300 transition-colors">
                <span className="self-start text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-1 mb-4">{p.tag}</span>
                <h4 className="font-bold text-slate-900 text-lg mb-2">{p.name}</h4>
                <p className="text-sm text-slate-500 mb-4">{p.specs}</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-black text-slate-900">{p.price.split('·')[0].trim()}</span>
                  <a href={p.link} target="_blank" rel="sponsored nofollow noopener" className="text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 py-1.5 px-3 rounded-lg transition-colors">
                    查看
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compare 20/40/80 */}
         <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 overflow-hidden">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">20G、40G、80G 怎么选？</h3>
          <p className="text-slate-500 mb-6">这是新手最容易纠结的地方。简单看下面这张表即可。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap sm:whitespace-normal">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-4 font-semibold text-slate-900">套餐档位</th>
                  <th className="py-4 px-4 font-semibold text-slate-900">更适合谁</th>
                  <th className="py-4 px-4 font-semibold text-slate-900">不适合谁</th>
                  <th className="py-4 px-4 font-semibold text-slate-900">购买判断</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 px-4 font-bold text-slate-900">CN2 GIA-E 20G</td>
                  <td className="py-4 px-4 text-slate-600">轻量博客、单站起步、预算有限</td>
                  <td className="py-4 px-4 text-slate-500">多插件 WordPress、完整 Dify</td>
                  <td className="py-4 px-4 text-slate-600">可以起步，但长期空间较紧</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-slate-900">CN2 GIA-E 40G</td>
                  <td className="py-4 px-4 text-slate-600">正式 WordPress、SEO内容站、宝塔</td>
                  <td className="py-4 px-4 text-slate-500">学Linux、只跑一个小脚本</td>
                  <td className="py-4 px-4 text-slate-600">大多数建站用户稳妥选择</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-slate-900">CN2 GIA-E 80G</td>
                  <td className="py-4 px-4 text-slate-600">Dify、FastGPT、多 Docker 服务</td>
                  <td className="py-4 px-4 text-slate-500">普通博客、新站测试、低预算</td>
                  <td className="py-4 px-4 text-slate-600">买的是内存，非普通建站项</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-slate-900">香港 / 大阪 GIA</td>
                  <td className="py-4 px-4 text-slate-600">低延迟、交互业务、高要求</td>
                  <td className="py-4 px-4 text-slate-500">普通博客、新站起步、低预算</td>
                  <td className="py-4 px-4 text-slate-600">体验好但成本高，勿盲目选</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-sm text-slate-400">
            提醒：VPS 是自管理服务器，购买后仍需要自己配置系统、安全、环境、备份和网站程序。
          </div>
        </div>

      </div>
    </div>
  );
}
