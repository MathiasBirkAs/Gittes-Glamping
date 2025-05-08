import { useLocation, useRoutes } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Ophold from "./pages/ophold";
import Kontakt from "./pages/kontakt";
import Aktiviteter from "./pages/aktiviteter";
import MinListe from "./pages/min-liste";
import Footer from "./components/footer/Footer";
import Backoffice from "./pages/Backoffice";
import Login from "./pages/Login";
// importér flere sider...

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/ophold", element: <Ophold /> },
    { path: "/kontakt", element: <Kontakt /> },
    { path: "/aktiviteter", element: <Aktiviteter /> },
    { path: "/min-liste", element: <MinListe /> },
    {path: "/backoffice", element: <Backoffice />},
    { path: "/login", element: <Login/> }

  ]);

  return (
    <>
      <Nav isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <main>{routes}</main>
      {location.pathname !== "/backoffice" && <Footer />}
    </>
  );
}
