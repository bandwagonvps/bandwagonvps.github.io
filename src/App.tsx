/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { PlaceholderPage } from './pages/Placeholder';
import { CouponPage } from './pages/Coupon';
import { StartPage } from './pages/Start';
import { ChoosePage } from './pages/Choose';
import { AlternativesPage } from './pages/Alternatives';
import { ArticlePage } from './pages/Article';
import { ToolPage } from './pages/Tool';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tools/plan-selector" element={<ToolPage />} />
          <Route path="coupon" element={<CouponPage />} />
          <Route path="start" element={<StartPage />} />
          <Route path="start/:slug" element={<ArticlePage />} />
          <Route path="choose" element={<ChoosePage />} />
          <Route path="choose/:slug" element={<ArticlePage />} />
          <Route path="alternatives" element={<AlternativesPage />} />
          <Route path="alternatives/:slug" element={<ArticlePage />} />
          <Route path="*" element={<PlaceholderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
