export const stockCategories = [
  {
    name: "搬瓦工 KVM (常规/普通)",
    description: "",
    plans: [
      { name: "20G KVM - PROMO VPS", ram: "1GB", cpu: "2核", ssd: "20GB", traffic: "1TB", port: "1Gbps", price: "$49.99/年", stock: true, pid: "44" },
      { name: "40G KVM - PROMO VPS", ram: "2GB", cpu: "3核", ssd: "40GB", traffic: "2TB", port: "1Gbps", price: "$99.99/年", stock: true, pid: "45" },
      { name: "80G KVM - PROMO VPS", ram: "4GB", cpu: "4核", ssd: "80GB", traffic: "3TB", port: "1Gbps", price: "$199.99/年", stock: true, pid: "46" },
      { name: "160G KVM - PROMO VPS", ram: "8GB", cpu: "5核", ssd: "160GB", traffic: "4TB", port: "1Gbps", price: "$399.99/年", stock: true, pid: "47" },
      { name: "320G KVM - PROMO VPS", ram: "16GB", cpu: "6核", ssd: "320GB", traffic: "5TB", port: "1Gbps", price: "$799.99/年", stock: true, pid: "48" },
      { name: "480G KVM - PROMO VPS", ram: "24GB", cpu: "7核", ssd: "480GB", traffic: "6TB", port: "1Gbps", price: "$1199.99/年", stock: true, pid: "49" },
    ]
  },
  {
    name: "搬瓦工 CN2 GIA-E",
    description: "",
    plans: [
      { name: "SPECIAL 20G KVM PROMO V5 - CN2 GIA ECOMMERCE VPS", ram: "1GB", cpu: "2核", ssd: "20GB", traffic: "1TB", port: "2.5Gbps", price: "$169.99/年", stock: true, pid: "87" },
      { name: "SPECIAL 40G KVM PROMO V5 - CN2 GIA ECOMMERCE VPS", ram: "2GB", cpu: "3核", ssd: "40GB", traffic: "2TB", port: "2.5Gbps", price: "$299.99/年", stock: true, pid: "88" },
      { name: "SPECIAL 80G KVM PROMO V5 - CN2 GIA ECOMMERCE VPS", ram: "4GB", cpu: "4核", ssd: "80GB", traffic: "3TB", port: "2.5Gbps", price: "$549.99/年", stock: true, pid: "89" },
      { name: "SPECIAL 160G KVM PROMO V5 - CN2 GIA ECOMMERCE VPS", ram: "8GB", cpu: "6核", ssd: "160GB", traffic: "5TB", port: "5Gbps", price: "$879.99/年", stock: true, pid: "90" },
      { name: "SPECIAL 320G KVM PROMO V5 - CN2 GIA ECOMMERCE VPS", ram: "16GB", cpu: "8核", ssd: "320GB", traffic: "8TB", port: "5Gbps", price: "$1599.99/年", stock: true, pid: "91" },
      { name: "SPECIAL 640G KVM PROMO V5 - CN2 GIA ECOMMERCE VPS", ram: "32GB", cpu: "10核", ssd: "640GB", traffic: "10TB", port: "10Gbps", price: "$2759.99/年", stock: true, pid: "92" },
      { name: "SPECIAL 1280G KVM PROMO V5 - CN2 GIA ECOMMERCE VPS", ram: "64GB", cpu: "12核", ssd: "1280GB", traffic: "12TB", port: "10Gbps", price: "$5399.99/年", stock: true, pid: "93" },
      { name: "SPECIAL 1280G KVM PROMO V5 - CN2 GIA ECOMMERCE HIBW 15T VPS", ram: "64GB", cpu: "12核", ssd: "1280GB", traffic: "15TB", port: "10Gbps", price: "$6790/年", stock: true, pid: "160" },
      { name: "SPECIAL 1280G KVM PROMO V5 - CN2 GIA ECOMMERCE HIBW 20T VPS", ram: "64GB", cpu: "12核", ssd: "1280GB", traffic: "20TB", port: "10Gbps", price: "$8999/年", stock: true, pid: "161" },
    ]
  },
  {
    name: "搬瓦工 ECOMMERCE SLA",
    description: "",
    plans: [
      { name: "20G KVM - ECOMMERCE SLA LOS ANGELES VPS", ram: "1GB", cpu: "独享 2核", ssd: "20GB", traffic: "1TB", port: "2.5Gbps", price: "$239.99/年", stock: true, pid: "164" },
      { name: "40G KVM - ECOMMERCE SLA LOS ANGELES VPS", ram: "2GB", cpu: "独享 3核", ssd: "40GB", traffic: "2TB", port: "2.5Gbps", price: "$399.99/年", stock: true, pid: "165" },
      { name: "80G KVM - ECOMMERCE SLA LOS ANGELES VPS", ram: "4GB", cpu: "独享 4核", ssd: "80GB", traffic: "3TB", port: "2.5Gbps", price: "$699.99/年", stock: true, pid: "166" },
      { name: "160G KVM - ECOMMERCE SLA LOS ANGELES VPS", ram: "8GB", cpu: "独享 6核", ssd: "160GB", traffic: "5TB", port: "5Gbps", price: "$1099.99/年", stock: true, pid: "167" },
      { name: "320G KVM - ECOMMERCE SLA LOS ANGELES VPS", ram: "16GB", cpu: "独享 8核", ssd: "320GB", traffic: "8TB", port: "5Gbps", price: "$1999.99/年", stock: true, pid: "168" },
      { name: "640G KVM - ECOMMERCE SLA LOS ANGELES VPS", ram: "32GB", cpu: "独享 10核", ssd: "640GB", traffic: "10TB", port: "10Gbps", price: "$3699.99/年", stock: true, pid: "169" },
      { name: "1280G KVM - ECOMMERCE SLA LOS ANGELES VPS", ram: "64GB", cpu: "独享 12核", ssd: "1280GB", traffic: "12TB", port: "10Gbps", price: "$6999.99/年", stock: true, pid: "170" },
      { name: "1280G KVM - ECOMMERCE SLA LOS ANGELES HIBW 15T VPS", ram: "64GB", cpu: "独享 12核", ssd: "1280GB", traffic: "15TB", port: "10Gbps", price: "$8799.99/年", stock: true, pid: "171" },
      { name: "1280G KVM - ECOMMERCE SLA LOS ANGELES HIBW 20T VPS", ram: "64GB", cpu: "独享 12核", ssd: "1280GB", traffic: "20TB", port: "10Gbps", price: "$11598.99/年", stock: true, pid: "172" },
    ]
  },
  {
    name: "搬瓦工 新加坡 CN2 GIA",
    description: "",
    plans: [
      { name: "SPECIAL 40G KVM PROMO V5 - SINGAPORE CN2 GIA VPS", ram: "2GB", cpu: "2核", ssd: "40GB", traffic: "500GB", port: "1.5Gbps", price: "$499.99/年", stock: true, pid: "173" },
      { name: "SPECIAL 80G KVM PROMO V5 - SINGAPORE CN2 GIA VPS", ram: "4GB", cpu: "4核", ssd: "80GB", traffic: "1TB", port: "1.5Gbps", price: "$869.99/年", stock: true, pid: "174" },
      { name: "SPECIAL 160G KVM PROMO V5 - SINGAPORE CN2 GIA VPS", ram: "8GB", cpu: "6核", ssd: "160GB", traffic: "2TB", port: "2.5Gbps", price: "$1665.99/年", stock: true, pid: "175" },
      { name: "SPECIAL 320G KVM PROMO V5 - SINGAPORE CN2 GIA VPS", ram: "16GB", cpu: "8核", ssd: "320GB", traffic: "4TB", port: "2.5Gbps", price: "$3199/年", stock: true, pid: "176" },
      { name: "SPECIAL 640G KVM PROMO V5 - SINGAPORE CN2 GIA VPS", ram: "32GB", cpu: "10核", ssd: "640GB", traffic: "6TB", port: "5Gbps", price: "$5549.99/年", stock: true, pid: "177" },
      { name: "SPECIAL 1280G KVM PROMO V5 - SINGAPORE CN2 GIA VPS", ram: "64GB", cpu: "12核", ssd: "1280GB", traffic: "8TB", port: "5Gbps", price: "$10559.99/年", stock: true, pid: "178" },
    ]
  },
  {
    name: "搬瓦工 香港 CN2 GIA",
    description: "",
    plans: [
      { name: "SPECIAL 40G KVM PROMO V3 - HONG KONG VPS", ram: "2GB", cpu: "2核", ssd: "40GB", traffic: "500GB", port: "1Gbps", price: "$899.99/年", stock: true, pid: "95" },
      { name: "SPECIAL 80G KVM PROMO V3 - HONG KONG VPS", ram: "4GB", cpu: "4核", ssd: "80GB", traffic: "1TB", port: "1Gbps", price: "$1559.99/年", stock: true, pid: "96" },
      { name: "SPECIAL 160G KVM PROMO V3 - HONG KONG VPS", ram: "8GB", cpu: "6核", ssd: "160GB", traffic: "2TB", port: "1Gbps", price: "$2999.99/年", stock: true, pid: "97" },
      { name: "SPECIAL 320G 4TB KVM PROMO V3 - HONG KONG VPS", ram: "16GB", cpu: "8核", ssd: "320GB", traffic: "4TB", port: "1Gbps", price: "$5899.99/年", stock: true, pid: "98" },
      { name: "SPECIAL 640G KVM PROMO V5 - HONG KONG CN2 GIA VPS", ram: "32GB", cpu: "10核", ssd: "640GB", traffic: "6TB", port: "1Gbps", price: "$9989.99/年", stock: true, pid: "122" },
      { name: "SPECIAL 1280G KVM PROMO V5 - HONG KONG CN2 GIA VPS", ram: "64GB", cpu: "12核", ssd: "1280GB", traffic: "8TB", port: "1Gbps", price: "$18989.99/年", stock: true, pid: "124" },
    ]
  },
  {
    name: "搬瓦工 大阪 CN2 GIA",
    description: "",
    plans: [
      { name: "SPECIAL 40G KVM PROMO V5 - OSAKA CN2 GIA VPS", ram: "2GB", cpu: "2核", ssd: "40GB", traffic: "500GB", port: "1.5Gbps", price: "$499.99/年", stock: true, pid: "134" },
      { name: "SPECIAL 80G KVM PROMO V5 - OSAKA CN2 GIA VPS", ram: "4GB", cpu: "4核", ssd: "80GB", traffic: "1000GB", port: "1.5Gbps", price: "$869.99/年", stock: true, pid: "135" },
      { name: "SPECIAL 160G KVM PROMO V5 - OSAKA CN2 GIA VPS", ram: "8GB", cpu: "6核", ssd: "160GB", traffic: "2000GB", port: "1.5Gbps", price: "$1665.99/年", stock: true, pid: "136" },
      { name: "SPECIAL 320G KVM PROMO V5 - OSAKA CN2 GIA VPS", ram: "16GB", cpu: "8核", ssd: "320GB", traffic: "4000GB", port: "1.5Gbps", price: "$3279.99/年", stock: true, pid: "137" },
      { name: "SPECIAL 640G KVM PROMO V5 - OSAKA CN2 GIA VPS", ram: "32GB", cpu: "10核", ssd: "640GB", traffic: "6000GB", port: "1.5Gbps", price: "$5549.99/年", stock: true, pid: "138" },
      { name: "SPECIAL 1280G KVM PROMO V5 - OSAKA CN2 GIA VPS", ram: "64GB", cpu: "12核", ssd: "1280GB", traffic: "8000GB", port: "1.5Gbps", price: "$10559.99/年", stock: true, pid: "139" },
    ]
  },
  {
    name: "搬瓦工 东京 CN2 GIA",
    description: "",
    plans: [
      { name: "SPECIAL 40G KVM PROMO V5 - TOKYO CN2 GIA VPS", ram: "2GB", cpu: "2核", ssd: "40GB", traffic: "500GB", port: "1.2Gbps", price: "$899.99/年", stock: true, pid: "108" },
      { name: "SPECIAL 80G KVM PROMO V5 - TOKYO CN2 GIA VPS", ram: "4GB", cpu: "4核", ssd: "80GB", traffic: "1TB", port: "1.2Gbps", price: "$1559.99/年", stock: true, pid: "109" },
      { name: "SPECIAL 160G KVM PROMO V5 - TOKYO CN2 GIA VPS", ram: "8GB", cpu: "6核", ssd: "160GB", traffic: "2TB", port: "1.2Gbps", price: "$2999.99/年", stock: true, pid: "110" },
      { name: "SPECIAL 320G 4TB KVM PROMO V5 - TOKYO CN2 GIA VPS", ram: "16GB", cpu: "8核", ssd: "320GB", traffic: "4TB", port: "1.2Gbps", price: "$5899.99/年", stock: true, pid: "111" },
      { name: "SPECIAL 640G KVM PROMO V5 - TOKYO CN2 GIA VPS", ram: "32GB", cpu: "10核", ssd: "640GB", traffic: "6TB", port: "1.2Gbps", price: "$9989.99/年", stock: true, pid: "123" },
      { name: "SPECIAL 1280G KVM PROMO V5 - TOKYO CN2 GIA VPS", ram: "64GB", cpu: "12核", ssd: "1280GB", traffic: "8TB", port: "1.2Gbps", price: "$18989.99/年", stock: true, pid: "125" },
    ]
  },
  {
    name: "搬瓦工 迪拜机房",
    description: "",
    plans: [
      { name: "SPECIAL 20G KVM PROMO V5 - DUBAI - ECOMMERCE VPS", ram: "1GB", cpu: "2核", ssd: "20GB", traffic: "0.5TB", port: "1Gbps", price: "$169.99/年", stock: true, pid: "114" },
      { name: "SPECIAL 40G KVM PROMO V5 - DUBAI - ECOMMERCE VPS", ram: "2GB", cpu: "3核", ssd: "40GB", traffic: "1TB", port: "1Gbps", price: "$299.99/年", stock: true, pid: "115" },
      { name: "SPECIAL 80G KVM PROMO V3 - DUBAI - ECOMMERCE VPS", ram: "4GB", cpu: "4核", ssd: "80GB", traffic: "2TB", port: "1Gbps", price: "$549.99/年", stock: true, pid: "116" },
      { name: "SPECIAL 160G KVM PROMO V3 - DUBAI - ECOMMERCE VPS", ram: "8GB", cpu: "6核", ssd: "160GB", traffic: "3TB", port: "1Gbps", price: "$879.99/年", stock: true, pid: "117" },
      { name: "SPECIAL 320G KVM PROMO V3 - DUBAI - ECOMMERCE VPS", ram: "16GB", cpu: "8核", ssd: "320GB", traffic: "4TB", port: "1Gbps", price: "$1599.99/年", stock: true, pid: "118" },
      { name: "SPECIAL 640G KVM PROMO V3 - DUBAI - ECOMMERCE VPS", ram: "32GB", cpu: "10核", ssd: "640GB", traffic: "5TB", port: "1Gbps", price: "$2759.99/年", stock: true, pid: "119" },
      { name: "SPECIAL 1280G KVM PROMO V3 - DUBAI - ECOMMERCE VPS", ram: "64GB", cpu: "12核", ssd: "1280GB", traffic: "6TB", port: "1Gbps", price: "$5399.99/年", stock: true, pid: "120" },
    ]
  },
  {
    name: "限量版方案",
    description: "",
    plans: [
      { name: "The Tokyo Plan VPS", ram: "1GB", cpu: "1核", ssd: "20GB", traffic: "500GB", port: "2.5Gbps", price: "$79/年", stock: false, pid: "162" },
      { name: "The Tokyo Plan VPS v2", ram: "2GB", cpu: "2核", ssd: "40GB", traffic: "1000GB", port: "5Gbps", price: "$99/年", stock: false, pid: "163" },
      { name: "The Amsterdam Plan VPS", ram: "1GB", cpu: "1核", ssd: "20GB", traffic: "1000GB", port: "2.5Gbps", price: "$39/年", stock: false, pid: "159" },
      { name: "MINICHICKEN", ram: "1GB", cpu: "1核", ssd: "20GB", traffic: "1000GB", port: "1Gbps", price: "$19/年", stock: false, pid: "158" },
      { name: "NODESEEK-MEGABOX-PRO", ram: "2GB", cpu: "2核", ssd: "40GB", traffic: "2000GB", port: "2.5Gbps", price: "$49/年", stock: false, pid: "157" },
      { name: "NODESEEK-BIGGERBOX-PRO", ram: "1GB", cpu: "1核", ssd: "20GB", traffic: "1000GB", port: "2.5Gbps", price: "$39/年", stock: false, pid: "156" },
      { name: "NODESEEK-SAKURA", ram: "1GB", cpu: "1核", ssd: "30GB", traffic: "500GB", port: "1Gbps", price: "$79/年", stock: false, pid: "154" },
      { name: "The DC6 Plan VPS", ram: "1GB", cpu: "1核", ssd: "20GB", traffic: "1000GB", port: "2.5Gbps", price: "$53/年", stock: false, pid: "149" },
      { name: "THE PLAN", ram: "2GB", cpu: "2核", ssd: "40GB", traffic: "1000GB", port: "2.5Gbps", price: "$99/年", stock: false, pid: "147" },
      { name: "THE PLAN v2", ram: "2GB", cpu: "2核", ssd: "40GB", traffic: "2000GB", port: "2.5Gbps", price: "$119/年", stock: false, pid: "131" },
      { name: "The DC9 Plan VPS", ram: "768MB", cpu: "1核", ssd: "15GB", traffic: "750GB", port: "1.5Gbps", price: "$38/年", stock: false, pid: "145" },
      { name: "SPECIAL 20G KVM PROMO V5 - LOS ANGELES - CN2 GIA LIMITED EDITION VPS DC9", ram: "1GB", cpu: "1核", ssd: "20GB", traffic: "500GB", port: "1Gbps", price: "$79.99/年", stock: false, pid: "112" },
      { name: "SPECIAL 20G KVM PROMO V5 - LOS ANGELES - CN2 GIA LIMITED EDITION DC9 VPS", ram: "1GB", cpu: "1核", ssd: "20GB", traffic: "1000GB", port: "1Gbps", price: "$79.99/年", stock: false, pid: "143" },
      { name: "SPECIAL 10G KVM PROMO V5 - LOS ANGELES - CN2 GIA LIMITED EDITION VPS", ram: "0.5GB", cpu: "1核", ssd: "10GB", traffic: "500GB", port: "1Gbps", price: "$49.99/年", stock: false, pid: "94" },
      { name: "SPECIAL 20G KVM PROMO V5 - LOS ANGELES - CN2 GIA LIMITED EDITION VPS", ram: "1GB", cpu: "1核", ssd: "20GB", traffic: "500GB", port: "1Gbps", price: "$89.99/年", stock: false, pid: "105" },
      { name: "SPECIAL 20G KVM PROMO V5 - LOS ANGELES - CN2 GIA LIMITED EDITION VPS", ram: "2GB", cpu: "2核", ssd: "40GB", traffic: "1000GB", port: "2.5Gbps", price: "$89.90/年", stock: false, pid: "132" },
      { name: "THE CHICKEN", ram: "1GB", cpu: "1核", ssd: "20GB", traffic: "1000GB", port: "2.5Gbps", price: "$39.99/年", stock: false, pid: "130" },
      { name: "FREEDOM PLAN", ram: "2GB", cpu: "2核", ssd: "40GB", traffic: "2000GB", port: "2.5Gbps", price: "$89/年", stock: false, pid: "133" },
      { name: "SPECIAL 20G KVM PROMO V5 - HONG KONG 85 LIMITED EDITION VPS", ram: "1GB", cpu: "1核", ssd: "20GB", traffic: "500GB", port: "1Gbps", price: "$79.99/年", stock: false, pid: "121" },
      { name: "SPECIAL 10G KVM PROMO V5 - JAPAN LIMITED EDITION VPS", ram: "0.5GB", cpu: "1核", ssd: "10GB", traffic: "500GB", port: "1Gbps", price: "$69.99/年", stock: false, pid: "104" },
      { name: "SPECIAL 40G KVM PROMO V5 - OSAKA LIMITED EDITION VPS", ram: "2GB", cpu: "1核", ssd: "40GB", traffic: "2000GB", port: "2.5Gbps", price: "$79.99/年", stock: false, pid: "146" },
      { name: "SPECIAL 20G KVM PROMO V5 - SYDNEY LIMITED EDITION VPS", ram: "1GB", cpu: "1核", ssd: "20GB", traffic: "500GB", port: "1Gbps", price: "$99.99/年", stock: false, pid: "126" },
      { name: "SPECIAL 20G KVM PROMO V5 - DUBAI - LIMITED EDITION VPS", ram: "1GB", cpu: "1核", ssd: "20GB", traffic: "250GB", port: "1Gbps", price: "$99.99/年", stock: false, pid: "113" },
    ]
  },
];
