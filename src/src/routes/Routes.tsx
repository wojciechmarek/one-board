import { BrowserRouter, Route, Routes } from 'react-router';
import App from '../../App';
import { AppLayout, DashboardPage, ProfilePage } from './app';
import { AuthLayout, LoginPage, RegisterPage } from './auth';

type Props = {};

const AppRoutes = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          {/* <Route path=":city" element={<City />} />
            <Route path="trending" element={<Trending />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
