import { useSEO } from '../lib/useSEO';
import { Info, Mail } from 'lucide-react';

export function AboutPage() {
  useSEO({
    title: '关于我们',
    description: '了解搬瓦工中文网的成立初衷与网站使命。为您提供真实、客观的 VPS 选购建议与技术教程。'
  });

  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-3 text-amber-500 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
              <Info className="h-5 w-5" />
            </div>
            <span className="font-semibold text-sm tracking-wide">About Us</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">关于我们</h1>
        </div>

        <div className="prose prose-slate prose-amber max-w-none">
          <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-amber-500 pl-4">
            欢迎来到搬瓦工中文网。我们致力于为您提供最真实、客观的海外 VPS 选购建议与深度的技术实践教程。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">建站初衷</h2>
          <p>
            在建立这个网站之前，我们和许多初涉海外主机领域的站长、开发者一样，面对繁杂的套餐规格、深奥的线路术语（如 CN2 GIA、软银、CMI 等）感到无所适从、甚至经常踩坑。特别是针对中国大陆用户的网络环境而言，单纯看机房所在城市或低廉的价格，往往会在晚高峰期间收获糟糕的访问体验。
          </p>
          <p>
            市面上有大量充满营销话术和过期信息的推荐分享内容。各种“最新优惠码”让人眼花缭乱，但对于核心的网络阻断、路由绕路等关键问题却往往语焉不详。正是基于这种信息差和获取真实评测的困难，我们决定建立本站。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">我们的使命</h2>
          <p>
            <strong>拒绝无脑吹捧，坚持客观评测。</strong>
            本站的所有机房推荐、线路分析以及排障指南，均建立在我们长时间的实机测试与项目实操基础之上。我们将复杂的网络知识拆解为通俗易懂的表格和排查清单，帮助小白用户快速过滤掉不适合的套餐，引导各位把真正的时间与资金投入到有价值的项目构建中去。
          </p>
          <p>
            不仅是选购指南，我们还重点建设了常见故障的急救与排查教程。例如遇到 SSH 无法连接、访问异常的情况时，我们提供了一整套从面板监测到命令行应急的明确动作指导，让你在遇到问题时做到心中有数，而非盲目重启或重装。
          </p>
          <p>
            在此，你可以找到关于电信、联通、移动三网适用的优化机房对比，能够学习到最实用的故障排查技巧。希望这里的每一篇文章，都能成为你在 VPS 世界航行时的可靠航标。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">内容准则</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8 mt-4 text-slate-700">
            <li><strong>时效性：</strong> 定期复测核心机房的连通性数据，及时下架失效的推荐与价格信息。</li>
            <li><strong>准确性：</strong> 所有操作步骤与命令，均经过原生无干扰环境的二次验证。</li>
            <li><strong>中立性：</strong> 明确标出各个套餐的适用场景和短板，避免将昂贵方案错误推荐给预算不足的初学者。</li>
          </ul>

          <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200 mt-10 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600 flex-shrink-0">
               <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 m-0">联系我们</h3>
              <p className="text-sm text-slate-500 mt-1 mb-0">如果您有任何问题或内容建议，后续我们会考虑开放互动渠道，期待与大家交流建站经验与心得。祝使用愉快！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
