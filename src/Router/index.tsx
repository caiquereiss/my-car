import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { AuthLayout } from "../view/layouts/AuthLayout";
import { Login } from "../view/pages/Login";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>


        <Route element={<AuthGuard isPrivate={true} />}>
          <Route path="/" element={<h1>MyCars</h1>} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}
