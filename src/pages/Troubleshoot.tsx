import { Link } from 'react-router-dom';
import { Calendar, BookOpen, ArrowRight, Activity } from 'lucide-react';
import { troubleshootArticles } from '../data/articles';
import { useSEO } from '../lib/useSEO';

export function TroubleshootPage() {
  useSEO({
    title: '故障排查',
    description: '搬瓦工 SSH 连不上？遇到阻断或失联问题？按照教程进行深度排查，解决网络、端口、防护墙等常见问题。'
  });

  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Category Header */}
        <div className="mb-12 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-3 text-red-500 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
              <Activity className="h-5 w-5" />
            </div>
            <span className="font-semibold text-sm tracking-wide">Category</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">故障排查</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            搬瓦工 SSH 连不上？遇到阻断或失联问题？按照教程进行深度排查，解决网络、端口、防护墙等常见问题。
          </p>
        </div>

        {/* Article List */}
        <div className="space-y-8">
          {troubleshootArticles.map((article) => (
            <article 
              key={article.slug} 
              className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-slate-300 flex flex-col"
            >
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> 问题排查</span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                <Link to={`/troubleshoot/${article.slug}`} className="hover:text-red-500 transition-colors">
                  {article.title}
                </Link>
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {article.meta}
              </p>
              
              <div className="mt-auto">
                <Link 
                  to={`/troubleshoot/${article.slug}`} 
                  className="inline-flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-400 group"
                >
                  阅读方案 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
          
          <div className="bg-slate-50 p-8 rounded-2xl border border-dashed border-slate-300 text-center">
            <p className="text-slate-500 text-sm">更多常见故障排查正在添加中...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
