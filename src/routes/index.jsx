import { Routes, Route } from 'react-router-dom';

import Index from '../pages/Index';
import Detail from '../pages/Detail';

const AppRouter = () => (
 <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/detalle/:id" element={<Detail />} />
 </Routes>
);

export default AppRouter;