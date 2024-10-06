import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout, CrudListPage, DashboardPage, FunctionsPage, ProfilePage } from './app';
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
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="crud-list" element={<CrudListPage />} />
          <Route path="functions" element={<FunctionsPage />} />
          {/* <Route path=":city" element={<City />} />
            <Route path="trending" element={<Trending />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
