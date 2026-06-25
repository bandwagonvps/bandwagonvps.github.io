import { Link } from 'react-router-dom';
import { HelpCircle, ShoppingCart, Settings, AlertOctagon, ArrowRight } from 'lucide-react';

const stages = [
  {
    title: '还没买',
    description: '在犹豫搬瓦工好不好，适不适合自己，不清楚有哪些坑。',
    icon: HelpCircle,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    link: '/start/',
    linkText: '阅读新手指南',
  },
  {
    title: '准备买',
    description: '决定要买了，但不知道选哪个套餐机房，想找个最新的优惠码。',
    icon: ShoppingCart,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    link: '/choose/',
    linkText: '使用套餐选择器',
  },
  {
    title: '已经买了',
    description: '刚买完，不知道怎么登录后台，怎么登 SSH，怎么换 IP 或改密码。',
    icon: Settings,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    link: '/after-buy/',
    linkText: '查看买后教程',
  },
  {
    title: '出问题了',
    description: '连不上了，IP 被封了，网站打不开了，或者想找人写工单退款。',
    icon: AlertOctagon,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    link: '/troubleshoot/',
    linkText: '进入故障排查',
  },
];

export function UserStage() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600">快速定位</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            我现在处在哪个阶段？
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            不用从头开始看所有的文章。请根据你当前的状态，直接进入最适合你的频道。
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
            {stages.map((stage) => (
              <div key={stage.title} className="flex flex-col rounded-2xl bg-white p-8 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50">
                  <stage.icon className={`h-6 w-6 ${stage.color}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">{stage.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600 flex-grow">
                  {stage.description}
                </p>
                <div className="mt-8">
                  <Link
                    to={stage.link}
                    className="group inline-flex items-center gap-x-2 text-sm font-semibold leading-6 text-slate-900"
                  >
                    {stage.linkText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
