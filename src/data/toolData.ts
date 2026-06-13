export const products = {
  kvm20: {
    key: "kvm20",
    name: "KVM 20G 入门套餐",
    tag: "学习/测试",
    pid: "44",
    price: "$49.99/年",
    specs: "1GB 内存 · 2核 CPU · 20GB SSD · 1TB/月 · 普通线路",
    dc: "DC8 ZNET / DC2 QNET 等，以后台可选为准",
    desc: "适合学习 Linux、跑脚本、临时测试。它便宜，但不是正式中文站的首选。",
    fit: ["学习 Linux", "测试脚本", "临时环境", "预算极低"],
    notFit: ["正式中文站", "高峰期速度敏感", "长期 WordPress", "低延迟业务"],
    cheaper: "这已经是常规在售里偏低的预算档。不要为了省钱拿它硬跑重要站点。",
    link: "https://bwh81.net/aff.php?aff=80471&pid=44"
  },
  giae20: {
    key: "giae20",
    name: "CN2 GIA-E 20G",
    tag: "建站起步",
    pid: "87",
    price: "$49.99/季 · $169.99/年",
    specs: "1GB 内存 · 2核 CPU · 20GB SSD · 1TB/月 · 2.5Gbps",
    dc: "大陆访客优先 DC6 CN2 GIA-E；也可按实际测试切换 DC9/JPOS/EUNL 等",
    desc: "适合个人博客、轻量 WordPress、中文站起步。比 KVM 贵，但线路和机房灵活性明显更适合正式建站。",
    fit: ["个人博客", "轻量 WordPress", "中文内容站起步", "想兼顾价格和线路"],
    notFit: ["多插件重站", "图片很多", "多个站点", "完整 Dify / 多 Docker"],
    cheaper: "如果只是学习，可以退回 KVM；如果是正式中文站，不建议为了省钱选普通 KVM。",
    link: "https://bwh81.net/aff.php?aff=80471&pid=87"
  },
  giae40: {
    key: "giae40",
    name: "CN2 GIA-E 40G",
    tag: "长期建站",
    pid: "88",
    price: "$89.99/季 · $299.99/年",
    specs: "2GB 内存 · 3核 CPU · 40GB SSD · 2TB/月 · 2.5Gbps",
    dc: "中文站优先 DC6；性能/容器可试 DC9；外贸按访客区域测试 EUNL/JPOS",
    desc: "适合长期 WordPress、SEO 内容站、多插件和图片较多的网站。它不是最低价，但更像正式站的稳妥起步档。",
    fit: ["长期 WordPress", "SEO 内容站", "宝塔 + 多插件", "图片较多", "多站点起步"],
    notFit: ["只学 Linux", "临时测试", "预算只接受 $49.99/年"],
    cheaper: "20G 可以起步，但 WordPress 长期运行时，插件、图片、缓存、日志和备份都会慢慢吃空间和内存。",
    link: "https://bwh81.net/aff.php?aff=80471&pid=88"
  },
  giae80: {
    key: "giae80",
    name: "CN2 GIA-E 80G",
    tag: "AI/Docker",
    pid: "89",
    price: "$56.99/月 · $549.99/年",
    specs: "4GB 内存 · 4核 CPU · 80GB SSD · 3TB/月 · 2.5Gbps",
    dc: "AI/Docker 优先 DC9 或 DC6，具体看你实际延迟和负载",
    desc: "适合 Dify、FastGPT、多 Docker 服务、多个应用并行。它不是 GPU 服务器，但比 1GB/2GB 更适合跑管理平台和容器服务。",
    fit: ["Dify 完整部署", "FastGPT", "多 Docker", "多个后台服务", "需要更大内存余量"],
    notFit: ["普通博客", "学习 Linux", "只跑一个小脚本", "极度预算敏感"],
    cheaper: "n8n 轻量可以考虑 20G/40G；Dify 完整部署不建议 1GB 硬跑，后期 OOM 和维护成本更高。",
    link: "https://bwh81.net/aff.php?aff=80471&pid=89"
  },
  hk40: {
    key: "hk40",
    name: "香港 CN2 GIA 40G",
    tag: "低延迟高端",
    pid: "95",
    price: "$89.99/月 · $899.99/年",
    specs: "2GB 内存 · 2核 CPU · 40GB SSD · 500GB/月 · 香港 CN2 GIA",
    dc: "香港 CN2 GIA；购买前确认库存和可选 Location",
    desc: "适合预算充足、对大陆访问延迟和交互体验非常敏感的业务。普通博客不建议默认上香港。",
    fit: ["大陆低延迟", "交互业务", "预算充足", "客户后台", "高价值访问"],
    notFit: ["普通个人博客", "学习 Linux", "预算紧的新站", "流量特别大的下载站"],
    cheaper: "大多数中文站先看 CN2 GIA-E 20G/40G 就够了。香港是体验升级，不是每个人的默认答案。",
    link: "https://bwh81.net/aff.php?aff=80471&pid=95"
  },
  osaka40: {
    key: "osaka40",
    name: "日本大阪 CN2 GIA 40G",
    tag: "东亚/移动联通",
    pid: "134",
    price: "$49.99/月 · $499.99/年",
    specs: "2GB 内存 · 2核 CPU · 40GB SSD · 500GB/月 · 1.5Gbps",
    dc: "Osaka Equinix；移动/联通或东亚访问可重点测试",
    desc: "适合日本、东亚访客，或移动/联通体验更重要的场景。成本低于香港，但仍属于高端低延迟方案。",
    fit: ["日本/东亚访客", "移动/联通体验", "低延迟但预算不想上香港", "亚洲业务站"],
    notFit: ["纯学习用途", "预算 $50/年", "普通轻量博客"],
    cheaper: "如果只是中文内容站，CN2 GIA-E 40G 往往更均衡；大阪更偏区域体验优化。",
    link: "https://bwh81.net/aff.php?aff=80471&pid=134"
  },
  sla40: {
    key: "sla40",
    name: "ECOMMERCE SLA 40G",
    tag: "业务稳定",
    pid: "165",
    price: "$116.99/季 · $399.99/年",
    specs: "2GB ECC 内存 · 3核 AMD 独享 · 40GB NVMe · 2TB/月 · 99.99% SLA",
    dc: "洛杉矶 SLA 机房；面向业务稳定性需求",
    desc: "适合外贸业务站、客户项目、企业展示站和不想频繁折腾的正式项目。成本高于普通 GIA-E，但买的是稳定性和更强硬件保障。",
    fit: ["企业站", "外贸站", "客户项目", "更重视稳定性", "业务预算"],
    notFit: ["学习 Linux", "个人小博客", "预算极低", "只想试用"],
    cheaper: "预算有限可以选 CN2 GIA-E 40G；但重要项目不要只为了省钱牺牲稳定性。",
    link: "https://bwh81.net/aff.php?aff=80471&pid=165"
  },
  sla80: {
    key: "sla80",
    name: "ECOMMERCE SLA 80G",
    tag: "业务重载",
    pid: "166",
    price: "$209.99/季 · $799.99/年",
    specs: "4GB ECC 内存 · 4核 AMD 独享 · 80GB NVMe · 3TB/月 · 99.99% SLA",
    dc: "洛杉矶 SLA 机房；重要项目/重载业务优先",
    desc: "适合业务级 Docker、较重的后台系统、多个客户站点或对稳定性要求高的应用。",
    fit: ["重载业务", "多个客户站", "业务级 Docker", "稳定性优先"],
    notFit: ["普通博客", "学习测试", "预算敏感"],
    cheaper: "普通 AI/Docker 可以先看 CN2 GIA-E 80G；业务级项目再考虑 SLA 80G。",
    link: "https://bwh81.net/aff.php?aff=80471&pid=166"
  }
};

export const quickProducts = [
  products.kvm20,
  products.giae20,
  products.giae40,
  products.giae80,
  products.hk40,
  products.osaka40,
  products.sla40,
  products.sla80
];

export const budgetRank: Record<string, number> = {
  low49: 1,
  qtr50: 2,
  year300: 3,
  month50: 4,
  month90: 5,
  business_budget: 6
};

export function pickRecommendation(input: { purpose: string, audience: string, load: string, budget: string, priority: string }) {
  const p = input.purpose;
  const a = input.audience;
  const l = input.load;
  const b = input.budget;
  const pr = input.priority;
  const br = budgetRank[b] || 2;

  let main = products.giae20;
  let backup = products.giae40;
  let avoid = products.hk40;
  let reason = "你还没有明确重负载或极致低延迟需求，CN2 GIA-E 20G 是更稳妥的通用起步方案。";
  let note = "付款前建议先确认该套餐能选择你需要的 Location，尤其是 DC6、DC9、日本、荷兰等机房。";

  if (p === "learn") {
    main = products.kvm20;
    backup = products.giae20;
    avoid = products.hk40;
    reason = "你的核心需求是学习和测试，先买便宜的 KVM 20G 更合理。预算高也没必要直接上香港或大阪。";
    note = "如果后面要正式建站，建议重新按建站场景选择 CN2 GIA-E，不要把学习机直接当生产环境。";
  }

  if (p === "cn_site" || p === "unsure") {
    main = products.giae20;
    backup = products.giae40;
    avoid = products.hk40;
    reason = "中文站或不确定用途，先用 CN2 GIA-E 20G 起步最稳：线路比 KVM 更合适，成本又没有香港那么高。";
    if (l === "wp_heavy" || pr === "upgrade") {
      main = products.giae40;
      backup = products.giae20;
      reason = "你选择了多插件、图片较多或后期扩展需求，40G 比 20G 更适合作为长期 WordPress 起步档。";
    }
  }

  if (p === "wp_long") {
    main = products.giae40;
    backup = products.giae20;
    avoid = products.kvm20;
    reason = "长期 WordPress 不只看能不能跑，还要看插件、缓存、日志、图片和备份的增长。CN2 GIA-E 40G 更稳。";
    note = "20G 可以作为轻量站起步，但如果你认真做 SEO 内容站，40G 更少折腾。";
  }

  if (p === "overseas_site") {
    main = products.giae40;
    backup = products.sla40;
    avoid = products.kvm20;
    reason = "外贸站通常比个人博客更重，还要兼顾国内管理后台和海外访客，CN2 GIA-E 40G 更均衡。";
    if (a === "japan_asia" || a === "mobile_unicom") {
      backup = products.osaka40;
      note = "如果你的访客明显集中在日本、东亚，或者移动/联通访问体验更重要，可以重点测试大阪。";
    }
    if (pr === "stability" || l === "important" || b === "business_budget") {
      main = products.sla40;
      backup = products.giae40;
      reason = "你选择了业务稳定性优先，SLA 40G 比普通套餐更适合客户项目和外贸业务站。";
    }
  }

  if (p === "ai") {
    if (l === "docker_light" && br <= 2) {
      main = products.giae20;
      backup = products.giae40;
      avoid = products.kvm20;
      reason = "轻量 n8n 或单个小 Docker 服务可以从 CN2 GIA-E 20G 起步，但建议配合 Swap，并控制服务数量。";
      note = "如果要跑 Dify、FastGPT 或多个 Docker 服务，不建议停留在 1GB 内存。";
    } else if (l === "docker_light") {
      main = products.giae40;
      backup = products.giae20;
      avoid = products.kvm20;
      reason = "轻量 Docker 长期运行更建议 2GB 内存，CN2 GIA-E 40G 比 20G 更稳。";
    } else {
      main = products.giae80;
      backup = products.giae40;
      avoid = products.kvm20;
      reason = "Dify、FastGPT、多 Docker 主要吃内存和磁盘余量，CN2 GIA-E 80G 的 4GB 内存更合适。";
      note = "搬瓦工 VPS 不是 GPU 服务器，适合部署 AI 管理平台和轻量服务，不适合本地跑大模型推理。";
    }
    if (pr === "stability" || b === "business_budget") {
      backup = products.sla80;
      note += " 如果这是客户项目或业务系统，可以进一步考虑 SLA 80G。";
    }
  }

  if (p === "low_latency") {
    avoid = products.kvm20;
    if (br >= 5) {
      main = products.hk40;
      backup = products.osaka40;
      reason = "你明确追求大陆低延迟且预算充足，香港 CN2 GIA 是更直接的高端方案。";
    } else if (br >= 4 || a === "japan_asia" || a === "mobile_unicom") {
      main = products.osaka40;
      backup = products.giae40;
      reason = "你想要低延迟但预算未到香港档，大阪 CN2 GIA 是更折中的高端方案，尤其适合日本/东亚或移动联通场景。";
    } else {
      main = products.giae40;
      backup = products.giae20;
      reason = "你的预算还没到香港/大阪档，先选 CN2 GIA-E 40G 更现实；它不是最低延迟，但整体更均衡。";
      note = "如果业务真的吃低延迟，后续再升级到香港或大阪，不建议用普通 KVM 硬扛。";
    }
  }

  if (p === "business" || l === "important" || pr === "stability") {
    main = products.sla40;
    backup = products.giae40;
    avoid = products.kvm20;
    reason = "重要业务更怕不稳定和反复迁移，SLA 40G 比普通低价套餐更适合正式项目。";
    note = "如果业务负载较重、多个客户站或 Docker 服务较多，可以进一步看 SLA 80G。";
    if (l === "docker_ai" || br >= 6) {
      backup = products.sla80;
    }
  }

  if (b === "low49" && main.key !== "kvm20") {
    note = "你选择了 $49.99/年左右的预算，但你的用途不太适合只买 KVM。建议：学习测试可以买 KVM；正式建站/业务/AI 最好提高到推荐档位，否则后期迁移成本更高。";
  }

  if (b === "qtr50" && ["giae40", "giae80", "hk40", "osaka40", "sla40", "sla80"].includes(main.key)) {
    note = "你的预算更接近 CN2 GIA-E 20G 起步档。当前主推荐更适合你的用途，但预算不足时可以先买备选方案，后期再升级。";
  }

  return { main, backup, avoid, reason, note };
}
