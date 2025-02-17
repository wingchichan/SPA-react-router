import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation";

export default function App() {
  return (
    <section>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<h2>Home Page</h2>} />
        <Route path={"/about"} element={<h2>About Me</h2>} />
      </Routes>
    </section>
  );
}
