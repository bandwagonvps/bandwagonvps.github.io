import { Link } from 'react-router-dom';
import { Server } from 'lucide-react';

const footerLinks = {
  content: [
    { name: '新手指南', path: '/start/' },
    { name: '优惠码', path: '/coupon/' },
    { name: '套餐机房', path: '/choose/' },
    { name: '对比替代', path: '/alternatives/' },
  ],
  support: [
    { name: '关于我们', path: '/about/' },
    { name: '故障排查', path: '/troubleshoot/' },
    { name: '网站地图', path: '/sitemap/' },
  ],
  tools: [
    { name: '套餐选择器', path: '/tools/plan-selector/' },
    { name: '搬瓦工库存', path: '/stock/' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-white">
                <Server size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">搬瓦工中文网</span>
            </Link>
            <p className="text-sm leading-6 text-slate-600 max-w-xs">
              专注于真实评测与结构化指南，帮你做对每次购买和续费决策。我们提供清晰的路径，不制造庞大冗余的数据库。
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-slate-900">核心内容</h3>
                <ul className="mt-6 space-y-4">
                  {footerLinks.content.map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} className="text-sm leading-6 text-slate-600 hover:text-slate-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-slate-900">售后与支持</h3>
                <ul className="mt-6 space-y-4">
                  {footerLinks.support.map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} className="text-sm leading-6 text-slate-600 hover:text-slate-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-slate-900">工具中心</h3>
                <ul className="mt-6 space-y-4">
                  {footerLinks.tools.map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} className="text-sm leading-6 text-slate-600 hover:text-slate-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-200 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-500 text-center">
            &copy; {new Date().getFullYear()} 搬瓦工中文网. All rights reserved. 不隶属于 BandwagonHost 官方。
          </p>
        </div>
      </div>
    </footer>
  );
}
