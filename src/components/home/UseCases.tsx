import { Link } from 'react-router-dom';
import { Terminal, Globe, Store, FlaskConical, ArrowRight } from 'lucide-react';

const cases = [
  {
    title: '建站 / 博客',
    description: '使用 WordPress 等系统建立个人博客或小型网站，对访问速度和 SEO 收录有要求。',
    recommendation: '推荐 CN2 GIA 套餐，速度最稳，延迟极低。',
    icon: Globe,
  },
  {
    title: '外贸站 / 跨境电商',
    description: '面向全球客户的商业站点，必须确保全球各地访问都不卡顿，绝不能有宕机风险。',
    recommendation: '推荐香港 CN2 GIA 或 日本东京套餐，企业级保障。',
    icon: Store,
  },
  {
    title: '新手入门与长线投资',
    description: '想熟悉 Linux 操作或部署长期项目。搬瓦工全线走高端路线，如果不差钱可直接买基础款，支持未来无缝一键补差价升级到企业级配置，免去数据迁移之苦。',
    recommendation: '推荐 CN2 GIA-E 基础款，按需平滑升级。',
    icon: Terminal,
  },
  {
    title: '长效稳定网络节点',
    description: '需要全天候在线、晚高峰不降速的极致体验。停止寻找绝版特价机，直接购买常规 CN2 GIA 或限量版，省下折腾的时间投入到核心业务中。',
    recommendation: '推荐常规特惠限量版或标准 CN2 GIA 套餐。',
    icon: FlaskConical,
  },
];

export function UseCases() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600">场景划分</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            按用途选搬瓦工
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            抛开复杂的参数，直接从你打算用它做什么来反推最适合的方案。
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2">
            {cases.map((item) => (
              <div key={item.title} className="flex flex-col rounded-2xl bg-white p-8 ring-1 ring-slate-200">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                    <item.icon className="h-6 w-6 text-amber-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="mt-4 text-base text-slate-600">
                  {item.description}
                </p>
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <p className="text-sm font-medium text-amber-600">{item.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/choose" className="text-sm font-semibold text-slate-900 hover:text-amber-600 inline-flex items-center gap-1 group">
               查看完整套餐机房对比 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
