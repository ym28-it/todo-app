import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Select from "../features/auth/pages/Select";
import Login from "../features/auth/pages/Login";
import SignUp from "../features/auth/pages/SignUp";
import TodoPage from "../features/todo/pages/TodoPage";
import SettingsPage from "../features/settings/pages/SettingsPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Select />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}
