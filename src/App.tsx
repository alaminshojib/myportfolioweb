import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import CareerGoals from "./pages/careerGoals";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<CareerGoals />} path="/careerGoals" />
      <Route element={<BlogPage />} path="/blogs" />
    </Routes>
  );
}



export default App;
