import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout, MailPage } from './app';
import { AuthLayout, LoginPage, RegisterPage } from './auth';
import { LandingPage } from './landing/LandingPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />

        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<LoginPage />} />
          <Route path="sign-up" element={<RegisterPage />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="mail" element={<MailPage />}>
            <Route path="inbox" element={<p>inbox</p>} />
            <Route path="starred" element={<p>starred</p>} />
            <Route path="sent" element={<p>sent</p>} />
            <Route path="spam" element={<p>spam</p>} />
            <Route path="trash" element={<p>trash</p>} />
          </Route>
          <Route path="cloud" element={<MailPage />}>
            <Route path="browse" element={<p>browse</p>} />
            <Route path="starred" element={<p>starred</p>} />
            <Route path="shared" element={<p>shared</p>} />
            <Route path="trash" element={<p>trash</p>} />
          </Route>
          <Route path="calendar" element={<MailPage />}>
            <Route path="overview" element={<p>overview</p>} />
            <Route path="events" element={<p>events</p>} />
          </Route>
          <Route path="investments" element={<MailPage />}>
            <Route path="dashboard" element={<p>dashboard</p>} />
            <Route path="top-trending" element={<p>top-trending</p>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
