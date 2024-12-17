import { Route, Routes } from 'react-router-dom';
import { Trasnsaction } from './Transactions';
import { Auth } from './Auth';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Trasnsaction />} />
      <Route path="/user" element={<Auth />} />
    </Routes>
  );
}
