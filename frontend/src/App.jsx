import { Routes, Route } from "react-router-dom";
import Home from "./pages/webSite/home/Home";
import LayoutAdmin from "./components/layout/LayoutAdmin";
import LayoutWebsite from "./components/layout/LayoutWebsite";
import Skills from "./pages/webSite/Skills/Skills";
import Portfolio from "./pages/webSite/Portfolio/Portfolio";
import Contact from "./pages/webSite/Contact/Contact";
import Users from "./pages/admin/users/Users";
import Projects from "./pages/admin/Projects/Projects";
import Language from "./pages/admin/Language/Language";
import LoginAdmin from "./pages/admin/LoginAdmin";
import ProjectsInfos from "./pages/webSite/ProjectsInfo/ProjectsInfos";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route path="/" element={<Home />} />
          <Route path="competences" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/infos/:id" element={<ProjectsInfos />} />
        </Route>
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/users" element={<LayoutAdmin />}>
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/users/projects" element={<Projects />} />
          <Route path="/admin/users/language" element={<Language />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
