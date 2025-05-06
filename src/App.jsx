import { useRoutes } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
// importér flere sider...

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/kontakt", element: <div>Kontakt</div> },
    { path: "/ophold", element: <div>Ophold</div> },
    { path: "/aktiviteter", element: <div>Aktiviteter</div> },
    { path: "/min-liste", element: <div>Min liste</div> },
    { path: "/admin", element: <div>Backoffice</div> },
  ]);

  return (
    <>
      <Nav isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <main>{routes}</main>
    </>
  );
}
