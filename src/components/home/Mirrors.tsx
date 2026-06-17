import { ShieldAlert, ExternalLink } from 'lucide-react';

export function Mirrors() {
  return (
    <div className="bg-amber-50/50 py-12 border-y border-amber-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="h-8 w-8 text-amber-600" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              🚨 如何安全访问搬瓦工官网？（防失联与防钓鱼指南）
            </h2>
          </div>
          
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-slate-700 leading-relaxed">
              由于特殊的网络环境，搬瓦工国际原版官网 (bandwagonhost.com) 在国内通常无法直接打开。为了保障中国用户能够顺畅购买机器和管理后台，官方推出了多个免翻墙直连官方镜像域名。
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
              <p className="text-red-800 text-sm m-0 flex items-start gap-2">
                <strong className="font-semibold shrink-0">⚠️ 安全警告：</strong>
                <span>请务必认准以下官方指定入口，切勿在来历不明的第三方伪装网站输入账号密码，以免造成财产损失。</span>
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 mt-6">
            <div className="bg-white rounded-xl p-5 border border-amber-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-900">🌐 官方主镜像 1（推荐）</h3>
                </div>
                <p className="text-lg font-mono text-slate-600 mb-4">bwh81.net</p>
              </div>
              <a
                href="https://bwh81.net/aff.php?aff=80471"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-all"
              >
                点击直连官网安全访问 <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-900">🌐 官方备用镜像 2</h3>
                </div>
                <p className="text-lg font-mono text-slate-600 mb-4">bwh89.net</p>
              </div>
              <a
                href="https://bwh89.net/aff.php?aff=80471"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 transition-all"
              >
                点击直连官网安全访问 <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
