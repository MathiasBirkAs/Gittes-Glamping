import { useRoutes } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Ophold from "./pages/ophold";
import Kontakt from "./pages/kontakt";
import Aktiviteter from "./pages/aktiviteter";
import MinListe from "./pages/min-liste";
import Weekendtur from "./pages/Weekendtur";
import Footer from "./components/footer/Footer";
// importér flere sider...

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/ophold", element: <Ophold /> },
    { path: "/kontakt", element: <Kontakt /> },
    { path: "/aktiviteter", element: <Aktiviteter /> },
    { path: "/min-liste", element: <MinListe /> },
    { path: "/weekendtur", element: <Weekendtur /> },
    // { path: "/admin", element: <div>Backoffice</div> },
  ]);

  return (
    <>
      <Nav isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <main>{routes}</main>
      <Footer />
    </>
  );
}
