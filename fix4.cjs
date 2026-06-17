const fs = require('fs');
const file = 'src/data/articles.ts';
let code = fs.readFileSync(file, 'utf8');

const injectedHTML = `
<p>下面是对应的套餐列表，主要是中国香港 CN2 GIA 套餐，购买之后可以使用上面这些所有的 CN2 GIA 机房。</p>
<div class="overflow-x-auto my-6 bg-white rounded-xl shadow-sm ring-1 ring-slate-200">
<table class="w-full text-sm text-left table-auto">
<thead class="bg-slate-50/50 text-slate-500 font-medium border-b border-slate-100">
<tr>
	<th class="px-4 py-3">方案</th><th class="px-4 py-3">内存</th><th class="px-4 py-3">CPU</th><th class="px-4 py-3 whitespace-nowrap">硬盘</th><th class="px-4 py-3 whitespace-nowrap">流量/月</th><th class="px-4 py-3">带宽</th><th class="px-4 py-3 whitespace-nowrap">机房</th><th class="px-4 py-3">价格</th><th class="px-4 py-3 text-center whitespace-nowrap">购买</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 border-b border-slate-100 text-slate-600">
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">HK</td><td class="px-4 py-3 whitespace-nowrap">2GB</td><td class="px-4 py-3 whitespace-nowrap">2核</td><td class="px-4 py-3 whitespace-nowrap">40GB</td><td class="px-4 py-3 whitespace-nowrap">0.5TB</td><td class="px-4 py-3 whitespace-nowrap">1Gbps</td><td rowspan="6" class="px-4 py-4 border-l border-r border-slate-100 bg-white min-w-[180px] align-top text-slate-700 leading-relaxed font-medium">中国香港 CN2 GIA<br/>日本东京 CN2 GIA<br/>日本大阪 CN2 GIA<br/>新加坡 CN2 GIA</td><td class="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">$89.99/月<br/>$899.99/年</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=95&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">HK</td><td class="px-4 py-3 whitespace-nowrap">4GB</td><td class="px-4 py-3 whitespace-nowrap">4核</td><td class="px-4 py-3 whitespace-nowrap">80GB</td><td class="px-4 py-3 whitespace-nowrap">1TB</td><td class="px-4 py-3 whitespace-nowrap">1Gbps</td><td class="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">$155.99/月<br/>$1559.99/年</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=96&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">HK</td><td class="px-4 py-3 whitespace-nowrap">8GB</td><td class="px-4 py-3 whitespace-nowrap">6核</td><td class="px-4 py-3 whitespace-nowrap">160GB</td><td class="px-4 py-3 whitespace-nowrap">2TB</td><td class="px-4 py-3 whitespace-nowrap">1Gbps</td><td class="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">$299.99/月<br/>$2999.99/年</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=97&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">HK</td><td class="px-4 py-3 whitespace-nowrap">16GB</td><td class="px-4 py-3 whitespace-nowrap">8核</td><td class="px-4 py-3 whitespace-nowrap">320GB</td><td class="px-4 py-3 whitespace-nowrap">4TB</td><td class="px-4 py-3 whitespace-nowrap">1Gbps</td><td class="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">$589.99/月<br/>$5899.99/年</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=98&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">HK</td><td class="px-4 py-3 whitespace-nowrap">32GB</td><td class="px-4 py-3 whitespace-nowrap">10核</td><td class="px-4 py-3 whitespace-nowrap">640GB</td><td class="px-4 py-3 whitespace-nowrap">6TB</td><td class="px-4 py-3 whitespace-nowrap">1Gbps</td><td class="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">$989.99/月<br/>$9989.99/年</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=122&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">HK</td><td class="px-4 py-3 whitespace-nowrap">64GB</td><td class="px-4 py-3 whitespace-nowrap">12核</td><td class="px-4 py-3 whitespace-nowrap">1280GB</td><td class="px-4 py-3 whitespace-nowrap">8TB</td><td class="px-4 py-3 whitespace-nowrap">1Gbps</td><td class="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">$1889.99/月<br/>$18989.99/年</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=124&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
</tbody>
</table>
</div>

<p>如果预算稍微受限，但是又想购买近距离的 CN2 GIA 机房，可以购买下方的日本大阪 CN2 GIA 套餐，购买之后可以使用<strong>日本大阪 CN2 GIA + 美国多个 CN2 GIA 机房</strong>。</p>
<div class="overflow-x-auto my-6 bg-white rounded-xl shadow-sm ring-1 ring-slate-200">
<table class="w-full text-sm text-left table-auto">
<thead class="bg-slate-50/50 text-slate-500 font-medium border-b border-slate-100">
<tr>
	<th class="px-4 py-3">方案</th><th class="px-4 py-3">内存</th><th class="px-4 py-3">CPU</th><th class="px-4 py-3 whitespace-nowrap">硬盘</th><th class="px-4 py-3 whitespace-nowrap">月流量</th><th class="px-4 py-3">带宽</th><th class="px-4 py-3 whitespace-nowrap">机房</th><th class="px-4 py-3">价格</th><th class="px-4 py-3 text-center whitespace-nowrap">购买</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 border-b border-slate-100 text-slate-600">
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">OSAKA</td><td class="px-4 py-3 whitespace-nowrap">2GB</td><td class="px-4 py-3 whitespace-nowrap">2核</td><td class="px-4 py-3 whitespace-nowrap">40GB</td><td class="px-4 py-3 whitespace-nowrap">0.5TB</td><td class="px-4 py-3 whitespace-nowrap">1.5Gbps</td><td rowspan="6" class="px-4 py-4 border-l border-r border-slate-100 bg-red-50/30 min-w-[150px] align-top text-red-600 font-semibold leading-relaxed">日本大阪<br/>CN2 GIA</td><td class="px-4 py-3 text-red-600 font-semibold whitespace-nowrap">$49.99/月<br/>$499.99/年</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=134&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">OSAKA</td><td class="px-4 py-3 whitespace-nowrap">4GB</td><td class="px-4 py-3 whitespace-nowrap">4核</td><td class="px-4 py-3 whitespace-nowrap">80GB</td><td class="px-4 py-3 whitespace-nowrap">1TB</td><td class="px-4 py-3 whitespace-nowrap">1.5Gbps</td><td class="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">$86.99/月<br/>$869.99/年</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=135&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">OSAKA</td><td class="px-4 py-3 whitespace-nowrap">8GB</td><td class="px-4 py-3 whitespace-nowrap">6核</td><td class="px-4 py-3 whitespace-nowrap">160GB</td><td class="px-4 py-3 whitespace-nowrap">2TB</td><td class="px-4 py-3 whitespace-nowrap">1.5Gbps</td><td class="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">$165.99/月<br/>$1665.99/年</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=136&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">OSAKA</td><td class="px-4 py-3 whitespace-nowrap">16GB</td><td class="px-4 py-3 whitespace-nowrap">8核</td><td class="px-4 py-3 whitespace-nowrap">320GB</td><td class="px-4 py-3 whitespace-nowrap">4TB</td><td class="px-4 py-3 whitespace-nowrap">1.5Gbps</td><td class="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">$329.99/月<br/>$3199/年</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=137&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">OSAKA</td><td class="px-4 py-3 whitespace-nowrap">32GB</td><td class="px-4 py-3 whitespace-nowrap">10核</td><td class="px-4 py-3 whitespace-nowrap">640GB</td><td class="px-4 py-3 whitespace-nowrap">6TB</td><td class="px-4 py-3 whitespace-nowrap">1.5Gbps</td><td class="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">$549.99/月<br/>$5549.99/年</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=138&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">OSAKA</td><td class="px-4 py-3 whitespace-nowrap">64GB</td><td class="px-4 py-3 whitespace-nowrap">12核</td><td class="px-4 py-3 whitespace-nowrap">1280GB</td><td class="px-4 py-3 whitespace-nowrap">8TB</td><td class="px-4 py-3 whitespace-nowrap">1.5Gbps</td><td class="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">$1059.99/月<br/>$10559.99/年</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=139&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
</tbody>
</table>
</div>
\`

const startMarker = \`slug: 'bandwagonhost-cn2-gia-review'\`;
const startIndex = code.indexOf(startMarker);
if (startIndex !== -1) {
  let nextSlug = code.indexOf(\`slug: '\`, startIndex + 10);
  if (nextSlug === -1) nextSlug = code.length;

  let articleSection = code.substring(startIndex, nextSlug);

  const insertAfterText = "这些还没想清楚，就别急着买最贵的。\\n";
  const targetIndex = articleSection.indexOf(insertAfterText);
  if (targetIndex !== -1) {
    articleSection = articleSection.substring(0, targetIndex + insertAfterText.length) + "\\n" + injectedHTML + "\\n" + articleSection.substring(targetIndex + insertAfterText.length);
    code = code.substring(0, startIndex) + articleSection + code.substring(nextSlug);
    fs.writeFileSync(file, code, 'utf8');
    console.log('Successfully injected tables');
  } else {
    console.log('Could not find insert target.');
  }
}
