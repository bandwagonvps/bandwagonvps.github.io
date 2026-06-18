import { Link } from 'react-router-dom';
import { Activity, ServerCrash, Ban, HardDrive, Cpu, Search } from 'lucide-react';

const issues = [
  { name: '🔌 SSH 拒绝连接 / 超时', desc: '排查本地网络与端口拦截', icon: Ban, color: 'text-red-500', link: '/troubleshoot/ssh-connection-failed-troubleshooting' },
  { name: '🌐 网站打不开 (502/504 等)', desc: '排查 Nginx/Apache 状态与内存溢出', icon: ServerCrash, color: 'text-orange-500', link: '/troubleshooting' },
  { name: '🐌 访问速度突然极速变慢', desc: '查看机房路由波动与测试报告', icon: Activity, color: 'text-amber-500', link: '/troubleshooting' },
  { name: '🚫 部分端口不通 / 被阻断', desc: '测试 IP 连通性与 TCP 阻断状态', icon: Search, color: 'text-blue-500', link: '/troubleshooting' },
  { name: '💾 磁盘写满导致无法启动', desc: '清理日志文件与扩容指南', icon: HardDrive, color: 'text-slate-500', link: '/troubleshooting' },
  { name: '🔥 持续高 CPU 占用警告', desc: '排查异常进程与恶意脚本', icon: Cpu, color: 'text-rose-500', link: '/troubleshooting' },
];

export function Troubleshooting() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600">自检与恢复</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            🚑 常见故障排查与自救指南
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            连不上了？IP 被封了？网站突然 502？遇到问题先别急着提交工单。这里汇总了最常见突发状况的精准自检手段。
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {issues.map((issue) => (
              <Link
                key={issue.name}
                to={issue.link}
                className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-amber-500/50"
              >
                <issue.icon className={`h-6 w-6 flex-shrink-0 mt-1 ${issue.color}`} />
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{issue.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{issue.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium">
            <span className="text-slate-500">实在无法解决？</span>
            <Link to="/templates" className="text-amber-600 hover:text-amber-500 underline decoration-amber-600/30 underline-offset-4 transition-colors">
              获取标准化英文工单模板 (直接提交给官方客服)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
