import { Copy, ExternalLink, Activity } from 'lucide-react';
import { useState } from 'react';

const testIps = [
  {
    location: '美国洛杉矶 DC6',
    network: 'CN2 GIA-E (10Gbps)',
    bestFor: '建站、外贸出海首选',
    ip: '162.244.241.102',
    link: 'https://dc6.bandwagonhost.com',
    linkText: '测速地址',
  },
  {
    location: '美国洛杉矶 DC9',
    network: 'CN2 GIA (1Gbps 独立)',
    bestFor: '经典直连、预算玩家',
    ip: '65.49.131.102',
    link: 'https://dc9.bandwagonhost.com',
    linkText: '测速地址',
  },
  {
    location: '日本大阪 JPOS_1',
    network: 'Softbank 软银 (10Gbps)',
    bestFor: '联通用户晚高峰极速',
    ip: '185.212.59.222',
    link: 'https://jpos.bandwagonhost.com',
    linkText: '测速地址',
  },
  {
    location: '美国洛杉矶 DC3',
    network: 'CN2 GT (1Gbps)',
    bestFor: '新手入门、电信备选',
    ip: '23.252.103.101',
    link: 'https://dc3.bandwagonhost.com',
    linkText: '测速地址',
  },
  {
    location: '日本东京 / 香港 HK85',
    network: '顶级高防直连专线',
    bestFor: '极低延迟要求、企业级',
    ip: '官方暂未公开',
    note: '(防 DDoS 保护中)',
    link: '#',
    linkText: '暂不提供公共测速',
  },
];

export function TestIPs() {
  const [copiedIp, setCopiedIp] = useState<string | null>(null);

  const handleCopy = (ip: string) => {
    if (ip.includes('未公开')) return;
    navigator.clipboard.writeText(ip);
    setCopiedIp(ip);
    setTimeout(() => setCopiedIp(null), 2000);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center shrink-0">
          <h2 className="text-base font-semibold leading-7 text-amber-600 flex items-center justify-center gap-2">
            <Activity className="w-5 h-5" /> 真实网络性能
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            ⚡ 核心机房网络真实测速与官方测试 IP
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            纸上谈兵不如亲自一测。以下是搬瓦工官方明确公开的常规测试 IP 和测速地址（注：为防止恶意 DDoS 攻击，部分顶级亚洲机房官方不提供公共测速节点）。建议使用电脑终端的 <code>ping</code> 命令进行测试。
          </p>
        </div>

        <div className="mt-16 flow-root max-w-5xl mx-auto">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-slate-300">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6">
                        机房代号 & 核心线路
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                        适用场景
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                        官方测试 IP
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                        官方测速站 / Looking Glass
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {testIps.map((item, idx) => (
                      <tr key={idx}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="font-semibold text-slate-900">{item.location}</div>
                          <div className="text-slate-500">{item.network}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                          {item.bestFor}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm font-mono text-slate-700">
                          <div className="flex items-center gap-2">
                            <span>
                              {item.ip}
                              {item.note && <span className="text-xs text-slate-400 block">{item.note}</span>}
                            </span>
                            {!item.ip.includes('未公开') && (
                              <button
                                onClick={() => handleCopy(item.ip)}
                                className="text-slate-400 hover:text-amber-500 transition-colors"
                                title="复制 IP"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                            )}
                            {copiedIp === item.ip && <span className="text-xs text-emerald-500">已复制</span>}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                          {item.link === '#' ? (
                            <span className="text-slate-400">{item.linkText}</span>
                          ) : (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800"
                            >
                              {item.linkText} <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
