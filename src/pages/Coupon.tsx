import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { List } from 'lucide-react';
import { useSEO } from '../lib/useSEO';

const toc = [
  { id: '当前搬瓦工优惠码状态', title: '当前优惠码状态' },
  { id: '怎么判断搬瓦工优惠码是否可用', title: '判断码是否可用' },
  { id: '搬瓦工优惠码值得专门等吗', title: '值得专门等吗？' },
  { id: '搬瓦工优惠码怎么使用', title: '优惠码使用流程' },
  { id: '搬瓦工优惠码无效怎么办', title: '无效排查路线' },
  { id: '没有优惠码时怎么买更划算', title: '怎么买更省钱' },
  { id: '搬瓦工优惠码常见问题', title: '常见问题解答' },
  { id: '结论先试码再付款', title: '最终建议' },
];

const articleMarkdown = `
# 搬瓦工优惠码2026年最新整理

准备买搬瓦工，先把优惠码试完再付款。

搬瓦工优惠码这几年最麻烦的地方，倒不是找不到，而是旧码太多。很多页面标题写着“最新”，点进去还是几年前的活动码。复制到结算页，价格没有变化，时间却花了一大把。

这篇搬瓦工优惠码整理，只解决几件事：现在下单搬瓦工，哪些优惠码还值得试？怎么判断它到底有没有生效？优惠码失效后该怎么处理？

判断标准就一个：

**看订单价格。**

优惠码填进去，金额降了，这个码就有用。价格没动，换一个；还是没动，就按现价重新决定买不买。

---

## 当前搬瓦工优惠码状态

当前状态：暂无可以默认推荐的长期通用优惠码  
最后复查时间：2026-06-10  
下单动作：低价套餐试一次就够；中高价套餐先试码，再付款  
验证动作：点击 Validate Code 后，看订单总价有没有减少

| 优惠码          | 当前状态        | 折扣情况         | 适用范围         | 最后复查时间     | 使用建议             |
| ------------ | ----------- | ------------ | ------------ | ---------- | ---------------- |
| NODESEEK2026 | 待验证 / 历史近期码 | 曾有约 6.77% 折扣 | 常规套餐曾出现过     | 2026-06-10 | 下单前试一次，没减价就放弃    |
| BWHCGLUKKB   | 旧码 / 状态不稳   | 历史约 6.7% 折扣  | 过去常见于常规套餐    | 2026-06-10 | 顺手试一下即可，别当成主力优惠码 |
| BWHCCNCXVV   | 历史旧码        | 历史折扣码        | 旧活动或旧套餐      | 2026-06-10 | 只作参考             |
| BWHWYWWYVY   | 历史旧码        | 历史折扣码        | 旧活动或旧套餐      | 2026-06-10 | 只作参考             |
| 节日活动码        | 活动期才可能出现    | 不固定          | 黑五、双十一、新年等活动 | 活动期更新      | 不急用的用户可以关注       |

现在买搬瓦工，别指望哪个码能长期稳定可用。

做法很简单：下单前试一次。降价就用；没动就换一个。再没动，直接进入买不买的判断，别在旧码上耗着。

搬瓦工优惠码大致分三类。

一类是近期出现过、下单前可以顺手试试的。比如 \`NODESEEK2026\` 这种最近搜的人多的码，可以试，但别默认它一定能用。

一类是旧码。以前可能真有效，也可能搞过循环折扣，现在多半只是历史记录了。\`BWHCGLUKKB\` 就属于这种，试一下行，反复折腾没有意义。

还有一类是活动码。黑五、双十一、新年、社区活动，都可能冒出短期优惠码。折扣或许更高，但窗口短，错过就没了。

低价套餐别在优惠码上磨太久。试一次，价格没变就算了。中高价套餐不一样，下单前把常见码都过一遍；旧活动码最多顺手试试，反复刷新页面就是浪费时间。

---

## 怎么判断搬瓦工优惠码是否可用？

看标题没用。

有些页面标题天天换，正文还是那批旧码。还有的把优惠码、套餐推荐、购买教程一锅烩，看着内容很多，真到结算页一分钱减不下来。

想知道码能不能用，直接走一遍购买流程。

先选套餐，加进购物车，进订单确认页。找到 Promotional Code 输入框，粘上优惠码，点 Validate Code。

然后盯订单金额：

价格降了，生效。

价格没变，放弃。

这一下比任何“亲测可用”都靠谱。别人能用，不代表你现在能用。套餐不一样、付款周期不一样、活动时间不一样，结果就会变。

新手常漏掉一个细节：

**把优惠码填进框里，不算用上了。订单总价掉下来，才算。**

页面要是报错，或者总价没动，那这个码对你这单就没价值。原因可能很多：码过期了、套餐不支持、付款周期对不上，或者它只给活动期新购用。

别猜。

看价格。

VPS 优惠码跟普通电商券不是一回事，它经常绑住套餐、周期、新购、续费和活动时间。你自己那个订单页，比任何整理文章都准。

下单前三步就够：

1. 复制一个近期优惠码；
2. 点 Validate Code；
3. 看总价有没有降。

走完这三步，答案就出来了。

---

## 搬瓦工优惠码值得专门等吗？

低价套餐别等。

一年几十美元的方案，优惠码能省的钱本来就有限。中高价套餐才值得认真试码，金额一上去，几个百分点也能省出几十美元。

急着上线项目的人，别为了几美元折扣把正事拖住。

很多人买搬瓦工，本来是为了建站、跑测试、学 Linux，结果卡在优惠码上：今天找码，明天等活动，项目迟迟没开张。

不值。

入门套餐假如只有 5%-6% 的折扣，实际可能也就省几美元。为这点钱等一两周，时间成本比折扣高多了。

中高价套餐反过来。

年付越高，折扣越有分量。几百美元的套餐，哪怕只省 6%，也是几十美元。这时候直接原价付，确实有点亏。

具体下单可以这么办：

买低价入门套餐，先试个码，没减价就回头看套餐本身合不合适。

买中高价套餐，至少把当前常见码试完再付。

不急用，盯黑五、双十一、新年活动。

急着上线，先把 VPS 跑起来，别让活动节奏牵着走。

限量版套餐也能留意，但它不稳。库存、价格、补货时间都说不准。碰上了就买，没碰上别把计划吊死在补货上。

有时候最贵的不是少用一个优惠码，而是为了点小折扣，把真正要干的事耽误了。

---

## 搬瓦工优惠码怎么使用？

流程很短，别想复杂。

1. 进 BandwagonHost，选要买的 VPS 套餐；
2. 加入购物车；
3. 确认机房、配置、付款周期；
4. 在结算页找到 Promotional Code；
5. 粘上优惠码；
6. 点 Validate Code；
7. 看订单总价有没有降。

降了再付款。

没动就换码。换完还没动，就按现价重新想想要不要买。

复制优惠码时留意别带空格。有时候码本身没问题，多带一个空格，系统就识别失败了。

折扣一定在付款前确认。付款后再想补优惠，通常很麻烦，结果也不稳。

---

## 搬瓦工优惠码无效怎么办？

优惠码无效太常见了，按顺序排查就行。

先查空格。

把码删掉重新复制，只留代码本身。动作简单，却能排掉一批低级错误。

再点一次 Validate Code。

别光盯输入框。框里有码没用，订单总价变了才有用。

换付款周期。

有些码对年付、季付、月付的支持不一样。你现在这个周期不行，换一个说不定就动了。

看套餐类型。

限量版、活动套餐、特价套餐，本身价格可能已经压得很低，再叠优惠码的机会不大。碰上这种，把心思放回套餐本身：价格、线路、配置、续费，哪个对你更要紧。

看是不是续费。

很多码只面向新购。续费、升级、迁移，未必能用同一个。续费前打开账单试一下，价格变了再付。

几个码都无效，就停手。

基本可以认定：你这单现在没合适的通用码了。继续翻旧码意义不大。为一个旧码反复刷新、换浏览器、换设备、换网络，没必要。

试一次，没减价，走下一步。

套餐合适、预算也够，优惠码不过省几美元，就别让它拖住下单。长期用 VPS，真正影响体验的是线路、配置、稳定性和续费成本，不是那几美元。

---

## 没有优惠码时，怎么买更划算？

机房、线路、每个套餐怎么挑，这里不展开，那该单独写一篇搬瓦工套餐选购指南。

这里只说省钱。

| 套餐价格      | 假设折扣 |  大约能省 | 购买动作       |
| --------- | ---: | ----: | ---------- |
| $49.99/年  | 约 6% |  约 $3 | 试一次即可，别长期等 |
| $169.99/年 | 约 6% | 约 $10 | 下单前先试码     |
| $899.99/年 | 约 6% | 约 $54 | 认真关注折扣     |

这组数字说明的事很清楚。

低价套餐，优惠码省的有限，先看这台 VPS 够不够用。

中高价套餐，优惠码开始有实际价值，能省几十美元就值得认真试。

高价套餐，优惠码不是摆设。下单前跳过它，等于主动把一部分预算扔了。

但真正让人多掏钱的，往往不是少用了优惠码，是买错套餐。

不少新手本来只想搭个小站，看到“高端线路”“热门机房”“CN2 GIA”“限量补货”，预算一路加上去。买完资源用不满，续费还贵。

这才是真正容易多花钱的地方。

低价需求先压预算，中高价套餐先试优惠码，长期用就看续费成本。限量版刚好补货可以留意，没补货就接着看常规套餐。

优惠码只是最后一步。

选对套餐，才是真省钱。

---

## 搬瓦工优惠码常见问题

### 1. 搬瓦工优惠码可以叠加使用吗？

一般只能用一个。结算页能验证哪个，就用哪个。

### 2. 搬瓦工优惠码可以用于续费吗？

有些行，有些只给新购。续费前打开账单试一下，价格变了再付。

### 3. 为什么别人能用，我这里用不了？

套餐、周期、活动时间都可能不一样。看你自己的订单价格，别看别人截图。

### 4. 优惠码失效了，还值得买搬瓦工吗？

有明确需求就买。低价套餐本来也省不了多少，别为几美元卡住。

### 5. 买完后还能补用优惠码吗？

优惠码放到付款前处理。付款后再补，麻烦，结果也不稳。

### 6. 搬瓦工优惠码是永久折扣吗？

看订单规则。有些可能影响续费，有些只是一次性活动折扣。续费时再看账单价格。

---

## 结论：先试码，再付款

搬瓦工优惠码能省钱，但它只是下单前的一步。

低价套餐，试一次，没减价就按套餐本身判断。

中高价套餐，先试码再付款。

不急用可以等活动，急着用就先把 VPS 跑起来。

最后只看一个结果：

**订单到底有没有真减价。**

减了就用。没减就换码，或者接着想要不要买。

---

## 说明

页面里可能包含推广链接。如果你通过链接购买，站长可能拿到一些佣金，但不影响你的购买价格。优惠码状态会变，购买前请以 BandwagonHost 结算页显示的金额为准。
`;

export function CouponPage() {
  const [activeId, setActiveId] = useState<string>('');

  useSEO({
    title: '搬瓦工优惠码2026年最新整理',
    description: '2026年最新搬瓦工优惠码整理，判断优惠码是否可用，教你没有优惠码时怎么买更划算。'
  });

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = toc.map((item) => document.getElementById(item.id));
      
      let currentActiveId = '';
      for (const element of headingElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the heading is near the top of the viewport
          if (rect.top <= 150) {
            currentActiveId = element.id;
          }
        }
      }
      
      // If we've scrolled past the first heading, set it, otherwise clear it or keep the last active
      if (currentActiveId) {
        setActiveId(currentActiveId);
      } else if (window.scrollY < 150) {
        setActiveId('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky navbar
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

  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Article Content */}
          <div className="lg:w-3/4">
            <article className="prose prose-slate prose-a:text-amber-600 hover:prose-a:text-amber-500 max-w-none bg-white p-8 sm:p-12 rounded-2xl shadow-sm ring-1 ring-slate-200">
              <Markdown 
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
              >
                {articleMarkdown}
              </Markdown>
            </article>
          </div>

          {/* Right Sidebar - Sticky Navigation */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 mb-4 text-slate-900 font-semibold">
                <List className="w-5 h-5 text-amber-500" />
                <span>文章导航</span>
              </div>
              <nav className="space-y-1 relative border-l-2 border-slate-100 ml-2 pl-4">
                {toc.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToHeading(item.id)}
                    className={`relative block text-left w-full py-1.5 text-sm transition-colors ${
                      activeId === item.id
                        ? 'text-amber-600 font-medium'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {/* Active indicator bullet */}
                    {activeId === item.id && (
                      <span className="absolute -left-[23px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-amber-500" />
                    )}
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
