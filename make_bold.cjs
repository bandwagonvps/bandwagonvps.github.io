const fs = require('fs');

let coupon = fs.readFileSync('src/pages/Coupon.tsx', 'utf8');

const couponBolds = [
  '先选套餐，加进购物车，进订单确认页。找到 Promotional Code 输入框，粘上优惠码，点 Validate Code。',
  '低价套餐别等。',
  '中高价套餐才值得认真试码',
  '急着上线项目的人，别为了几美元折扣把正事拖住。',
];

couponBolds.forEach(text => {
  coupon = coupon.replace(text, `**${text}**`);
});

fs.writeFileSync('src/pages/Coupon.tsx', coupon, 'utf8');

let articles = fs.readFileSync('src/data/articles.ts', 'utf8');

const articleBolds = [
  '买前必看三件事',
  '续费、账单、工单去 Client Area;重装系统、查 IP、重启服务器去 KiwiVM',
  '重装系统会清空服务器里的全部数据。',
  '大半夜去用的话，差别不大',
  '低价套餐别在优惠码上磨太久',
  '一分钱一分货',
  'CN2 GIA 不是万能加速器',
  '真实使用体验比跑分更重要',
  '别指望哪个码能长期稳定可用'
];

articleBolds.forEach(text => {
  let toFind = text;
  // use simple replace
  let replacement = `**${text}**`;
  if(!articles.includes(replacement)) {
    // Only replace if it is not already bolded
    let escapedFind = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    articles = articles.replace(new RegExp(escapedFind, 'g'), replacement);
  }
});

fs.writeFileSync('src/data/articles.ts', articles, 'utf8');

console.log("Bolded some keywords");
