import { Link } from 'react-router-dom';

const operators = [
  {
    name: '中国电信',
    status: '极佳',
    desc: '推荐 CN2 GIA 机房，直连速度无敌，晚高峰也顺畅。普通 CN2 也可以作为备选。',
    color: 'text-blue-600 border-blue-200 bg-blue-50',
  },
  {
    name: '中国联通',
    status: '优秀',
    desc: '联通用户自带出国优势。软银 (Softbank) 机房或 CN2 GIA 机房都可以获得极好的体验。',
    color: 'text-orange-600 border-orange-200 bg-orange-50',
  },
  {
    name: '中国移动',
    status: '需注意',
    desc: '移动跨网较复杂。香港 CMI 线路极好但贵，美西可选 CN2 GIA (强行路由)，普通机房不推荐。',
    color: 'text-cyan-600 border-cyan-200 bg-cyan-50',
  },
  {
    name: '不确定 / 面向全球',
    status: '盲选方案',
    desc: '不知道用户是谁，直接无脑上洛杉矶 DC6 或 DC9 (CN2 GIA)，属于最稳妥的万精油选择。',
    color: 'text-slate-600 border-slate-200 bg-slate-50',
  },
];

export function Operators() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600">网络匹配</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            按本地运营商选机房
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            你本地/目标用户的网络环境，决定了你应该买哪个机房，不要盲目跟风。
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {operators.map((op) => (
              <div key={op.name} className={`rounded-2xl p-8 border ${op.color} flex flex-col`}>
                <h3 className="text-xl font-bold">{op.name}</h3>
                <span className="inline-block mt-2 font-mono text-sm font-semibold opacity-80">体验: {op.status}</span>
                <p className="mt-4 text-sm leading-6 opacity-90 flex-grow">
                  {op.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/tools/datacenter-selector/" className="text-sm font-semibold text-slate-900 hover:text-amber-600 underline underline-offset-4">
              进入机房选择器向导
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
