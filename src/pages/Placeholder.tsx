import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '../lib/useSEO';

export function PlaceholderPage() {
  const location = useLocation();
  const pathName = location.pathname;
  
  let title = "页面建设中";
  let desc = "我们的内容正在紧锣密鼓地筹备中。";
  
  if (pathName.includes('start')) title = "新手指南";
  else if (pathName.includes('choose')) title = "套餐机房选择与推荐";
  else if (pathName.includes('after-buy')) title = "买后教程与服务器管理";
  else if (pathName.includes('troubleshooting')) title = "故障排查与自救方案";
  else if (pathName.includes('tools')) title = "决策辅助工具中心";
  else if (pathName.includes('coupon')) title = "优惠码与下单防坑";
  else if (pathName.includes('speed')) title = "线路测速体验";
  else if (pathName.includes('website')) title = "建站技术教程";
  else if (pathName.includes('account')) title = "账号、续费与售后";
  else if (pathName.includes('alternatives')) title = "搬瓦工对比与替代方案";
  else if (pathName.includes('templates')) title = "英文售后工单模板大全";

  useSEO({
    title: title,
    description: desc
  });

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-amber-600">Comming Soon</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
        <p className="mt-6 text-base leading-7 text-slate-600">
          {desc}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            <ArrowLeft className="w-4 h-4" /> 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
