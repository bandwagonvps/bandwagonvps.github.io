import { useState, useEffect } from 'react';
import Markdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { List, BookOpen, ChevronRight, Home, Calendar, Clock, User } from 'lucide-react';
import { Link, useParams, Navigate, useLocation } from 'react-router-dom';
import { startArticles, chooseArticles, alternativesArticles } from '../data/articles';
import { useSEO } from '../lib/useSEO';
import { RecommendedPlansWidget } from '../components/layout/RecommendedPlansWidget';

const allArticles = [...startArticles, ...chooseArticles, ...alternativesArticles];

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = allArticles.find(a => a.slug === slug);
  const [activeId, setActiveId] = useState<string>('');
  const [isTocExpanded, setIsTocExpanded] = useState(true);

  useSEO({
    title: article?.seoTitle || article?.title,
    description: article?.meta
  });

  useEffect(() => {
    if (!article) return;
    
    const handleScroll = () => {
      const headingElements = article.toc.map((item) => document.getElementById(item.id));
      
      let currentActiveId = '';
      for (const element of headingElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentActiveId = element.id;
          }
        }
      }
      
      if (currentActiveId) {
        setActiveId(currentActiveId);
      } else if (window.scrollY < 150) {
        setActiveId('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  if (!article) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center min-h-[50vh]">
        <p className="text-lg text-slate-500">文章不存在或已下线</p>
        <Link to="/" className="mt-4 text-amber-600 hover:underline">返回首页</Link>
      </div>
    );
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isSetup = article.category === 'start';
  const themeAccentBg = isSetup ? 'bg-amber-500' : 'bg-emerald-500';
  const themeAccentText = isSetup ? 'text-amber-600' : 'text-emerald-600';
  const themeBadgeBg = isSetup ? 'bg-amber-50' : 'bg-emerald-50';
  const themeBadgeRing = isSetup ? 'ring-amber-500/20' : 'ring-emerald-500/20';
  const themeBlockquoteBg = isSetup ? 'bg-amber-50/50' : 'bg-emerald-50/50';
  const themeBlockquoteBorder = isSetup ? 'border-amber-500' : 'border-emerald-500';
  const themeBlockquoteText = isSetup ? 'text-amber-900/90' : 'text-emerald-900/90';

  const proseLinkClass = isSetup 
    ? 'prose-a:text-amber-600 hover:prose-a:text-amber-500' 
    : 'prose-a:text-emerald-600 hover:prose-a:text-emerald-500';

  const proseWrapperClass = `prose prose-slate prose-base sm:prose-lg max-w-none prose-a:font-medium prose-headings:scroll-mt-28 prose-li:marker:text-slate-400 prose-img:rounded-2xl ${proseLinkClass}`;

  const components: Components = {
    h1: () => null,
    h2: ({ node, children, ...props }) => {
      const extractText = (item: any): string => {
        if (typeof item === 'string') return item;
        if (Array.isArray(item)) return item.map(extractText).join('');
        if (item?.props?.children) return extractText(item.props.children);
        return '';
      };
      
      const text = extractText(children);
      
      let id = '';
      if (article.toc) {
        const normalize = (s: string) => s.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '');
        const normText = normalize(text);
        const tocItem = article.toc.find(item => {
           const normTitle = normalize(item.title);
           if (!normText || !normTitle) return false;
           return normText.includes(normTitle) || normTitle.includes(normText);
        });
        if (tocItem) {
          id = tocItem.id;
        }
      }
      
      return (
        <h2 id={id || undefined} className="flex items-center gap-3 mt-0 mb-8 scroll-mt-28 group" {...props}>
          <span className={`w-1.5 h-7 rounded-full inline-block ${themeAccentBg}`}></span>
          <span className="text-2xl font-bold text-slate-900 border-b-0 pb-0">{children}</span>
        </h2>
      );
    },
    h3: ({ node, children, ...props }) => (
      <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 flex items-center gap-2 before:content-[''] before:block before:w-1.5 before:h-1.5 before:bg-slate-300 before:rounded-full" {...props}>
        {children}
      </h3>
    ),
    table: ({ node, ...props }) => (
      <div className="my-8 rounded-xl border border-slate-200 shadow-sm overflow-hidden not-prose bg-white">
        <table className="w-full text-left border-collapse text-sm" {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => (
      <thead className="bg-slate-50 border-b border-slate-200 text-slate-700" {...props} />
    ),
    th: ({ node, ...props }) => (
      <th className="px-6 py-4 font-semibold text-slate-900" {...props} />
    ),
    td: ({ node, ...props }) => (
      <td className="px-6 py-4 border-b border-slate-100 last:border-0 text-slate-600 align-top leading-relaxed" {...props} />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote className={`not-prose my-8 border-l-4 py-4 px-6 rounded-r-xl shadow-sm ${themeBlockquoteBg} ${themeBlockquoteBorder}`}>
        <p className={`font-medium leading-relaxed m-0 text-[15px] ${themeBlockquoteText}`}>
          {props.children}
        </p>
      </blockquote>
    ),
    hr: () => null, // Hide horizontal rules since we style blocks now
  };

  let categoryName = '如何选择';
  let relatedList = chooseArticles;
  if (article.category === 'start') {
    categoryName = '新手指南';
    relatedList = startArticles;
  } else if (article.category === 'alternatives') {
    categoryName = '对比与替代方案';
    relatedList = alternativesArticles;
  }
  
  const categoryPath = `/${article.category}`;

  // Split content into blocks by ## headings, and remove markdown horizontal rules '---'
  const cleanContent = article.content.replace(/^---\s*$/gm, '');
  const contentBlocks = cleanContent.split(/(?=^##\s+)/m);

  // Split intro block to insert TOC after first paragraph
  const introBlocks = contentBlocks[0].split('\n\n');
  const firstParaIdx = introBlocks.findIndex(b => b.trim() !== '' && !b.trim().startsWith('#'));
  const splitIndex = firstParaIdx !== -1 ? firstParaIdx + 1 : 1;
  const beforeTOC = introBlocks.slice(0, splitIndex).join('\n\n');
  const afterTOC = introBlocks.slice(splitIndex).join('\n\n');

  return (
    <div className="bg-slate-50 py-12 sm:py-16 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-900 flex items-center gap-1"><Home className="w-4 h-4" /></Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <Link to={categoryPath} className="hover:text-slate-900">{categoryName}</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-slate-900 truncate max-w-xs">{article.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Article Content */}
          <div className="lg:w-3/4 space-y-8">
            {/* Header and Intro Block */}
            <article className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm ring-1 ring-slate-200">
              {/* Custom Hero Header */}
              <header className="mb-10 pb-10 border-b border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${themeBadgeBg} ${themeAccentText} ${themeBadgeRing}`}>
                    {categoryName}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  {article.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    发布于 {article.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    阅读时间约 {Math.max(1, Math.ceil(article.content.length / 500))} 分钟
                  </span>
                </div>
              </header>

              <div className={proseWrapperClass}>
                <Markdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={components}
                >
                  {beforeTOC}
                </Markdown>

                {/* Inline TOC */}
                {article.toc && article.toc.length > 0 && (
                  <div className="bg-slate-50 p-6 rounded-2xl ring-1 ring-slate-200/60 my-8 not-prose">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-slate-900 font-semibold text-lg">
                        <List className={`w-5 h-5 ${themeAccentText}`} />
                        <span>文章导航</span>
                      </div>
                      <button 
                        onClick={() => setIsTocExpanded(!isTocExpanded)} 
                        className="text-sm text-slate-500 hover:text-slate-800 transition-colors px-2 py-1"
                      >
                        {isTocExpanded ? '[隐藏]' : '[显示]'}
                      </button>
                    </div>
                    {isTocExpanded && (
                      <nav className="space-y-1 relative border-l-2 border-slate-200 ml-2 pl-4 mt-2">
                        {article.toc.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToHeading(item.id)}
                            className={`relative block text-left w-full py-1.5 text-sm transition-colors ${
                              activeId === item.id
                                ? `${themeAccentText} font-medium`
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            {activeId === item.id && (
                              <span className={`absolute -left-[23px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 ${themeBlockquoteBorder}`} />
                            )}
                            {item.title}
                          </button>
                        ))}
                      </nav>
                    )}
                  </div>
                )}

                <Markdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={components}
                >
                  {afterTOC}
                </Markdown>
              </div>
            </article>

            {/* Remaining Content Blocks */}
            {contentBlocks.slice(1).map((block, index) => (
              <article key={index} className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm ring-1 ring-slate-200">
                <div className={proseWrapperClass}>
                  <Markdown 
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={components}
                  >
                    {block}
                  </Markdown>
                </div>
              </article>
            ))}

            {/* Author Block */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm ring-1 ring-slate-200 mt-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className={`shrink-0 flex items-center justify-center w-16 h-16 rounded-full ${themeBadgeBg} ${themeBadgeRing} ring-1 font-bold ${themeAccentText} text-2xl`}>
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">关于作者：Jake</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  拥有10年服务器技术经验的IT工程师，曾在多家知名云服务提供商担任开发工程师和系统架构师，参与设计和优化过数百个不同类型的服务器环境，从个人博客到企业级高可用架构，从内容分发到游戏服务器，几乎涵盖了VPS的所有常见应用场景。
                </p>
              </div>
            </div>

            {/* Article List */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm ring-1 ring-slate-200 mt-8">
              <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold text-xl">
                <BookOpen className="w-6 h-6 text-indigo-500" />
                <span>相关指南</span>
              </div>
              <ul className="space-y-4">
                {relatedList.map((navArticle) => (
                   <li key={navArticle.slug}>
                     <Link to={`/${article.category}/${navArticle.slug}`} className={`block text-base ${article.slug === navArticle.slug ? `font-medium ${themeAccentText}` : 'text-slate-600 hover:text-slate-900'}`}>
                       {navArticle.title}
                     </Link>
                   </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar - Navigation & Article List */}
          <div className="hidden lg:block lg:w-1/4 space-y-8">
            <div className="sticky top-28">
              <RecommendedPlansWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
