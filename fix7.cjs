const fs = require('fs');
const file = 'src/data/articles.ts';
let code = fs.readFileSync(file, 'utf8');

const targetTable = `<div class="overflow-x-auto my-6 bg-white rounded-xl shadow-sm ring-1 ring-slate-200">
<table class="w-full text-sm text-left table-auto">
<thead class="bg-slate-50/50 text-slate-500 font-medium border-b border-slate-100">
<tr>
	<th class="px-4 py-3">套餐</th><th class="px-4 py-3">配置</th><th class="px-4 py-3 whitespace-nowrap">流量 / 带宽</th><th class="px-4 py-3 whitespace-nowrap">参考价格</th><th class="px-4 py-3">适合场景</th><th class="px-4 py-3 text-center whitespace-nowrap">购买</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 border-b border-slate-100 text-slate-600">
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">20G ECOMMERCE SLA Los Angeles</td><td class="px-4 py-3 whitespace-nowrap">1GB 内存 / 2 核 / 20GB NVMe</td><td class="px-4 py-3 whitespace-nowrap">1TB/月 / 2.5Gbps</td><td class="px-4 py-3 whitespace-nowrap">$65.89/季度 或 $239.99/年</td><td class="px-4 py-3">小博客、轻量 WordPress、入门建站</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=164&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">40G ECOMMERCE SLA Los Angeles</td><td class="px-4 py-3 whitespace-nowrap">2GB 内存 / 3 核 / 40GB NVMe</td><td class="px-4 py-3 whitespace-nowrap">2TB/月 / 2.5Gbps</td><td class="px-4 py-3 whitespace-nowrap">$116.99/季度 或 $399.99/年</td><td class="px-4 py-3">正式 WordPress、多站点、外贸展示站</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=165&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">80G ECOMMERCE SLA Los Angeles</td><td class="px-4 py-3 whitespace-nowrap">4GB 内存 / 4 核 / 80GB NVMe</td><td class="px-4 py-3 whitespace-nowrap">3TB/月 / 2.5Gbps</td><td class="px-4 py-3 whitespace-nowrap">$69.99/月 或 $699.99/年</td><td class="px-4 py-3">资源需求更高的网站或多个后台服务</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=166&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">香港 CN2 GIA 40G</td><td class="px-4 py-3 whitespace-nowrap">2GB 内存 / 2 核 / 40GB SSD</td><td class="px-4 py-3 whitespace-nowrap">500GB/月 / 1Gbps</td><td class="px-4 py-3 whitespace-nowrap">$89.99/月 或 $899.99/年</td><td class="px-4 py-3">预算充足、追求低延迟</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=95&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-3 font-medium text-slate-900">东京 CN2 GIA 40G</td><td class="px-4 py-3 whitespace-nowrap">2GB 内存 / 2 核 / 40GB SSD</td><td class="px-4 py-3 whitespace-nowrap">500GB/月 / 1.2Gbps</td><td class="px-4 py-3 whitespace-nowrap">$89.99/月 或 $899.99/年</td><td class="px-4 py-3">想要东京方向高端线路</td><td class="px-4 py-3 text-center"><a href="https://bwh81.net/cart.php?a=add&pid=108&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap">购买</a></td>
</tr>
</tbody>
</table>
</div>`;

const replacementHTML = \`
<div class="my-6 bg-white rounded-xl shadow-sm ring-1 ring-slate-200">
<table class="w-full text-sm text-left table-auto">
<thead class="bg-slate-50/50 text-slate-500 font-medium border-b border-slate-100">
<tr>
	<th class="px-4 py-3">套餐</th><th class="px-4 py-3 min-w-[120px]">配置</th><th class="px-4 py-3 min-w-[100px]">流量 / 带宽</th><th class="px-4 py-3 min-w-[120px]">参考价格</th><th class="px-4 py-3">适合场景</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 border-b border-slate-100 text-slate-600">
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-4 font-medium text-slate-900 align-top">20G ECOMMERCE SLA Los Angeles</td><td class="px-4 py-4 align-top">1GB 内存 / 2 核 / 20GB NVMe</td><td class="px-4 py-4 align-top">1TB/月 / 2.5Gbps</td><td class="px-4 py-4 align-top">$65.89/季度 或 $239.99/年</td><td class="px-4 py-4 align-top">小博客、轻量 WordPress、入门建站</td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-4 font-medium text-slate-900 align-top">40G ECOMMERCE SLA Los Angeles</td><td class="px-4 py-4 align-top">2GB 内存 / 3 核 / 40GB NVMe</td><td class="px-4 py-4 align-top">2TB/月 / 2.5Gbps</td><td class="px-4 py-4 align-top">$116.99/季度 或 $399.99/年</td><td class="px-4 py-4 align-top">正式 WordPress、多站点、外贸展示站</td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-4 font-medium text-slate-900 align-top">80G ECOMMERCE SLA Los Angeles</td><td class="px-4 py-4 align-top">4GB 内存 / 4 核 / 80GB NVMe</td><td class="px-4 py-4 align-top">3TB/月 / 2.5Gbps</td><td class="px-4 py-4 align-top">$69.99/月 或 $699.99/年</td><td class="px-4 py-4 align-top">资源需求更高的网站或多个后台服务</td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-4 font-medium text-slate-900 align-top">香港 CN2 GIA 40G</td><td class="px-4 py-4 align-top">2GB 内存 / 2 核 / 40GB SSD</td><td class="px-4 py-4 align-top">500GB/月 / 1Gbps</td><td class="px-4 py-4 align-top">$89.99/月 或 $899.99/年</td><td class="px-4 py-4 align-top">预算充足、追求低延迟</td>
</tr>
<tr class="hover:bg-slate-50/50 transition-colors">
	<td class="px-4 py-4 font-medium text-slate-900 align-top">东京 CN2 GIA 40G</td><td class="px-4 py-4 align-top">2GB 内存 / 2 核 / 40GB SSD</td><td class="px-4 py-4 align-top">500GB/月 / 1.2Gbps</td><td class="px-4 py-4 align-top">$89.99/月 或 $899.99/年</td><td class="px-4 py-4 align-top">想要东京方向高端线路</td>
</tr>
</tbody>
</table>
</div>
\`;

if (code.includes(targetTable)) {
  code = code.replace(targetTable, replacementHTML.trim());
  fs.writeFileSync(file, code, 'utf8');
  console.log('Replaced table successfully.');
} else {
  console.log('Table not found.');
}
