import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: '01',
    name: '熟悉后台与资源核对',
    description: '进入 KiwiVM 控制面板，查看服务器 IP、流量消耗周期及基础配置。',
  },
  {
    id: '02',
    name: '获取 SSH 管理权限',
    description: '重置 Root 密码，记录专属 SSH 端口号（非默认 22 端口）。',
  },
  {
    id: '03',
    name: '安全连接服务器',
    description: '使用 Termius、Xshell 等主流工具通过 SSH 隧道安全连接 VPS。',
  },
  {
    id: '04',
    name: '一键重装纯净系统',
    description: '原版系统可能含冗余组件，建议在 KiwiVM 面板一键重装为纯净版 Debian 或 Ubuntu。',
  },
  {
    id: '05',
    name: '安全加固与网络优化',
    description: '修改 SSH 默认配置防爆破，并一键开启 BBR 网络加速算法。',
  },
  {
    id: '06',
    name: '建立日常备份策略',
    description: '学习使用搬瓦工自带的免费快照 (Free Snapshots) 功能，防止数据丢失。',
  },
];

export function Roadmap() {
  return (
    <div className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-500">新手必读</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            买后 7 天路线图
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            刚收到开通邮件不知道怎么下手？跟着这条明确的路线图，每天进行一步。
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {steps.map((step) => (
              <div key={step.id} className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 ring-1 ring-slate-700">
                  <span className="text-xs font-bold text-amber-500">{step.id}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{step.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Link
              to="/after-buy/"
              className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4" /> 查看完整图文教程
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
