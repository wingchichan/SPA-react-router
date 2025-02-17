import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <section>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<h2>Home Page</h2>} />
        <Route path={"/about"} element={<h2>About Me</h2>} />
        {/* route for an individual user when user queries a specific username */}
        <Route path={"/users/:username"} element={<UserPage />} />
      </Routes>
    </section>
  );
}
