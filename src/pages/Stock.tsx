import { useState, useEffect } from 'react';
import { Server, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { useSEO } from '../lib/useSEO';
import { stockCategories as defaultStockCategories } from '../data/stockPlans';

export function StockPage() {
  const [categories, setCategories] = useState(defaultStockCategories);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useSEO({
    title: '搬瓦工库存实时监控 - 2026最新',
    description: '搬瓦工实时库存监控，包含 HK 香港 CN2 GIA、东京、大阪、DC6 CN2 GIA-E 限量版及常规套餐的库存状态及购买地址。',
  });

  const fetchStock = async () => {
    setIsLoading(true);
    try {
      let data = null;
      let isHtml = false;
      
      // Try local API first (works in dev or Cloud Run)
      try {
        const res = await fetch('/api/stock-status');
        if (res.ok) {
          const contentType = res.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            data = await res.json();
          } else {
             isHtml = true;
          }
        } else {
          isHtml = true; // 404 in GitHub pages
        }
      } catch (e) {
        isHtml = true; // Network error or something
      }

      // If local API returned HTML (GitHub Pages static host) or failed, use CORS proxy
      if (isHtml || !data) {
        const corsRes = await fetch('https://corsproxy.io/?https://stock.bwg.net/products.json');
        if (corsRes.ok) {
           data = await corsRes.json();
        }
      }

      if (data && Array.isArray(data)) {
        const stockMap = new Map();
        data.forEach((item: any) => {
          if (item.pid) {
            stockMap.set(item.pid.toString(), item.status === 1);
          }
        });
        
        setCategories(prev => prev.map(category => ({
          ...category,
          plans: category.plans.map(plan => ({
            ...plan,
            stock: stockMap.has(plan.pid) ? stockMap.get(plan.pid) : plan.stock
          }))
        })));
        
        setLastUpdate(new Date());
      }
    } catch (error) {
      console.error('Failed to fetch real-time stock:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStock();
    // Auto refresh every 5 minutes
    const interval = setInterval(fetchStock, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-50 py-12 sm:py-16 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              搬瓦工库存监控
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              实时查看搬瓦工各个套餐的库存状态，限量版没货时不要等，先看能买的常规好线路套餐。
            </p>
          </div>
          <div className="shrink-0">
            <button 
              onClick={fetchStock}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white ring-1 ring-slate-200 shadow-sm rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-amber-500' : 'text-slate-400'}`} />
              {isLoading ? '更新中...' : '刷新库存'}
            </button>
            <p className="text-xs text-slate-500 mt-2 text-right">
              最新更新: {lastUpdate.toLocaleTimeString()}
            </p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          <div className="flex-1 min-w-0 w-full">
            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category.name} id={`category-${category.name.replace(/\s+/g, '-')}`} className="bg-white rounded-3xl shadow-sm ring-1 ring-slate-200 overflow-hidden shrink-0 scroll-mt-6">
              <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Server className="w-5 h-5 text-amber-500" />
                  {category.name}
                </h2>
                <p className="text-sm text-slate-500 mt-1">{category.description}</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left min-w-[760px]">
                  <thead className="bg-slate-50/50 text-slate-500 font-medium border-b border-slate-100">
                    <tr>
                      <th className="px-3 md:px-5 py-4 w-[28%]">套餐名称</th>
                      <th className="px-3 md:px-5 py-4 w-[9%]">内存</th>
                      <th className="px-3 md:px-5 py-4 w-[9%]">SSD</th>
                      <th className="px-3 md:px-5 py-4 w-[10%]">流量 / 月</th>
                      <th className="px-3 md:px-5 py-4 w-[10%]">带宽</th>
                      <th className="px-3 md:px-5 py-4 w-[14%]">价格</th>
                      <th className="px-3 md:px-5 py-4 w-[10%]">状态</th>
                      <th className="px-3 md:px-5 py-4 w-[10%] text-center">购买</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {category.plans.map((plan, index) => (
                      <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-3 md:px-5 py-4 font-medium text-slate-900">{plan.name}</td>
                        <td className="px-3 md:px-5 py-4 text-slate-600">{plan.ram}</td>
                        <td className="px-3 md:px-5 py-4 text-slate-600">{plan.ssd}</td>
                        <td className="px-3 md:px-5 py-4 text-slate-600">{plan.traffic}</td>
                        <td className="px-3 md:px-5 py-4 text-slate-600">{plan.port}</td>
                        <td className="px-3 md:px-5 py-4 text-slate-600 font-medium whitespace-nowrap">{plan.price}</td>
                        <td className="px-3 md:px-5 py-4">
                          {plan.stock ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              有货
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700 ring-1 ring-inset ring-rose-600/10">
                              <XCircle className="w-3.5 h-3.5" />
                              缺货
                            </span>
                          )}
                        </td>
                        <td className="px-3 md:px-5 py-4 text-center">
                          <a
                            href={plan.stock ? `https://bwh81.net/cart.php?a=add&pid=${plan.pid}&aff=80471` : "#"}
                            target={plan.stock ? "_blank" : "_self"}
                            rel={plan.stock ? "noopener noreferrer" : ""}
                            className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-all ${
                              plan.stock 
                                ? "bg-amber-500 text-white hover:bg-amber-400 ring-1 ring-amber-600/50" 
                                : "bg-slate-100 text-slate-400 cursor-not-allowed"
                            }`}
                            onClick={(e) => !plan.stock && e.preventDefault()}
                          >
                            直达购买
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

            </div>
            
            <div id="stock-guide" className="mt-16 bg-white rounded-3xl shadow-sm ring-1 ring-slate-200 overflow-hidden px-8 py-10 sm:px-12 sm:py-14 scroll-mt-6">
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
              如果你在官网看到满屏的 <strong className="text-slate-900">"Out of Stock"</strong>，别怀疑，这就是搬瓦工目前的常态。
            </p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              圈子里大家天天盯着的“库存”，其实根本不是那些几百刀的常规机器，而是像 <strong className="text-slate-900">$46.80/年、$49.99/年的 CN2 GIA 限量版</strong>，或者是逢年过节偶尔放出的 <strong className="text-slate-900">The Plan</strong> 这种配置翻倍的怪物。这些极其稀缺的机器，官方永远在玩“饥饿营销”，每次补货基本几分钟内就被脚本和真实玩家秒空。
            </p>

            <h3 className="mt-10 text-2xl font-bold text-slate-900">怎么才能抢到补货库存？</h3>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              去官网毫无目的地手动刷网页是不现实的。想成功上车，你必须缩短信息差，建议直接用下面这三招：
            </p>
            <ul className="mt-4 space-y-3 text-base text-slate-600 list-disc list-inside marker:text-amber-500">
              <li>
                <strong className="text-slate-900">收藏本页面（Ctrl+D / Cmd+D）：</strong>强烈建议把这个页面加入浏览器书签。我会在这里实时同步搬瓦工最新的库存状态和直达购买链接。没事点开看一眼，只要看到亮绿灯有货，直接点进去秒，比你自己去官网翻找靠谱得多。
              </li>
              <li>
                <strong className="text-slate-900">上 TG 监控：</strong>如果你习惯用 Telegram，可以直接搜相关的补货机器人频道开推送。机器一响，立刻点进直达链接下单。
              </li>
              <li>
                <strong className="text-slate-900">卡准特殊节点：</strong>黑五、网一、双十一，或者官方偶尔的周年庆。根据历年经验，这几个时间点放稀缺库存的概率最大。
              </li>
            </ul>

            <h3 className="mt-10 text-2xl font-bold text-rose-600 flex items-center gap-2">老玩家警告：续期（续费）就是保命！⚠️</h3>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              相比于每天焦虑地蹲库存，很多老玩家踩过最惨的坑是：手里拿着绝版的“传家宝”，却因为忘记续期被系统删机。
            </p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              这里必须要强调搬瓦工的规则：只要是目前无库存的限量版套餐，<strong className="text-rose-600">一旦你账单逾期未付导致机器被回收，不管你发多少个工单（Ticket），客服也绝对不会给你恢复。</strong> 拍断大腿也没用。
            </p>
            
            <h4 className="mt-8 text-lg font-bold text-slate-900">怎么防范续期翻车？</h4>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              千万别百分百信任信用卡的自动扣款，国内卡经常碰到风控拦截。最稳妥的保机方法只有一个：
            </p>
            <ol className="mt-4 space-y-3 text-base list-decimal list-inside marker:text-amber-500 font-medium text-slate-900 bg-amber-50 p-6 rounded-2xl border border-amber-100">
              <li>登录搬瓦工后台，点击 Billing -&gt; Add Funds。</li>
              <li>提前往账户里充值几十美金余额。</li>
            </ol>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              只要账户有余额，账单生成时系统就会优先秒扣。只要你一直续费，官方就会一直锁定你当年的购买底价（哪怕现在同配置已经涨上了天）。<strong className="text-slate-900">保住手里的低价库存，是最优解。</strong>
            </p>

            <h3 className="mt-10 text-2xl font-bold text-slate-900">到底等还是买现货？</h3>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              如果你只是想买个玩具，那可以慢慢蹲限量版库存。但如果你是正儿八经用来跑业务或者建站——比如跑一个几千条数据量、带 Payload CMS 等无头后台的重型企业站，那么<strong className="text-slate-900">晚高峰的网络稳定性才是第一生产力</strong>。
            </p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              这种情况下，别去卷限量版了。<strong className="text-slate-900">直接入手目前还有现货的常规企业级 CN2 GIA-E 甚至香港机房。早买早享受，业务跑起来赚的钱，远比省下那点差价多得多。</strong>
            </p>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block w-36 shrink-0 sticky top-24">
            <div className="bg-white rounded-3xl shadow-sm ring-1 ring-slate-200 p-4 overflow-hidden">
              <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-3 px-1">快捷导航</h3>
              <nav className="space-y-1 max-h-[calc(100vh-8rem)] overflow-y-auto pr-1 custom-scrollbar">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={`#category-${category.name.replace(/\s+/g, '-')}`}
                    className="block px-2 py-2 text-xs text-slate-600 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-colors font-medium leading-relaxed"
                  >
                    {category.name}
                  </a>
                ))}
                <div className="my-2 border-t border-slate-100"></div>
                <a
                  href="#stock-guide"
                  className="block px-2 py-2 text-xs text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-xl transition-colors font-semibold shadow-sm ring-1 ring-amber-600/10 leading-relaxed"
                >
                  抢库存与防翻车指南
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
