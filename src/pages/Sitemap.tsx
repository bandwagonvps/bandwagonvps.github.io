import { Link } from 'react-router-dom';
import { Network, Home as HomeIcon, Map, Info, BookOpen } from 'lucide-react';
import { useSEO } from '../lib/useSEO';
import { startArticles, chooseArticles, alternativesArticles, troubleshootArticles } from '../data/articles';

export function SitemapPage() {
  useSEO({
    title: '网站地图 Sitemap',
    description: '搬瓦工中文网所有栏目与文章结构的完整地图，方便您快速查找所需的 VPS 选购与排障教程。'
  });

  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-12 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-3 text-slate-600 mb-4">
             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200">
              <Map className="h-5 w-5" />
            </div>
            <span className="font-semibold text-sm tracking-wide">Sitemap</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">网站地图</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {/* Main Pages */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-2">
              <HomeIcon className="w-5 h-5 text-amber-500" /> 主要栏目
            </h2>
            <ul className="space-y-4 font-medium text-slate-700">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">首页 Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">关于我们 About</Link></li>
              <li><Link to="/start" className="hover:text-amber-500 transition-colors">新手入门 Getting Started</Link></li>
              <li><Link to="/choose" className="hover:text-amber-500 transition-colors">选机房指南 Choosing Locations</Link></li>
              <li><Link to="/alternatives" className="hover:text-amber-500 transition-colors">替代与对比 Alternatives</Link></li>
              <li><Link to="/troubleshoot" className="hover:text-amber-500 transition-colors">故障排查 Troubleshooting</Link></li>
              <li><Link to="/tool" className="hover:text-amber-500 transition-colors">IP 测速与分析 Tools</Link></li>
              <li><Link to="/stock" className="hover:text-amber-500 transition-colors">实时库存监控 Stock Monitor</Link></li>
              <li><Link to="/sitemap" className="hover:text-amber-500 transition-colors">网站地图 Sitemap</Link></li>
            </ul>
          </section>

          {/* Start Articles */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-2">
              <BookOpen className="w-5 h-5 text-amber-500" /> 新手入门文章
            </h2>
            <ul className="space-y-4 text-slate-600 text-sm">
              {startArticles.map(article => (
                <li key={article.slug}>
                  <Link to={`/start/${article.slug}`} className="hover:text-amber-500 transition-colors block">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Choose Articles */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-2">
              <Network className="w-5 h-5 text-amber-500" /> 机房选择指南
            </h2>
            <ul className="space-y-4 text-slate-600 text-sm">
              {chooseArticles.map(article => (
                <li key={article.slug}>
                  <Link to={`/choose/${article.slug}`} className="hover:text-amber-500 transition-colors block">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Alternatives & Troubleshoot */}
          <section className="space-y-12">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Info className="w-5 h-5 text-amber-500" /> 对比与替代方案
              </h2>
              <ul className="space-y-4 text-slate-600 text-sm">
                {alternativesArticles.map(article => (
                  <li key={article.slug}>
                    <Link to={`/alternatives/${article.slug}`} className="hover:text-amber-500 transition-colors block">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Info className="w-5 h-5 text-amber-500" /> 故障排查
              </h2>
              <ul className="space-y-4 text-slate-600 text-sm">
                {troubleshootArticles.map(article => (
                  <li key={article.slug}>
                    <Link to={`/troubleshoot/${article.slug}`} className="hover:text-amber-500 transition-colors block">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
