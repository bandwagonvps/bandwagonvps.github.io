import { Hero } from '../components/home/Hero';
import { Mirrors } from '../components/home/Mirrors';
import { QuickRead } from '../components/home/QuickRead';
import { UserStage } from '../components/home/UserStage';
import { UseCases } from '../components/home/UseCases';
import { Operators } from '../components/home/Operators';
import { Coupons } from '../components/home/Coupons';
import { TestIPs } from '../components/home/TestIPs';
import { Roadmap } from '../components/home/Roadmap';
import { Troubleshooting } from '../components/home/Troubleshooting';
import { Tools } from '../components/home/Tools';
import { useSEO } from '../lib/useSEO';

export function Home() {
  useSEO({
    title: '搬瓦工官网VPS选购指南',
    description: '寻找最适合的搬瓦工(BandwagonHost)VPS？为您提供基于真实测试的搬瓦工官网购买指南、实时防封镜像直连地址及防坑避雷清单，新手必看。'
  });

  return (
    <>
      <Hero />
      <Mirrors />
      <QuickRead />
      <UserStage />
      <UseCases />
      <Operators />
      <Coupons />
      <TestIPs />
      <Roadmap />
      <Troubleshooting />
      <Tools />
    </>
  );
}
