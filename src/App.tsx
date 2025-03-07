import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Order from './pages/Order';
import NotFound from './pages/NotFound';
import MyTickets from './pages/dash/client/MyTickets';
import MyPerson from './pages/dash/client/MyPerson';
import MyTicket from './pages/dash/client/MyTicket';
import HomeAdmn from './pages/dash/admin/HomeAdm';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import EventsAdm from './pages/dash/admin/EventsAdm';
import NotFoundAdm from './pages/dash/admin/NotFoundAdm';
import RegistrarionsAdm from './pages/dash/admin/RegistrationsAdm';
import TicketsAdm from './pages/dash/admin/TicketsAdm';
import UsersAdm from './pages/dash/admin/UsersAdm';
import CouponsAdm from './pages/dash/admin/CouponsAdm';

// Lazy Loading das páginas
const Home = lazy(() => import('./pages/Home'));
const Event = lazy(() => import('./pages/Event'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='w-screen h-screen bg-background text-white font-bold items-center  justify-center flex'>Carregando...</div>}>
        <div className='font-lexend'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order" element={<Order />} />

            {/* Rotas do Painel CLIENTE */}
            <Route path="/person" element={<MyPerson />} />
            <Route path="/tickets" element={<MyTickets />} />
            <Route path="/ticket" element={<MyTicket />} />

             {/* Rotas dos TERMOS */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />

            {/* Rotas do Painel ADM */}
            <Route path="/admin/" element={<HomeAdmn />} />
            <Route path="/admin/events" element={<EventsAdm />} />
            <Route path="/admin/registrations" element={<RegistrarionsAdm />} />
            <Route path="/admin/*" element={<NotFoundAdm />} />
            <Route path="/admin/tickets" element={<TicketsAdm/>} />
            <Route path="/admin/users" element={<UsersAdm/>} />
            <Route path="/admin/coupons" element={<CouponsAdm/>} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
