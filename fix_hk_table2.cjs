const fs = require('fs');

const file = 'src/data/articles.ts';
let code = fs.readFileSync(file, 'utf8');

const oldTable = `<table>
<thead>
<tr>
	<th>方案</th><th>内存</th><th>CPU</th><th>硬盘</th><th>流量/月</th><th>带宽</th><th>机房</th><th>价格</th><th>购买</th>
</tr>
</thead>
<tbody>
<tr>
	<td>HK</td><td>2GB</td><td>2核</td><td>40GB</td><td>0.5TB</td><td>1Gbps</td><td rowspan="4">中国香港 CN2 GIA</td><td>$89.99/月<br/>
$899.99/年</td><td><a href="https://bwh81.net/cart.php?a=add&pid=95&aff=80471" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all">购买</a></td>
</tr>
<tr>
	<td>HK</td><td>4GB</td><td>4核</td><td>80GB</td><td>1TB</td><td>1Gbps</td><td>$155.99/月<br/>
$1559.99/年</td><td><a href="https://bwh81.net/cart.php?a=add&pid=96&aff=80471" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all">购买</a></td>
</tr>
<tr>
	<td>HK</td><td>8GB</td><td>6核</td><td>160GB</td><td>2TB</td><td>1Gbps</td><td>$299.99/月<br/>
$2999.99/年</td><td><a href="https://bwh81.net/cart.php?a=add&pid=97&aff=80471" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all">购买</a></td>
</tr>
<tr>
	<td>HK</td><td>16GB</td><td>8核</td><td>320GB</td><td>4TB</td><td>1Gbps</td><td>$589.99/月<br/>
$5899.99/年</td><td><a href="https://bwh81.net/cart.php?a=add&pid=98&aff=80471" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all">购买</a></td>
</tr>
</tbody>
</table>`;

const newTable = `<table>
<thead>
<tr>
	<th>方案</th><th>内存</th><th>CPU</th><th>硬盘</th><th>流量/月</th><th>带宽</th><th>机房</th><th>价格</th><th>购买</th>
</tr>
</thead>
<tbody>
<tr>
	<td>HK</td><td>2GB</td><td>2核</td><td>40GB</td><td>0.5TB</td><td>1Gbps</td><td rowspan="4">中国香港 CN2 GIA</td><td>$89.99/月<br>
$899.99/年</td><td><a href="https://bwh81.net/cart.php?a=add&pid=95&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all">购买</a></td>
</tr>
<tr>
	<td>HK</td><td>4GB</td><td>4核</td><td>80GB</td><td>1TB</td><td>1Gbps</td><td>$155.99/月<br>
$1559.99/年</td><td><a href="https://bwh81.net/cart.php?a=add&pid=96&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all">购买</a></td>
</tr>
<tr>
	<td>HK</td><td>8GB</td><td>6核</td><td>160GB</td><td>2TB</td><td>1Gbps</td><td>$299.99/月<br>
$2999.99/年</td><td><a href="https://bwh81.net/cart.php?a=add&pid=97&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all">购买</a></td>
</tr>
<tr>
	<td>HK</td><td>16GB</td><td>8核</td><td>320GB</td><td>4TB</td><td>1Gbps</td><td>$589.99/月<br>
$5899.99/年</td><td><a href="https://bwh81.net/cart.php?a=add&pid=98&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all">购买</a></td>
</tr>
</tbody>
</table>`;

if (code.includes(oldTable)) {
    code = code.replace(oldTable, newTable);
    fs.writeFileSync(file, code, 'utf8');
    console.log("Successfully replaced table!");
} else {
    console.log("Could not find table.");
}
