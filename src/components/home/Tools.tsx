import { Link } from 'react-router-dom';
import { Settings2, Calculator, ClipboardCheck, Network } from 'lucide-react';

const tools = [
  {
    name: '套餐选择器',
    description: '输入用途、人群、预算，直接输出推荐购买方向与禁忌。',
    icon: Settings2,
    path: '/tools/plan-selector',
  },
  {
    name: '总成本计算器',
    description: '计算1-3年真实持有成本，包含建站等隐藏成本，判断续费价值。',
    icon: Calculator,
    path: '/tools/cost-calculator',
  },
  {
    name: '下单检查清单',
    description: '下单前的防呆工具，排除线路、机房和预算的典型误区。',
    icon: ClipboardCheck,
    path: '/tools/order-checklist',
  },
  {
    name: '机房选择器',
    description: '通过本地运营商和目标受众人群，精准定位不踩坑的机房。',
    icon: Network,
    path: '/tools/datacenter-selector',
  },
];

export function Tools() {
  return (
    <div className="bg-white py-24 sm:py-32 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600">辅助决策</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            互动工具中心
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            我们不做干瘪的文章罗列，而是通过轻量工具，帮你快速完成复杂决策。
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <Link key={tool.name} to={tool.path} className="group block">
                <div className="relative h-full overflow-hidden rounded-2xl bg-slate-50 p-8 ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-100 hover:ring-slate-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 mb-6 group-hover:scale-110 transition-transform">
                    <tool.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-slate-600">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
