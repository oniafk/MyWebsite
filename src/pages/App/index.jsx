import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../../components/Layout";
import { Home } from "../Home";
import { About } from "../About";
import { Projects } from "../Projects";
import { Contact } from "../Contact";
import { NotFound } from "../NotFound";
import { Navbar } from "../../components/Navbar";
import { Modal } from "../../components/Modal";
import { ProjectDescription } from "../../components/ProjectDesccription";
import { FilterContext } from "../../context";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  const context = React.useContext(FilterContext);
  const { openModal } = context;
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <AppRoutes />
        {openModal && (
          <Modal>
            <ProjectDescription />
          </Modal>
        )}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
