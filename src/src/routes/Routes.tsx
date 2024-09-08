import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "./auth/layout/AuthLayout";
import App from "../../App";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import AppLayout from "./app/layout/AppLayout";
import DashboardPage from "./app/DashboardPage";
import ProfilePage from "./app/ProfilePage";

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
