import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";

// Lazy load OtherPage for code splitting
const OtherPage = lazy(() => import("./pages/OtherPage.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/toggle"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <OtherPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);



