import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import CoinContextProvider from "./Context/CoinContextProvider.tsx";
import CoinDescription from "./components/CoinDescription.tsx";
import ErrorPage from "./components/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coin/:id",
        element: <CoinDescription />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CoinContextProvider>
      <RouterProvider router={router} />
    </CoinContextProvider>
  </StrictMode>
);
