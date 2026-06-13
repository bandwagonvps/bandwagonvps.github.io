import { Link } from 'react-router-dom';
import { Tag, AlertCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function Coupons() {
  return (
    <div className="bg-slate-900 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-rose-500 flex items-center justify-center gap-2">
            <AlertCircle className="w-5 h-5" /> 谨慎下单
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            🛑 2026 最新优惠码说明与下单防坑检查表
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            别再全网到处找优惠码了，目前官方已全面暂停折扣代码。结账时的 "Promo Code" 输入框是系统默认保留的。目前市场上所有标榜“最新可用”的搬瓦工优惠码均已彻底失效。许多内容农场会用过期代码骗取点击。
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-2xl bg-rose-500/10 p-8 ring-1 ring-rose-500/30 backdrop-blur-sm sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-white mb-4">💡 目前的最佳策略</h3>
              <p className="text-sm text-slate-300 mb-6 max-w-md">
                停止无意义的搜索，直接通过官方安全通道购买当前库存的高性价比套餐。早一天部署，早一天产生价值。
              </p>
              <a
                href="https://bwh81.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 transition-all w-full sm:w-auto"
              >
                👉 点击进入官方安全直连通道
              </a>
            </div>
            
            <div className="mt-10 pt-8 border-t border-rose-500/20">
              <h4 className="text-base font-bold text-white mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-400" />
                下单前最终检查清单
              </h4>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="flex items-center justify-center w-5 h-5 rounded border border-slate-500 mt-0.5 shrink-0 bg-slate-800"></div>
                  <div>
                    <strong className="text-white block mb-1">关闭任何代理软件</strong>
                    <span>必须使用本地真实 IP 下单。如果 IP 地址与注册资料国家不一致，会被判定为欺诈（Fraud）。</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="flex items-center justify-center w-5 h-5 rounded border border-slate-500 mt-0.5 shrink-0 bg-slate-800"></div>
                  <div>
                    <strong className="text-white block mb-1">确认退款资格</strong>
                    <span>仅支持新账号首次购买、少于 30 天且 IP 未被中国大陆墙掉的情况申请全额退款。老用户无法再次退款。</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="flex items-center justify-center w-5 h-5 rounded border border-slate-500 mt-0.5 shrink-0 bg-slate-800"></div>
                  <div>
                    <strong className="text-white block mb-1">避免囤积盲目消费</strong>
                    <span>搬瓦工支持一键补差价升级。预算有限可先买基础款，后续随业务增长直接升级。</span>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 flex justify-center">
                <Link to="/tools/order-checklist" className="text-sm font-medium text-slate-400 hover:text-white transition-colors underline decoration-slate-600 underline-offset-4">
                  查看详细的下单前检查工具 &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
