const fs = require('fs');
let code = fs.readFileSync('src/data/articles.ts', 'utf8');

const mapping = [
    { search: "**CTA：查看香港 CN2 GIA 2GB 套餐**", pid: 95, text: "查看香港 CN2 GIA 2GB 套餐" },
    { search: "**CTA：查看香港 CN2 GIA 4GB 套餐**", pid: 96, text: "查看香港 CN2 GIA 4GB 套餐" },
    { search: "**CTA：查看 CN2 GIA-E 套餐**", pid: 87, text: "查看 CN2 GIA-E 套餐" },
    { search: "**CTA：查看搬瓦工入门 KVM 套餐**", pid: 44, text: "查看搬瓦工入门 KVM 套餐" }
];

mapping.forEach(item => {
    // using similar styling as the purchase buttons in the tables, but slightly larger for the CTA
    const replacement = `<div class="not-prose my-6"><a href="https://bwh81.net/cart.php?a=add&pid=${item.pid}&aff=80471" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all">${item.text}</a></div>`;
    code = code.replace(item.search, replacement);
});

fs.writeFileSync('src/data/articles.ts', code, 'utf8');
console.log('done CTA');
