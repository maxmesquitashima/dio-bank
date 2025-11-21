import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Conta } from "./pages/conta";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/conta/:id"
        element={<Conta />}
      />
      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />
    </Routes>
  );
};
