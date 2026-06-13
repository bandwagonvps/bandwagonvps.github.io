import { AlertTriangle, Info, ShieldCheck, Zap } from 'lucide-react';

const facts = [
  {
    title: '适合谁买',
    description: '寻找极速、稳定网络体验的用户，尤其是建站、企业出海或对线路质量要求苛刻的场景。',
    icon: ShieldCheck,
  },
  {
    title: '不适合谁',
    description: '预算极低、追求大硬盘存储、或仅仅为了短期测试项目（成本过高）。',
    icon: AlertTriangle,
  },
  {
    title: '核心优势',
    description: 'CN2 GIA 等极其优质的专线，极高的在线率，以及极其稳定的工单售后响应。',
    icon: Zap,
  },
  {
    title: '核心劣势',
    description: '单价较高，极少出现低于 $49.99/年的特价，容易缺货，且被部分用户过度神话。',
    icon: Info,
  },
];

export function QuickRead() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600">30秒速读</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            买前必看真相
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            不要被眼花缭乱的评测图表绕晕，搬瓦工的核心竞争力与局限性其实非常简单。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <fact.icon className="h-5 w-5 flex-none text-amber-500" aria-hidden="true" />
                  {fact.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{fact.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
