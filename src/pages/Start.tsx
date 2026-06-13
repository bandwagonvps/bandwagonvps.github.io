import { Link } from 'react-router-dom';
import { Calendar, BookOpen, ArrowRight, LayoutDashboard } from 'lucide-react';
import { startArticles } from '../data/articles';
import { useSEO } from '../lib/useSEO';

export function StartPage() {
  useSEO({
    title: '新手指南 - 搬瓦工教程',
    description: '搬瓦工VPS新手系统性购买指南，从判断需求、注册下单，到后台功能梳理和基础教程。'
  });

  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Category Header */}
        <div className="mb-12 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-3 text-amber-600 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <span className="font-semibold text-sm tracking-wide">Category</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">新手指南</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            系统性购买指南，从判断需求、注册下单，到后台功能梳理和基础教程，带你完整踏过购买搬瓦工的每一阶门槛。
          </p>
        </div>

        {/* Article List */}
        <div className="space-y-8">
          {startArticles.map((article) => (
            <article 
              key={article.slug} 
              className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-slate-300 flex flex-col"
            >
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> 完整教程</span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                <Link to={`/start/${article.slug}`} className="hover:text-amber-600 transition-colors">
                  {article.title}
                </Link>
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {article.meta}
              </p>
              
              <div className="mt-auto">
                <Link 
                  to={`/start/${article.slug}`} 
                  className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-500 group"
                >
                  阅读全文 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
          
          {/* Work in progress placeholder for more articles */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-dashed border-slate-300 text-center">
            <p className="text-slate-500 text-sm">更多新手教程正在精编中，即将陆续上线...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
