import { TypographyStylesProvider } from "@mantine/core";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage, TestPage } from "./pages";

export const App: React.FC = () => (
  <TypographyStylesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </TypographyStylesProvider>
);

export default App;
